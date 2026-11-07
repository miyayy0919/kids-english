/* ==========================================================
   TTS 人声朗读（浏览器 SpeechSynthesis）+ 旋律播放（WebAudio）
   ========================================================== */

const TTS = {
  ok: typeof speechSynthesis !== 'undefined',
  voice: null,
  _tok: 0,

  init() {
    if (!this.ok) return;
    const pick = () => {
      const vs = speechSynthesis.getVoices()
        .filter(v => v.lang && v.lang.toLowerCase().indexOf('en') === 0);
      if (!vs.length) return;
      /* 优先挑适合儿童的英文女声 */
      const pref = [/Google US English/i, /Natural/i, /Aria/i, /Jenny/i,
                    /Zira/i, /Samantha/i, /en[-_]US/i];
      let v = null;
      for (const re of pref) {
        v = vs.find(x => re.test(x.name) || re.test(x.lang));
        if (v) break;
      }
      this.voice = v || vs[0];
    };
    pick();
    if (typeof speechSynthesis.onvoiceschanged !== 'undefined') {
      speechSynthesis.onvoiceschanged = pick;
    }
  },

  /* 朗读一句话；结束后回调 onend（带兜底计时，无声音环境也能推进动画） */
  speak(text, opts, onend) {
    opts = opts || {};
    const rate = opts.rate || 0.85;
    const pitch = opts.pitch || 1.05;
    const tok = ++this._tok;

    if (!this.ok) {
      if (onend) setTimeout(onend, Math.max(1500, text.length * 120));
      return;
    }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    if (this.voice) u.voice = this.voice;
    u.lang = this.voice ? this.voice.lang : 'en-US';
    u.rate = rate;
    u.pitch = pitch;
    u.volume = 1;

    let done = false;
    const fall = setTimeout(() => fin(), Math.max(3000, text.length * 130) + 1600);
    const fin = () => {
      if (done) return;
      done = true;
      clearTimeout(fall);
      if (tok === TTS._tok && onend) onend();
    };
    u.onend = fin;
    u.onerror = fin;
    speechSynthesis.speak(u);
  },

  stop() {
    this._tok++;
    if (this.ok) speechSynthesis.cancel();
  }
};
TTS.init();

/* ---------- 音名 → 频率 ---------- */
const NOTE_FREQ = (() => {
  const names = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const map = {};
  for (let oct = 3; oct <= 5; oct++) {
    for (let i = 0; i < 12; i++) {
      const midi = (oct + 1) * 12 + i;              /* C4 = 60 */
      map[names[i] + oct] = 440 * Math.pow(2, (midi - 69) / 12);
    }
  }
  return map;
})();

const Melody = {
  _st: null,

  /* 第 idx 个音符在旋律中的起始时间（秒），scale<1 为慢速 */
  noteStart(key, idx, scale) {
    const m = MELODIES[key];
    if (!m || !m.notes.length) return 0;
    scale = scale || 1;
    const beat = 60 / (m.tempo * scale);
    let t = 0;
    const n = Math.min(idx || 0, m.notes.length);
    for (let i = 0; i < n; i++) t += m.notes[i][1] * beat;
    return t;
  },

  /* 从第 fromNote 个音符开始播放（用于点句跳唱）；返回 {delay, duration} */
  play(key, fromNote, scale) {
    this.stop();
    const m = MELODIES[key];
    if (!m) return null;
    fromNote = Math.max(0, fromNote || 0);
    scale = scale || 1;
    try {
      const ac = new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === 'suspended' && ac.resume) ac.resume();
      this._st = { ac };
      const beat = 60 / (m.tempo * scale);
      const startT = ac.currentTime + 0.15;
      let t = startT;
      m.notes.forEach((pair, i) => {
        if (i < fromNote) return;
        const n = pair[0], d = pair[1];
        const f = NOTE_FREQ[n];
        const dur = d * beat;
        if (f) {
          const o = ac.createOscillator();
          const g = ac.createGain();
          o.type = 'triangle';
          o.frequency.value = f;
          g.gain.setValueAtTime(0.0001, t);
          g.gain.exponentialRampToValueAtTime(0.26, t + 0.04);
          g.gain.exponentialRampToValueAtTime(0.0001, t + dur * 0.92);
          o.connect(g); g.connect(ac.destination);
          o.start(t); o.stop(t + dur);
        }
        t += dur;
      });
      const duration = t - startT;
      this._st.endTimer = setTimeout(() => this.stop(), (duration + 0.4) * 1000);
      return { delay: 0.15, duration: duration };
    } catch (e) { return null; /* 浏览器不支持 WebAudio 时静默跳过 */ }
  },

  stop() {
    if (this._st) {
      clearTimeout(this._st.endTimer);
      try { this._st.ac.close(); } catch (e) {}
      this._st = null;
    }
  }
};
