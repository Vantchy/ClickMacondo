/* ================================================================
   sfx.js — Web Audio API 音效工具（零依赖，纯代码合成）
   古卷/书页/竹木质感 UI 音效：选中轻触音 + 确认落印音 + 翻页音
   使用棕噪声 + 三角波模拟天然有机材质纹理
   ================================================================ */

const SFX = (function () {
  'use strict';

  let _ctx = null;

  function ctx() {
    if (!_ctx) {
      _ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (_ctx.state === 'suspended') _ctx.resume();
    return _ctx;
  }

  /**
   * 生成一段棕噪声（Brown noise / Red noise）
   * 对白噪声逐采样积分 → 功率随频率平方反比下降 → 听感温暖低沉
   * 天然类似：风吹纸张、木头摩擦、远处雷鸣
   */
  function _brownNoiseBuffer(duration) {
    const c = ctx();
    const len = Math.floor(c.sampleRate * duration);
    const buf = c.createBuffer(1, len, c.sampleRate);
    const data = buf.getChannelData(0);
    let acc = 0; // 积分累加器
    for (let i = 0; i < len; i++) {
      acc += (Math.random() * 2 - 1) * 0.04; // 小步长 → 低频为主
      // 软钳位，避免长时间偏移
      if (acc > 1) acc = 1;
      if (acc < -1) acc = -1;
      data[i] = acc;
    }
    return buf;
  }

  /**
   * 播放一个有机质感音
   * @param {number} toneFreq   三角波基频 (Hz) — 温暖木质感的"身体"
   * @param {number} toneVol    三角波音量 (0~1)
   * @param {number} dur        总时长 (秒)
   * @param {number} noiseVol   棕噪声音量 (0~1) — "纹理"成分
   * @param {number} noiseCut   噪声低通截止频率 (Hz) — 越低越闷，越高越"沙"
   * @param {number} noisePct   噪声占比 (0~1) — 噪声持续时长的比例
   */
  function _playOrganic(toneFreq, toneVol, dur, noiseVol, noiseCut, noisePct) {
    try {
      const c = ctx();
      const now = c.currentTime;

      // ── 三角波：温暖木质感的基频，频率恒定（平音调） ──
      const osc = c.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(toneFreq, now);

      const oscGain = c.createGain();
      oscGain.gain.setValueAtTime(toneVol, now);
      // 指数衰减 — 模拟天然材质能量耗散
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + dur);

      osc.connect(oscGain);
      oscGain.connect(c.destination);
      osc.start(now);
      osc.stop(now + dur + 0.01);

      // ── 棕噪声：书页/竹木天然纹理 ──
      if (noiseVol > 0) {
        const noiseLen = dur * noisePct;
        const buf = _brownNoiseBuffer(noiseLen);
        const noise = c.createBufferSource();
        noise.buffer = buf;

        // 低通滤波 → 切掉数码感的高频刺耳成分
        const lp = c.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.setValueAtTime(noiseCut, now);

        const noiseGain = c.createGain();
        noiseGain.gain.setValueAtTime(noiseVol, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + noiseLen);

        noise.connect(lp);
        lp.connect(noiseGain);
        noiseGain.connect(c.destination);
        noise.start(now);
        noise.stop(now + noiseLen + 0.005);
      }
    } catch (_) {
      // AudioContext 不可用时静默降级
    }
  }

  /* ================================================================
     公开 API
     ================================================================ */

  /**
   * 选项选中音 — 轻触羊皮卷的质感
   * 低频三角波(280Hz) + 闷棕噪声(500Hz低通)
   * 60ms，轻而暖，像指甲轻碰古纸
   */
  function playSelect() {
    _playOrganic(280, 0.07, 0.060, 0.06, 500, 0.4);
  }

  /**
   * 确认执行音 — 落印/竹节断裂的厚重感
   * 更低三角波(180Hz) + 稍亮棕噪声(900Hz低通)，音量更大
   * 100ms，深沉，有"落锤定音"的宿命感
   */
  function playConfirm() {
    _playOrganic(180, 0.12, 0.100, 0.10, 900, 0.35);
  }

  /**
   * 翻页音 — 老书页翻过的沙沙声
   * 极低三角波(140Hz) + 长棕噪声(1500Hz低通)
   * 130ms，轻柔绵长，似泛黄书页彼此摩擦
   */
  function playPageTurn() {
    _playOrganic(140, 0.06, 0.130, 0.11, 1500, 0.7);
  }

  return { playSelect, playConfirm, playPageTurn };
})();
