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
    const narrativeSizes = { small: '0.9rem', medium: '1.05rem', large: '1.2rem' };
    const quoteSizes = { small: '0.85rem', medium: '1rem', large: '1.15rem' };

    document.querySelectorAll('.font-size-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.size === size);
    });

    // 使用 CSS 变量，新渲染的 DOM 元素自动继承，不会被 innerHTML 替换丢失
    document.documentElement.style.setProperty('--narrative-font-size', narrativeSizes[size]);
    document.documentElement.style.setProperty('--narrative-quote-font-size', quoteSizes[size]);

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
    if (confirm('确定要重置游戏吗？\n\n所有进度和存档将被清除。\n但成就、标签收集、隐藏线索和记忆碎片的收集记录将保留。\n\n如需彻底清除一切记录，请使用"清除全部痕迹"。')) {
      GameEngine.resetGame();
      StorageManager.clearAll();
      GameState.currentScene = 'void_awakening';
      GameState.history = ['void_awakening'];
      GameState.historyIndex = 0;
      GameState.chapter = 0;
      Renderer.render();
      GameEngine.encounterChapterMembers();
      showCover();
      this.close();
      showToast('游戏已重置（收集记录已保留）');
    }
  },

  /** 清除全部痕迹——包括成就、标签、线索、记忆等所有持久化数据 */
  nukeAll() {
    if (confirm('⚠ 此操作将清除一切：\n\n• 所有存档（6个存档位 + 自动存档）\n• 成就记录\n• 标签收集记录\n• 隐藏线索记录\n• 记忆碎片记录\n• 设置\n\n此操作不可撤销。确定继续？')) {
      // 第二次确认
      if (confirm('最后一次确认：真的要清除全部痕迹吗？\n\n这将把游戏恢复到第一次打开时的状态。')) {
        // 清除所有 localStorage
        const keysToKeep = []; // 不保留任何东西
        const allKeys = Object.keys(localStorage);
        allKeys.forEach(k => {
          if (k.startsWith('cien_anos') || k.startsWith('settings_') || k.includes('achievement')) {
            localStorage.removeItem(k);
          }
        });
        // 确保全部覆盖
        localStorage.removeItem('cien_anos_autosave');
        for (let i = 1; i <= 6; i++) localStorage.removeItem('cien_anos_slot_' + i);
        localStorage.removeItem('cien_anos_tags_persistent');
        localStorage.removeItem('cien_anos_clues_persistent');
        localStorage.removeItem('cien_anos_memories_persistent');
        localStorage.removeItem('cien_anos_playthrough');
        localStorage.removeItem('cien_anos_big_save');
        localStorage.removeItem('settings_fontSize');
        localStorage.removeItem('settings_volume');
        // 也清除成就（使用已有的clearAchievements函数）
        if (typeof clearAchievements === 'function') clearAchievements();

        // 重置游戏状态
        GameEngine.resetGame();
        GameState.currentScene = 'void_awakening';
        GameState.history = ['void_awakening'];
        GameState.historyIndex = 0;
        GameState.chapter = 0;
        Renderer.render();
        GameEngine.encounterChapterMembers();
        showCover();
        this.close();
        showToast('全部痕迹已清除——游戏已恢复如初');
      }
    }
  }
};
