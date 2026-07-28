/* ================================================================
   js/settings.js — 设置面板
   依赖：js/game-state.js, js/game-engine.js, js/storage.js,
         js/achievements.js, js/ui.js (BGM, showToast, showCover)
   ================================================================ */

const SettingsPanel = {
  fontSize: 'medium',
  volume: 30,

  open() {
    document.getElementById('settings-overlay').classList.add('open');
  },

  close() {
    document.getElementById('settings-overlay').classList.remove('open');
  },

  setFontSize(size) {
    this.fontSize = size;
    const sizes = { small: '14px', medium: '17px', large: '20px' };
    const narrativeSizes = { small: '0.9rem', medium: '1.05rem', large: '1.2rem' };

    document.querySelectorAll('.font-size-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.size === size);
    });

    document.querySelectorAll('.narrative-paragraph').forEach(el => {
      el.style.fontSize = narrativeSizes[size];
    });
    document.querySelectorAll('.narrative-quote').forEach(el => {
      el.style.fontSize = { small: '0.85rem', medium: '1rem', large: '1.15rem' }[size];
    });

    localStorage.setItem('settings_fontSize', size);
  },

  setVolume(val) {
    this.volume = val;
    BGM.setVolume(val);
    localStorage.setItem('settings_volume', val);
  },

  loadSettings() {
    this.fontSize = localStorage.getItem('settings_fontSize') || 'medium';
    this.volume = parseInt(localStorage.getItem('settings_volume') || '30');

    this.setFontSize(this.fontSize);
    const slider = document.getElementById('volume-slider');
    if (slider) slider.value = this.volume;
    BGM.setVolume(this.volume);
  },

  resetGame() {
    if (confirm('确定要重置游戏吗？所有进度和存档（包括全部6个存档位）将被清除，此操作不可撤销。')) {
      GameEngine.resetGame();
      StorageManager.clearAll();
      clearAchievements();
      GameState.currentScene = 'void_awakening';
      GameState.history = ['void_awakening'];
      GameState.historyIndex = 0;
      GameState.chapter = 0;
      Renderer.render();
      GameEngine.encounterChapterMembers();
      showCover();
      this.close();
      showToast('游戏已重置');
    }
  }
};
