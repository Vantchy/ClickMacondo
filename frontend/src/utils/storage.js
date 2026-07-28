/* ================================================================
   js/storage.js — 存档/读档工具：6个手动槽位 + 独立自动存档
   依赖：js/game-state.js, js/chapter-registry.js, js/ui.js (showToast)
   ================================================================ */

const StorageManager = {
  AUTO_KEY: 'cien_anos_autosave',
  SLOT_PREFIX: 'cien_anos_slot_',
  MAX_SLOTS: 6,

  /** 自动存档（每次选择/场景跳转后自动调用） */
  autoSave() {
    try {
      const data = GameState.toJSON();
      localStorage.setItem(this.AUTO_KEY, JSON.stringify(data));
      updateBigSave();
      return true;
    } catch (e) {
      console.warn('自动存档失败:', e);
      return false;
    }
  },

  /** 自动读档（页面初始化时调用） */
  autoLoad() {
    try {
      const raw = localStorage.getItem(this.AUTO_KEY);
      if (!raw) return false;
      const data = JSON.parse(raw);
      GameState.fromJSON(data);
      return true;
    } catch (e) {
      console.warn('自动读档失败:', e);
      return false;
    }
  },

  hasAutoSave() {
    return localStorage.getItem(this.AUTO_KEY) !== null;
  },

  /** 保存到指定槽位 (1-6) */
  saveToSlot(slotNum) {
    if (slotNum < 1 || slotNum > this.MAX_SLOTS) return false;
    try {
      const scene = GameEngine.getCurrentScene();
      const chData = getCurrentChapterData();
      const saveData = {
        state: GameState.toJSON(),
        meta: {
          timestamp: new Date().toLocaleString('zh-CN', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit'
          }),
          chapterTitle: chData ? chData.title : '未知章节',
          chapter: GameState.chapter,
          round: GameState.round,
          sceneTitle: scene ? (scene.title || '未知场景') : '未知场景',
          sceneId: GameState.currentScene
        }
      };
      localStorage.setItem(this.SLOT_PREFIX + slotNum, JSON.stringify(saveData));
      return true;
    } catch (e) {
      console.warn('存档到槽位' + slotNum + '失败:', e);
      return false;
    }
  },

  /** 从指定槽位读取 (1-6) */
  loadFromSlot(slotNum) {
    if (slotNum < 1 || slotNum > this.MAX_SLOTS) return false;
    try {
      const raw = localStorage.getItem(this.SLOT_PREFIX + slotNum);
      if (!raw) return false;
      const saveData = JSON.parse(raw);
      GameState.fromJSON(saveData.state);
      return true;
    } catch (e) {
      console.warn('从槽位' + slotNum + '读档失败:', e);
      return false;
    }
  },

  /** 获取槽位元信息（null 表示空槽位） */
  getSlotInfo(slotNum) {
    if (slotNum < 1 || slotNum > this.MAX_SLOTS) return null;
    try {
      const raw = localStorage.getItem(this.SLOT_PREFIX + slotNum);
      if (!raw) return null;
      const saveData = JSON.parse(raw);
      return saveData.meta || null;
    } catch (e) {
      return null;
    }
  },

  /** 删除指定槽位 */
  deleteSlot(slotNum) {
    if (slotNum < 1 || slotNum > this.MAX_SLOTS) return;
    localStorage.removeItem(this.SLOT_PREFIX + slotNum);
  },

  /** 清除所有存档（自动存档 + 6个槽位） */
  clearAll() {
    localStorage.removeItem(this.AUTO_KEY);
    for (let i = 1; i <= this.MAX_SLOTS; i++) {
      localStorage.removeItem(this.SLOT_PREFIX + i);
    }
  }
};

/* ---- 存档/读档槽位面板 ---- */
const SaveLoadPanel = {
  mode: 'save', // 'save' | 'load'
  CHINESE_NUMS: ['', '壹', '贰', '叁', '肆', '伍', '陆'],

  /** 打开面板 */
  open(mode) {
    this.mode = mode || 'save';
    const overlay = document.getElementById('saveload-overlay');
    const title = document.getElementById('saveload-title');
    if (!overlay || !title) return;

    title.textContent = mode === 'save' ? '💾 选择存档位置' : '📂 选择读档位置';
    this.renderCurrentInfo();
    this.renderSlots();
    overlay.classList.add('open');
  },

  /** 关闭面板 */
  close() {
    document.getElementById('saveload-overlay').classList.remove('open');
  },

  /** 渲染当前进度信息 */
  renderCurrentInfo() {
    const container = document.getElementById('saveload-current');
    if (!container) return;
    const chData = getCurrentChapterData();
    const scene = GameEngine.getCurrentScene();
    const chTitle = chData ? chData.title : '未知章节';
    const sceneTitle = scene ? (scene.title || '') : '';
    container.innerHTML = '当前进度：<strong>' + chTitle + '</strong>'
      + (GameState.round > 0 ? ' · 第' + GameState.round + '轮' : '')
      + (sceneTitle ? ' — ' + sceneTitle : '');
  },

  /** 渲染6个存档槽位 */
  renderSlots() {
    const grid = document.getElementById('save-slots-grid');
    if (!grid) return;
    const self = this;
    let html = '';

    for (let i = 1; i <= 6; i++) {
      const info = StorageManager.getSlotInfo(i);
      const numCN = this.CHINESE_NUMS[i];

      if (info) {
        // 已占用槽位
        html += '<div class="save-slot">';
        html += '<div class="save-slot-number">存档 ' + numCN + '</div>';
        html += '<div class="save-slot-details">';
        html += '<div class="save-slot-chapter">' + info.chapterTitle + '</div>';
        html += '<div class="save-slot-round">第' + info.round + '轮 · ' + info.sceneTitle + '</div>';
        html += '<div class="save-slot-time">' + info.timestamp + '</div>';
        html += '</div>';
        html += '<div class="save-slot-actions">';
        html += '<button class="slot-btn load-btn" data-action="load" data-slot="' + i + '">📂 读取</button>';
        html += '<button class="slot-btn save-btn" data-action="save" data-slot="' + i + '">💾 覆盖</button>';
        html += '<button class="slot-btn delete-btn" data-action="delete" data-slot="' + i + '">🗑️</button>';
        html += '</div>';
        html += '</div>';
      } else {
        // 空槽位
        html += '<div class="save-slot empty">';
        html += '<div class="save-slot-number">存档 ' + numCN + '</div>';
        html += '<div class="save-slot-details">';
        html += '<div class="save-slot-empty-text">— 空存档位 —</div>';
        html += '</div>';
        html += '<div class="save-slot-actions">';
        html += '<button class="slot-btn save-btn" data-action="save" data-slot="' + i + '">💾 保存到此</button>';
        html += '</div>';
        html += '</div>';
      }
    }

    grid.innerHTML = html;

    // 绑定事件
    grid.querySelectorAll('.slot-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const action = this.dataset.action;
        const slot = parseInt(this.dataset.slot);
        self.handleAction(action, slot);
      });
    });
  },

  /** 处理槽位操作 */
  handleAction(action, slotNum) {
    switch (action) {
      case 'save':
        if (StorageManager.saveToSlot(slotNum)) {
          showToast('💾 已保存到存档 ' + this.CHINESE_NUMS[slotNum]);
          this.renderSlots();
        } else {
          showToast('❌ 存档失败');
        }
        break;

      case 'load':
        if (!StorageManager.getSlotInfo(slotNum)) {
          showToast('📂 该存档位为空');
          return;
        }
        if (confirm('确定要从存档 ' + this.CHINESE_NUMS[slotNum] + ' 读取吗？当前未保存的进度将丢失。')) {
          if (StorageManager.loadFromSlot(slotNum)) {
            StorageManager.autoSave(); // 同步自动存档
            populateChapterSelect();
            Renderer.render();
            this.close();
            showToast('📂 已从存档 ' + this.CHINESE_NUMS[slotNum] + ' 读取');
          } else {
            showToast('❌ 读档失败');
          }
        }
        break;

      case 'delete':
        if (confirm('确定要删除存档 ' + this.CHINESE_NUMS[slotNum] + ' 吗？此操作不可撤销。')) {
          StorageManager.deleteSlot(slotNum);
          this.renderSlots();
          showToast('🗑️ 存档 ' + this.CHINESE_NUMS[slotNum] + ' 已删除');
        }
        break;
    }
  }
};
