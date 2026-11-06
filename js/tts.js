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

  play(key) {
    this.stop();
    const m = MELODIES[key];
    if (!m) return;
    try {
      const ac = new (window.AudioContext || window.webkitAudioContext)();
      this._st = { ac };
      let t = ac.currentTime + 0.08;
      const beat = 60 / m.tempo;
      m.notes.forEach(pair => {
        const n = pair[0], d = pair[1];
        const f = NOTE_FREQ[n];
        if (!f) { t += d * beat; return; }
        const dur = d * beat;
        const o = ac.createOscillator();
        const g = ac.createGain();
        o.type = 'triangle';
        o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.22, t + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur * 0.95);
        o.connect(g); g.connect(ac.destination);
        o.start(t); o.stop(t + dur);
        t += dur;
      });
      this._st.endTimer = setTimeout(() => this.stop(), (t - ac.currentTime + 0.4) * 1000);
    } catch (e) { /* 浏览器不支持 WebAudio 时静默跳过 */ }
  },

  stop() {
    if (this._st) {
      clearTimeout(this._st.endTimer);
      try { this._st.ac.close(); } catch (e) {}
      this._st = null;
    }
  }
};
