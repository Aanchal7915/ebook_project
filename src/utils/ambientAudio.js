// Web Audio API Ambient Sound Synthesizer for "The Third Eye"
// Pure procedural synthesis - no external audio files required!

class AmbientEngine {
  constructor() {
    this.ctx = null;
    this.activeTrack = null;
    this.nodes = [];
    this.gainNode = null;
    this.masterVolume = 0.45;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(val) {
    this.masterVolume = Math.max(0, Math.min(1, val));
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setTargetAtTime(this.masterVolume, this.ctx.currentTime, 0.05);
    }
  }

  stop() {
    this.nodes.forEach(n => {
      try {
        if (n.stop) n.stop();
        if (n.disconnect) n.disconnect();
      } catch (e) {
        // ignore
      }
    });
    this.nodes = [];
    this.activeTrack = null;
  }

  // 1. Cosmic 432Hz Drone with Theta oscillation (Deep Contemplation)
  playCosmicDrone() {
    this.init();
    this.stop();
    this.activeTrack = 'cosmic-drone';

    const fundamental = 108; // Sacred harmonic (432 / 4)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const osc3 = this.ctx.createOscillator();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(fundamental, this.ctx.currentTime);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(fundamental * 2, this.ctx.currentTime); // 216Hz

    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(fundamental * 4, this.ctx.currentTime); // 432Hz

    // LFO for gentle 6Hz Theta pulsing
    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime); // slow breath
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(15, this.ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(osc3.frequency);

    // Filter to warm up sound
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(550, this.ctx.currentTime);

    const subGain = this.ctx.createGain();
    subGain.gain.setValueAtTime(0.3, this.ctx.currentTime);

    osc1.connect(subGain);
    osc2.connect(subGain);
    osc3.connect(subGain);
    subGain.connect(filter);
    filter.connect(this.gainNode);

    osc1.start();
    osc2.start();
    osc3.start();
    lfo.start();

    this.nodes.push(osc1, osc2, osc3, lfo, lfoGain, subGain, filter);
  }

  // 2. Himalayan Monsoon Rain (Brown noise with lowpass resonance)
  playMonsoonRain() {
    this.init();
    this.stop();
    this.activeTrack = 'monsoon-rain';

    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + 0.02 * white) / 1.02; // Pink/Brownian noise
      lastOut = output[i];
      output[i] *= 3.5;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(700, this.ctx.currentTime);

    const rainGain = this.ctx.createGain();
    rainGain.gain.setValueAtTime(0.25, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(rainGain);
    rainGain.connect(this.gainNode);

    whiteNoise.start();
    this.nodes.push(whiteNoise, filter, rainGain);
  }

  // 3. Resonant Temple Bell Chime (Synthesizes acoustic singing bowl strike)
  ringTempleBell() {
    this.init();
    const now = this.ctx.currentTime;

    const fundamental = 330; // E4 chime
    const harmonics = [1, 2.76, 5.4, 8.9];
    const gains = [0.4, 0.25, 0.12, 0.05];

    harmonics.forEach((h, idx) => {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(fundamental * h, now);

      g.gain.setValueAtTime(gains[idx] * this.masterVolume, now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

      osc.connect(g);
      g.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 4.6);
    });
  }
}

export const ambientPlayer = new AmbientEngine();
