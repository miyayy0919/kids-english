/* ==========================================================
   小星星英语乐园 · 主交互逻辑
   ========================================================== */

/* ---------- 工具 ---------- */
const $ = (s, p) => (p || document).querySelector(s);
const $$ = (s, p) => Array.from((p || document).querySelectorAll(s));
const app = $('#app');

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
function bestStars(key) { return +(localStorage.getItem('te_stars_' + key) || 0); }
function saveStars(key, n) { if (n > bestStars(key)) localStorage.setItem('te_stars_' + key, n); }
function starsHtml(n) { return n > 0 ? '⭐'.repeat(n) : '<span style="opacity:.35">☆☆☆</span>'; }

/* Seedream/Seedance 生成素材的替换接口：
   存在 assets/video/<id>.mp4 时"看动画"自动播放生成短片，否则用内置 SVG+TTS 播放器 */
const ASSETS = {
  video: id => 'assets/video/' + id + '.mp4',
  img: id => 'assets/img/' + id + '.png'
};

/* ---------- 录音跟读 + 语音识别打分 ---------- */
const SR_OK = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
let REC = { active: false, media: null, rec: null, chunks: [], sr: null, btn: null, lineEl: null };

async function toggleRec(btn, line, lineEl) {
  if (REC.active) { stopRec(); return; }
  const res = $('.sl-result', lineEl);
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    res.innerHTML = '<span class="rec-warn">⚠️ 浏览器不支持录音，请用 Chrome / Edge 并通过 localhost 访问</span>';
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    REC = { active: true, media: stream, chunks: [], btn, lineEl };
    lineEl.classList.add('recording');
    btn.textContent = '⏹ 停止';
    btn.classList.add('rec-on');
    res.innerHTML = '<span class="rec-live">🔴 录音中…读完这句请点击「停止」</span>';
    REC.rec = new MediaRecorder(stream);
    REC.rec.ondataavailable = e => REC.chunks.push(e.data);
    REC.rec.onstop = () => {
      try {
        const blob = new Blob(REC.chunks, { type: REC.rec.mimeType || 'audio/webm' });
        new Audio(URL.createObjectURL(blob)).play().catch(() => {});
      } catch (e) {}
    };
    REC.rec.start();
    startSR(line.en, lineEl);
  } catch (err) {
    REC.active = false;
    res.innerHTML = '<span class="rec-warn">⚠️ 无法访问麦克风：请允许麦克风权限（需通过 localhost 访问）</span>';
  }
}

function startSR(target, lineEl) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const res = $('.sl-result', lineEl);
  if (!SR) {
    res.innerHTML += '<div class="rec-note">（此浏览器暂不支持语音识别打分，已自动回放你的录音，和示范对比着读一读吧）</div>';
    return;
  }
  try {
    const r = new SR();
    r.lang = 'en-US'; r.interimResults = false; r.maxAlternatives = 1;
    REC.sr = r;
    r.onresult = e => {
      const heard = e.results[0][0].transcript;
      const score = similarity(heard, target);
      const face = score >= 85 ? '🌟' : score >= 60 ? '👍' : '💪';
      res.innerHTML = '<span class="rec-score">' + face + ' 识别：<b>' + esc(heard) +
        '</b>　相似度 <b class="' + (score >= 85 ? 'ok' : score >= 60 ? 'mid' : 'low') + '">' + score + '%</b></span>';
    };
    r.onerror = () => {};
    r.start();
  } catch (e) {}
}

function stopRec() {
  try { if (REC.rec && REC.rec.state !== 'inactive') REC.rec.stop(); } catch (e) {}
  try { if (REC.sr) REC.sr.stop(); } catch (e) {}
  try { if (REC.media) REC.media.getTracks().forEach(t => t.stop()); } catch (e) {}
  if (REC.btn) { REC.btn.textContent = '🎤 跟读'; REC.btn.classList.remove('rec-on'); }
  if (REC.lineEl) REC.lineEl.classList.remove('recording');
  REC = { active: false, media: null, rec: null, chunks: [], sr: null, btn: null, lineEl: null };
}

function similarity(a, b) {
  const norm = s => s.toLowerCase().replace(/[^a-z' ]/g, ' ').replace(/\s+/g, ' ').trim();
  a = norm(a); b = norm(b);
  if (!a || !b) return 0;
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return Math.max(0, Math.round((1 - dp[m][n] / Math.max(m, n)) * 100));
}

/* ---------- 动画播放器（SVG 场景 + TTS 逐句吟诵） ---------- */
let ANIM = null;

function stopAnim() {
  if (!ANIM) return;
  ANIM.dead = true;
  TTS.stop();
  ANIM = null;
}

function playLine(i) {
  if (!ANIM || ANIM.dead || !ANIM.playing) return;
  const r = ANIM.r, lines = r.lines;
  if (i >= lines.length) {
    ANIM.playing = false;
    ANIM.idx = -1;
    const e = $('#asEn'), c = $('#asCn');
    if (e) { e.textContent = '🎉 播放完成！'; }
    if (c) { c.textContent = '点击「▶ 播放」再听一遍'; }
    return;
  }
  ANIM.idx = i;
  const line = lines[i];
  Scenes.act(r.id, ANIM.stage, i);
  const e = $('#asEn'), c = $('#asCn');
  if (e) e.textContent = line.en;
  if (c) c.textContent = line.cn;
  $$('#aDots i').forEach((d, k) => { d.className = k < i ? 'done' : (k === i ? 'on' : ''); });
  const rows = $$('#animLyrics .lyric-row');
  rows.forEach((row, k) => row.classList.toggle('on', k === i));
  if (rows[i]) rows[i].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  TTS.speak(line.en, { rate: ANIM.rate }, () => {
    if (ANIM && !ANIM.dead && ANIM.playing) playLine(i + 1);
  });
}

function renderVideoPlayer(r, body, vpath) {
  body.innerHTML =
    '<div class="anim-wrap card">' +
      '<video class="gen-video" controls>' +
        '<source src="' + vpath + '" type="video/mp4">' +
      '</video>' +
      '<div class="video-note">🎬 正在播放 Seedance 生成的动画短片（含英文人声吟诵）</div>' +
      '<div class="anim-ctrl">' +
        '<button class="btn btn-white" id="useSvgPlayer">🐢 使用内置动画播放器（逐句跟读）</button>' +
      '</div>' +
    '</div>';
  $('#useSvgPlayer').onclick = () => renderSvgPlayer(r, body);
  const v = $('video', body);
  v.onerror = () => renderSvgPlayer(r, body);
}

function renderSvgPlayer(r, body) {
  stopAnim();
  body.innerHTML =
    '<div class="anim-wrap card">' +
      '<div class="stage" id="animStage"></div>' +
      '<div class="anim-sub">' +
        '<div class="as-en" id="asEn">准备好了吗？点击「播放」开始 🎬</div>' +
        '<div class="as-cn" id="asCn">场景动画 + 英文人声吟诵，跟着一起唱</div>' +
      '</div>' +
      '<div class="anim-ctrl">' +
        '<button class="btn btn-red" id="aPlay">▶ 播放</button>' +
        '<button class="btn btn-white" id="aStop">⏹ 停止</button>' +
        '<button class="btn btn-white" id="aSpeed">🐢 慢速：关</button>' +
        '<span class="a-dots" id="aDots">' + r.lines.map(() => '<i></i>').join('') + '</span>' +
      '</div>' +
    '</div>' +
    '<div class="card anim-lyrics">' +
      '<h3 class="card-title">📜 逐句字幕（点击任意一句可跳转播放）</h3>' +
      '<div class="lyric-list compact" id="animLyrics">' +
        r.lines.map((l, i) =>
          '<div class="lyric-row" data-i="' + i + '">' +
            '<div class="lr-en">' + esc(l.en) + '</div>' +
            '<div class="lr-cn">' + esc(l.cn) + '</div>' +
          '</div>').join('') +
      '</div>' +
    '</div>';
  const stage = $('#animStage');
  Scenes.mount(r.id, stage);
  ANIM = { r, stage, idx: -1, playing: false, rate: 0.88, dead: false };

  $('#aPlay').onclick = () => {
    if (!ANIM || ANIM.playing) return;
    ANIM.dead = false;
    ANIM.playing = true;
    let start = ANIM.idx + 1;
    if (start >= r.lines.length) start = 0;
    playLine(start);
  };
  $('#aStop').onclick = () => {
    stopAnim();
    $$('#aDots i').forEach(d => { d.className = ''; });
    $$('#animLyrics .lyric-row').forEach(x => x.classList.remove('on'));
    Scenes.mount(r.id, $('#animStage'));
    ANIM = { r, stage: $('#animStage'), idx: -1, playing: false, rate: 0.88, dead: false };
    $('#asEn').textContent = '准备好了吗？点击「播放」开始 🎬';
    $('#asCn').textContent = '场景动画 + 英文人声吟诵，跟着一起唱';
  };
  $('#aSpeed').onclick = function () {
    if (!ANIM) return;
    ANIM.rate = ANIM.rate > 0.8 ? 0.68 : 0.88;
    this.textContent = ANIM.rate > 0.8 ? '🐢 慢速：关' : '🐢 慢速：开';
  };
  $$('#animLyrics .lyric-row').forEach((row, k) => {
    row.onclick = () => {
      if (!ANIM) return;
      const cur = ANIM.idx;
      ANIM.dead = true;
      TTS.stop();
      if (k <= cur) Scenes.mount(r.id, ANIM.stage);  /* 向前跳时重置场景 */
      ANIM.dead = false;
      ANIM.playing = true;
      ANIM.idx = k - 1;
      playLine(k);
    };
  });
}

function renderAnim(r, body) {
  const vpath = ASSETS.video(r.id);
  if (location.protocol === 'http:' || location.protocol === 'https:') {
    fetch(vpath, { method: 'HEAD' }).then(res => {
      if (res.ok) renderVideoPlayer(r, body, vpath);
      else renderSvgPlayer(r, body);
    }).catch(() => renderSvgPlayer(r, body));
  } else {
    renderSvgPlayer(r, body);
  }
}

/* ---------- 首页 ---------- */
function renderHome() {
  const songCards = RHYMES.map(r =>
    '<a class="song-mini" href="#/song/' + r.id + '">' +
      '<div class="stage mini" data-scene="' + r.id + '"></div>' +
      '<div class="song-mini-info">' +
        '<div class="song-mini-emoji">' + r.emoji + '</div>' +
        '<div><div class="song-mini-title">' + esc(r.cnTitle) + '</div>' +
        '<div class="song-mini-en">' + esc(r.title) + '</div></div>' +
        '<div class="song-mini-stars">' + starsHtml(bestStars(r.id)) + '</div>' +
      '</div>' +
    '</a>').join('');
  app.innerHTML =
    '<section class="hero card">' +
      '<div class="hero-banner" id="heroBanner"></div>' +
      '<div class="hero-body">' +
        '<h1>⭐ 小星星英语乐园</h1>' +
        '<p class="hero-sub">Twinkle English · See it, Hear it, Know it</p>' +
        '<p class="hero-desc">学单词、练口语、唱儿歌——沉浸式英语启蒙，像看动画一样学英语！</p>' +
        '<div class="hero-btns">' +
          '<a class="btn btn-red" href="#/words">🔤 开始学单词</a>' +
          '<a class="btn btn-blue" href="#/songs">🎵 进入儿歌剧场</a>' +
        '</div>' +
      '</div>' +
    '</section>' +
    '<section class="modules">' +
      '<a class="module-card card" href="#/words" style="--mc:' + "'#FF6B6B'" + '">' +
        '<div class="mc-emoji">🔤</div><h3>学单词</h3>' +
        '<p>6 大主题 · 48 个启蒙单词<br>点一点听发音，还有听音选图小游戏</p>' +
      '</a>' +
      '<a class="module-card card" href="#/speak" style="--mc:' + "'#4D96FF'" + '">' +
        '<div class="mc-emoji">🎤</div><h3>练口语</h3>' +
        '<p>4 组情景对话 · 示范跟读<br>录音回放' + (SR_OK ? ' + 智能打分' : '') + '</p>' +
      '</a>' +
      '<a class="module-card card" href="#/songs" style="--mc:' + "'#6BCB77'" + '">' +
        '<div class="mc-emoji">🎵</div><h3>唱儿歌</h3>' +
        '<p>5 首经典儿歌 · 动画短片<br>每首 5 道知识测验，攒星星</p>' +
      '</a>' +
    '</section>' +
    '<section class="home-songs">' +
      '<h2 class="sec-title">🎵 精选儿歌</h2>' +
      '<div class="song-strip">' + songCards + '</div>' +
    '</section>';
  Scenes.mountHero($('#heroBanner'));
  $$('.stage.mini').forEach(el => Scenes.mount(el.dataset.scene, el));
}

/* ---------- 学单词 ---------- */
let wordTheme = 'animals';
let wpState = null;

function renderPracticePanel(t) {
  const wrap = $('#practiceWrap');
  if (!wpState || wpState.themeId !== t.id) {
    wrap.innerHTML =
      '<div class="practice-idle"><span>🎮 听音选图小游戏</span>' +
      '<button class="btn btn-green" id="startPractice">开始挑战</button></div>';
    $('#startPractice').onclick = () => {
      wpState = { themeId: t.id, order: shuffle(t.words.map((_, i) => i)), i: 0, score: 0 };
      renderPracticePanel(t);
    };
    return;
  }
  const st = wpState;
  if (st.i >= st.order.length) {
    const s = st.score, n = st.order.length;
    wrap.innerHTML =
      '<div class="practice-end">' +
        '<div class="pe-emoji">' + (s === n ? '🏆' : s >= n * 0.6 ? '🎉' : '💪') + '</div>' +
        '<p>本关得分 <b style="color:var(--green-d)">' + s + '</b> / ' + n + '</p>' +
        '<p class="pe-tip">' + (s === n ? '太棒了，全对！' : s >= n * 0.6 ? '很不错，再练一次冲满分！' : '多听几遍单词卡，再来挑战吧！') + '</p>' +
        '<button class="btn btn-yellow" id="againPractice">🔄 再来一次</button>' +
      '</div>';
    $('#againPractice').onclick = () => { wpState = null; renderPracticePanel(t); };
    return;
  }
  const correct = t.words[st.order[st.i]];
  const pool = [correct].concat(shuffle(t.words.filter(w => w !== correct)).slice(0, 3));
  shuffle(pool);
  wrap.innerHTML =
    '<div class="practice-head"><span>🎮 听音选图</span>' +
    '<span class="p-progress">' + (st.i + 1) + ' / ' + st.order.length + ' · 得分 ' + st.score + '</span></div>' +
    '<div class="practice-q">' +
      '<button class="btn btn-blue" id="replayWord">🔊 再听一遍</button>' +
      '<span class="pq-hint">听单词发音，选出正确的图片</span>' +
    '</div>' +
    '<div class="practice-opts">' +
      pool.map(w =>
        '<button class="p-opt card" data-ok="' + (w === correct ? 1 : 0) + '">' +
        '<div class="po-emoji">' + w.emoji + '</div></button>').join('') +
    '</div>';
  $('#replayWord').onclick = () => TTS.speak(correct.en, { rate: 0.8 });
  TTS.speak(correct.en, { rate: 0.8 });
  $$('.p-opt', wrap).forEach(b => {
    b.onclick = () => {
      if (wrap.dataset.lock) return;
      wrap.dataset.lock = '1';
      const ok = b.dataset.ok === '1';
      if (ok) {
        st.score++;
        b.classList.add('good');
        TTS.speak('Great job!', { rate: 0.9 });
      } else {
        b.classList.add('bad');
        $$('.p-opt', wrap).forEach(x => { if (x.dataset.ok === '1') x.classList.add('good'); });
      }
      setTimeout(() => {
        delete wrap.dataset.lock;
        st.i++;
        renderPracticePanel(t);
      }, ok ? 850 : 1500);
    };
  });
}

function renderWords() {
  const t = WORD_THEMES.find(x => x.id === wordTheme) || WORD_THEMES[0];
  const tabs = WORD_THEMES.map(x =>
    '<button class="theme-tab ' + (x.id === t.id ? 'on' : '') + '" data-t="' + x.id + '">' +
    x.emoji + ' ' + x.name + '</button>').join('');
  const cards = t.words.map((w, i) =>
    '<div class="word-card card" data-i="' + i + '">' +
      '<div class="wc-emoji">' + w.emoji + '</div>' +
      '<div class="wc-en">' + esc(w.en) + '</div>' +
      '<div class="wc-ipa">' + esc(w.ipa) + '</div>' +
      '<div class="wc-cn">' + esc(w.cn) + '</div>' +
      '<button class="wc-ex" title="点击听例句">💬 ' + esc(w.ex) + '</button>' +
    '</div>').join('');
  app.innerHTML =
    '<h2 class="sec-title">🔤 学单词 · Word Garden</h2>' +
    '<p class="sec-sub">点卡片听发音，点 💬 听例句；学完一个主题，来玩「听音选图」吧！</p>' +
    '<div class="theme-tabs">' + tabs + '</div>' +
    '<div class="word-grid">' + cards + '</div>' +
    '<div class="practice-wrap card" id="practiceWrap"></div>';
  $$('.theme-tab').forEach(b => {
    b.onclick = () => { wordTheme = b.dataset.t; wpState = null; renderWords(); };
  });
  $$('.word-card').forEach(c => {
    c.onclick = e => {
      if (e.target.closest('.wc-ex')) return;
      const w = t.words[+c.dataset.i];
      TTS.speak(w.en, { rate: 0.8 });
      c.classList.remove('flash');
      void c.offsetWidth;
      c.classList.add('flash');
    };
  });
  $$('.wc-ex').forEach(b => {
    b.onclick = e => {
      e.stopPropagation();
      const w = t.words[+b.closest('.word-card').dataset.i];
      TTS.speak(w.ex, { rate: 0.82 });
    };
  });
  renderPracticePanel(t);
}

/* ---------- 练口语 ---------- */
let speakScene = 'greet';

function renderSpeak() {
  const s = SPEAK_SCENES.find(x => x.id === speakScene) || SPEAK_SCENES[0];
  const tabs = SPEAK_SCENES.map(x =>
    '<button class="theme-tab ' + (x.id === s.id ? 'on' : '') + '" data-t="' + x.id + '">' +
    x.emoji + ' ' + x.name + '</button>').join('');
  app.innerHTML =
    '<h2 class="sec-title">🎤 练口语 · Talk Time</h2>' +
    '<p class="sec-sub">先听示范跟读，再录音听听自己的声音' +
    (SR_OK ? '，还有智能打分哦' : '') + '！</p>' +
    '<div class="theme-tabs">' + tabs + '</div>' +
    '<div class="speak-detail card">' +
      '<p class="speak-desc">' + esc(s.desc) + '</p>' +
      '<div class="speak-lines">' +
        s.lines.map((l, i) =>
          '<div class="speak-line" data-i="' + i + '">' +
            '<div class="sl-num">' + (i + 1) + '</div>' +
            '<div class="sl-txt">' +
              '<div class="sl-en">' + esc(l.en) + '</div>' +
              '<div class="sl-cn">' + esc(l.cn) + '</div>' +
              '<div class="sl-result" id="slr-' + i + '"></div>' +
            '</div>' +
            '<button class="btn-mini btn-blue2" data-act="play">🔊 示范</button>' +
            '<button class="btn-mini btn-pink" data-act="rec">🎤 跟读</button>' +
          '</div>').join('') +
      '</div>' +
      '<div class="tip-box">💡 ' + esc(s.tip) + '</div>' +
    '</div>';
  $$('.theme-tab').forEach(b => {
    b.onclick = () => { speakScene = b.dataset.t; stopRec(); renderSpeak(); };
  });
  $$('.speak-line .btn-mini').forEach(b => {
    b.onclick = () => {
      const lineEl = b.closest('.speak-line');
      const line = s.lines[+lineEl.dataset.i];
      if (b.dataset.act === 'play') {
        TTS.speak(line.en, { rate: 0.8 });
      } else {
        toggleRec(b, line, lineEl);
      }
    };
  });
}

/* ---------- 儿歌列表 ---------- */
function renderSongs() {
  app.innerHTML =
    '<h2 class="sec-title">🎵 唱儿歌 · Song Stage</h2>' +
    '<p class="sec-sub">5 首经典英文儿歌：学一学 · 看动画 · 测一测——看见它、听见它、读懂它！</p>' +
    '<div class="song-grid">' +
      RHYMES.map(r =>
        '<a class="song-card card" href="#/song/' + r.id + '">' +
          '<div class="stage mini" data-scene="' + r.id + '"></div>' +
          '<div class="sc-body">' +
            '<div class="sc-titles"><span class="sc-emoji">' + r.emoji + '</span>' +
            '<div><div class="sc-cn">' + esc(r.cnTitle) + '</div>' +
            '<div class="sc-en">' + esc(r.title) + '</div></div></div>' +
            '<p class="sc-desc">' + esc(r.desc) + '</p>' +
            '<div class="sc-meta"><span class="sc-stars">' + starsHtml(bestStars(r.id)) + '</span>' +
            '<span class="btn btn-yellow btn-sm">开始学习 →</span></div>' +
          '</div>' +
        '</a>').join('') +
    '</div>';
  $$('.stage.mini').forEach(el => Scenes.mount(el.dataset.scene, el));
}

/* ---------- 儿歌详情 ---------- */
let songTab = {};
let quizState = null;

function renderLearn(r, body) {
  body.innerHTML =
    '<div class="learn-grid">' +
      '<div class="card lyric-card">' +
        '<h3 class="card-title">📜 歌词 · Lyrics</h3>' +
        '<div class="lyric-list">' +
          r.lines.map((l, i) =>
            '<div class="lyric-row" data-i="' + i + '">' +
              '<div class="lr-en">' + esc(l.en) + '</div>' +
              '<div class="lr-cn">' + esc(l.cn) + '</div>' +
            '</div>').join('') +
        '</div>' +
        '<p class="lyric-hint">💡 点击任意一句即可听朗读</p>' +
      '</div>' +
      '<div class="learn-right">' +
        '<div class="card">' +
          '<h3 class="card-title">🌙 儿歌解析</h3>' +
          r.analysis.map(p => '<p class="ana-p">' + esc(p) + '</p>').join('') +
          '<h4 class="sub-title">✨ 学一学</h4>' +
          '<ul class="learn-points">' + r.learn.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>' +
        '</div>' +
        '<div class="card">' +
          '<h3 class="card-title">🔤 核心词汇</h3>' +
          '<div class="vocab-chips">' +
            r.vocab.map(v =>
              '<button class="vchip" data-w="' + esc(v.w) + '"><b>' + esc(v.w) + '</b>' +
              '<span>' + esc(v.ipa) + '</span><i>' + esc(v.cn) + '</i></button>').join('') +
          '</div>' +
          (r.melody ? '<button class="btn btn-purple" id="melodyBtn">🎹 听旋律</button>' : '') +
        '</div>' +
      '</div>' +
    '</div>';
  $$('.lyric-row', body).forEach(row => {
    row.onclick = () => {
      TTS.speak(r.lines[+row.dataset.i].en, { rate: 0.82 });
      row.classList.add('flash');
      setTimeout(() => row.classList.remove('flash'), 600);
    };
  });
  $$('.vchip', body).forEach(c => {
    c.onclick = () => TTS.speak(c.dataset.w, { rate: 0.8 });
  });
  const mb = $('#melodyBtn');
  if (mb) mb.onclick = () => Melody.play(r.melody);
}

function renderQuiz(r, body) {
  if (!quizState || quizState.rid !== r.id) {
    quizState = { rid: r.id, i: 0, score: 0, answered: false, opts: null };
  }
  const st = quizState;
  const qs = r.quiz;

  if (st.i >= qs.length) {
    const stars = st.score >= 5 ? 3 : st.score >= 3 ? 2 : st.score >= 1 ? 1 : 0;
    saveStars(r.id, stars);
    body.innerHTML =
      '<div class="card quiz-card quiz-end">' +
        '<div class="qe-emoji">' + (stars === 3 ? '🏆' : stars === 2 ? '🎉' : stars === 1 ? '💪' : '🌱') + '</div>' +
        '<h3>' + st.score + ' / ' + qs.length + ' 题正确</h3>' +
        '<div class="qe-stars">' + (stars > 0 ? '⭐'.repeat(stars) : '还没有星星，再试一次吧') + '</div>' +
        '<p class="qe-tip">' + (stars === 3 ? '完美！这首歌你完全读懂啦！' :
          stars === 2 ? '很棒！再复习一下解析就能满分！' : '去「学一学」看看解析，再来挑战吧！') + '</p>' +
        '<div class="qe-btns">' +
          '<button class="btn btn-yellow" id="qRetry">🔄 再测一次</button>' +
          '<a class="btn btn-blue" href="#/songs">🎵 换一首</a>' +
        '</div>' +
      '</div>';
    $('#qRetry').onclick = () => { quizState = null; renderQuiz(r, body); };
    return;
  }

  const q = qs[st.i];
  if (!st.opts) st.opts = shuffle([0, 1, 2, 3]);
  body.innerHTML =
    '<div class="card quiz-card">' +
      '<div class="q-head"><span class="q-progress">第 ' + (st.i + 1) + ' / ' + qs.length + ' 题</span>' +
      '<span class="q-score">得分 ' + st.score + '</span></div>' +
      '<div class="q-dots">' + qs.map((_, k) =>
        '<i class="' + (k < st.i ? 'done' : k === st.i ? 'on' : '') + '"></i>').join('') + '</div>' +
      '<h3 class="q-text">' + esc(q.q) + '</h3>' +
      '<div class="q-opts">' +
        st.opts.map((oi, pos) =>
          '<button class="q-opt" data-oi="' + oi + '">' +
          '<span class="qo-letter">' + 'ABCD'[pos] + '</span>' +
          '<span class="qo-txt">' + esc(q.opts[oi]) + '</span></button>').join('') +
      '</div>' +
      '<div class="q-why" id="qWhy"></div>' +
      '<div class="q-next"><button class="btn btn-green" id="qNext" style="display:none">下一题 →</button></div>' +
    '</div>';

  $$('.q-opt', body).forEach(b => {
    b.onclick = () => {
      if (st.answered) return;
      st.answered = true;
      const oi = +b.dataset.oi;
      const ok = oi === q.a;
      if (ok) {
        st.score++;
        b.classList.add('good');
      } else {
        b.classList.add('bad');
        $$('.q-opt', body).forEach(x => { if (+x.dataset.oi === q.a) x.classList.add('good'); });
      }
      $$('.q-opt', body).forEach(x => { x.disabled = true; });
      const why = $('#qWhy');
      why.innerHTML = (ok ? '✅ 答对啦！' :
        '❌ 正确答案是 ' + 'ABCD'[st.opts.indexOf(q.a)] + '。') + esc(q.why);
      why.className = 'q-why show ' + (ok ? 'ok' : 'no');
      const nx = $('#qNext');
      nx.style.display = '';
      nx.textContent = st.i === qs.length - 1 ? '看成绩 🏁' : '下一题 →';
    };
  });
  $('#qNext').onclick = () => {
    st.i++;
    st.answered = false;
    st.opts = null;
    renderQuiz(r, body);
  };
}

function renderSong(id) {
  const r = RHYMES.find(x => x.id === id);
  if (!r) { location.hash = '#/songs'; return; }
  const tab = songTab[id] || 'learn';
  const idx = RHYMES.indexOf(r);
  const prev = RHYMES[(idx - 1 + RHYMES.length) % RHYMES.length];
  const next = RHYMES[(idx + 1) % RHYMES.length];
  app.innerHTML =
    '<div class="song-head">' +
      '<a class="back-link" href="#/songs">← 返回儿歌列表</a>' +
      '<div class="sh-titles">' +
        '<div class="sh-emoji">' + r.emoji + '</div>' +
        '<div><h2>' + esc(r.cnTitle) + '</h2><p class="sh-en">' + esc(r.title) + '</p></div>' +
      '</div>' +
      '<p class="sh-desc">' + esc(r.desc) + '</p>' +
    '</div>' +
    '<div class="song-tabs">' +
      '<button class="stab ' + (tab === 'learn' ? 'on' : '') + '" data-tab="learn">📖 学一学</button>' +
      '<button class="stab ' + (tab === 'anim' ? 'on' : '') + '" data-tab="anim">🎬 看动画</button>' +
      '<button class="stab ' + (tab === 'quiz' ? 'on' : '') + '" data-tab="quiz">🏆 测一测</button>' +
    '</div>' +
    '<div id="songBody"></div>' +
    '<div class="song-nav">' +
      '<a href="#/song/' + prev.id + '" class="btn btn-white">← ' + esc(prev.cnTitle) + '</a>' +
      '<a href="#/song/' + next.id + '" class="btn btn-white">' + esc(next.cnTitle) + ' →</a>' +
    '</div>';
  $$('.stab').forEach(b => {
    b.onclick = () => {
      stopAnim();
      TTS.stop();
      Melody.stop();
      stopRec();
      songTab[id] = b.dataset.tab;
      renderSong(id);
    };
  });
  const body = $('#songBody');
  if (tab === 'learn') renderLearn(r, body);
  else if (tab === 'anim') renderAnim(r, body);
  else renderQuiz(r, body);
}

/* ---------- 路由 ---------- */
function route() {
  stopAnim();
  TTS.stop();
  Melody.stop();
  stopRec();
  const h = (location.hash || '#/home').replace(/^#\/?/, '');
  const parts = h.split('/');
  const page = parts[0] || 'home';
  const param = parts[1];
  const routeName = page === 'song' ? 'songs' : page;
  $$('#nav a').forEach(a => a.classList.toggle('active', a.dataset.route === routeName));
  window.scrollTo(0, 0);
  if (page === 'words') renderWords();
  else if (page === 'speak') renderSpeak();
  else if (page === 'songs') renderSongs();
  else if (page === 'song' && param) renderSong(param);
  else renderHome();
}

window.addEventListener('hashchange', route);
route();
