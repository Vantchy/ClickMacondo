/* ================================================================
   js/app.js — 初始化 + 全部事件绑定（胶水代码）
   依赖：所有其他 JS 模块
   ================================================================ */

function init() {
  // 加载设置
  SettingsPanel.loadSettings();
  BGM.init();

  // 尝试读取自动存档
  const hasSave = StorageManager.hasAutoSave();
  if (hasSave) {
    const loaded = StorageManager.autoLoad();
    if (loaded) {
      console.log('已读取自动存档');
    }
  }

  // 渲染初始场景
  Renderer.render();

  // 全新开始：遇到初始章节人物 + 显示封面
  if (!hasSave) {
    GameEngine.encounterChapterMembers();
    showCover();
  } else {
    // 有存档：隐藏封面和主菜单，直接进入游戏
    document.getElementById('cover-overlay').classList.add('hidden');
    document.getElementById('mainmenu-overlay').classList.remove('open');
    startPlayTimeTracking();
  }

  // 初始化成就追踪
  initAchievementTracking();

  // === 事件绑定 ===

  // 主菜单按钮（游戏内点退出）
  document.getElementById('btn-menu').addEventListener('click', () => {
    updateBigSave();
    refreshBigSaveCard();
    showMainMenu();
  });
  document.getElementById('mainmenu-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) hideMainMenu();
  });
  document.getElementById('achievements-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeAchievements();
  });
  document.getElementById('bookmarks-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeArchiveBookmarks();
  });
  document.getElementById('gameplay-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeGameplayIntro();
  });
  document.getElementById('tagcollection-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeTagCollection();
  });
  document.getElementById('cluecollection-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeClueCollection();
  });
  document.getElementById('endings-gallery-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeEndingsGallery();
  });

  // 设置
  document.getElementById('btn-settings').addEventListener('click', () => SettingsPanel.open());
  document.getElementById('btn-close-settings').addEventListener('click', () => SettingsPanel.close());
  document.getElementById('settings-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) SettingsPanel.close();
  });

  // 存档/读档
  document.getElementById('btn-close-saveload').addEventListener('click', () => SaveLoadPanel.close());
  document.getElementById('saveload-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) SaveLoadPanel.close();
  });

  // 字体大小
  document.querySelectorAll('.font-size-btn').forEach(btn => {
    btn.addEventListener('click', () => SettingsPanel.setFontSize(btn.dataset.size));
  });

  // 音量滑块
  document.getElementById('volume-slider').addEventListener('input', (e) => {
    SettingsPanel.setVolume(parseInt(e.target.value));
  });

  // 重置游戏
  document.getElementById('btn-reset-game').addEventListener('click', () => SettingsPanel.resetGame());
  document.getElementById('btn-nuke-all').addEventListener('click', () => SettingsPanel.nukeAll());

  // 底部栏
  document.getElementById('btn-save').addEventListener('click', () => SaveLoadPanel.open('save'));
  document.getElementById('btn-load').addEventListener('click', () => SaveLoadPanel.open('load'));
  document.getElementById('btn-family-tree').addEventListener('click', () => SidebarManager.openFamilyTree());
  document.getElementById('btn-archives').addEventListener('click', () => SidebarManager.openArchives());
  document.getElementById('btn-profile').addEventListener('click', () => SidebarManager.openProfile());
  document.getElementById('btn-relations').addEventListener('click', () => SidebarManager.openRelations());

  // 翻页导航按钮
  document.getElementById('nav-prev').addEventListener('click', (e) => {
    e.preventDefault();
    if (GameEngine.navigateBack()) {
      if (typeof SFX !== 'undefined' && SFX.playPageTurn) SFX.playPageTurn();
      Renderer.render();
    }
  });
  document.getElementById('nav-next').addEventListener('click', (e) => {
    e.preventDefault();
    if (GameEngine.navigateForward()) {
      if (typeof SFX !== 'undefined' && SFX.playPageTurn) SFX.playPageTurn();
      Renderer.render();
    }
  });

  // 侧边栏关闭
  document.getElementById('close-family').addEventListener('click', () => SidebarManager.closeFamilyTree());
  document.getElementById('close-archives').addEventListener('click', () => SidebarManager.closeArchives());
  document.getElementById('close-profile').addEventListener('click', () => SidebarManager.closeProfile());
  document.getElementById('close-relations').addEventListener('click', () => SidebarManager.closeRelations());
  document.getElementById('btn-query-relation').addEventListener('click', () => SidebarManager.queryRelation());

  // 侧边栏遮罩
  document.getElementById('sidebar-family-overlay').addEventListener('click', () => SidebarManager.closeFamilyTree());
  document.getElementById('sidebar-archives-overlay').addEventListener('click', () => SidebarManager.closeArchives());
  document.getElementById('sidebar-profile-overlay').addEventListener('click', () => SidebarManager.closeProfile());
  document.getElementById('sidebar-relations-overlay').addEventListener('click', () => SidebarManager.closeRelations());

  // BGM：首次用户交互时开始播放
  const startBGM = () => { BGM.tryPlay(); };
  document.body.addEventListener('click', startBGM, { once: true });
  document.body.addEventListener('keydown', startBGM, { once: true });

  // 键盘导航
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const mainMenu = document.getElementById('mainmenu-overlay');
      const anyOpen = (mainMenu && mainMenu.classList.contains('open')) ||
        document.getElementById('sidebar-family').classList.contains('open') ||
        document.getElementById('sidebar-archives').classList.contains('open') ||
        document.getElementById('sidebar-profile').classList.contains('open') ||
        document.getElementById('sidebar-relations').classList.contains('open') ||
        document.getElementById('settings-overlay').classList.contains('open') ||
        document.getElementById('saveload-overlay').classList.contains('open') ||
        document.getElementById('achievements-overlay').classList.contains('open') ||
        document.getElementById('bookmarks-overlay').classList.contains('open') ||
        document.getElementById('gameplay-overlay').classList.contains('open') ||
        document.getElementById('tagcollection-overlay').classList.contains('open') ||
        document.getElementById('cluecollection-overlay').classList.contains('open') ||
        document.getElementById('endings-gallery-overlay').classList.contains('open');

      if (anyOpen) {
        // 关闭全部面板
        SidebarManager.closeFamilyTree();
        SidebarManager.closeArchives();
        SidebarManager.closeProfile();
        SidebarManager.closeRelations();
        SettingsPanel.close();
        SaveLoadPanel.close();
        hideMainMenu();
        closeGameplayIntro();
        closeTagCollection();
        closeClueCollection();
        closeEndingsGallery();
        closeAchievements();
        closeArchiveBookmarks();
      } else {
        // 无面板打开 → 呼出主菜单
        showMainMenu();
      }
    }
    // 选择页：数字键选中，再按确认；空格确认
    const choiceScene = GameEngine.getCurrentScene();
    const isChoicePage = choiceScene && choiceScene.type === 'choice' && choiceScene.choices && !GameState.sceneChoices[choiceScene.id];
    if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5') {
      if (isChoicePage) {
        e.preventDefault();
        const idx = parseInt(e.key) - 1;
        // 使用过滤后的可见选项（与 renderer 保持一致）
        const visibleChoices = GameEngine.filterChoicesByMemories
          ? GameEngine.filterChoicesByMemories(choiceScene)
          : choiceScene.choices;
        if (visibleChoices[idx]) selectChoice(visibleChoices[idx].id);
      }
      return;
    }
    if (e.key === ' ' && isChoicePage && _selectedChoiceId) {
      e.preventDefault();
      confirmChoice();
      return;
    }

    // 翻页：左右箭头 / 空格
    // 封面或主菜单显示时不响应翻页；输入框聚焦时不拦截
    const cover = document.getElementById('cover-overlay');
    if (cover && !cover.classList.contains('hidden')) return;
    const mainMenu = document.getElementById('mainmenu-overlay');
    if (mainMenu && mainMenu.classList.contains('open')) return;
    const tag = document.activeElement ? document.activeElement.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (GameEngine.navigateBack()) Renderer.render();
    }
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      if (GameEngine.navigateForward()) {
        Renderer.render();
      }
    }
  });

  // 进度条拖动跳转（按全书场景占比定位）— 支持鼠标 + 触屏
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    let dragging = false;

    function getClientX(e) {
      // 触屏事件取第一个触摸点，鼠标事件取 clientX
      return e.touches ? e.touches[0].clientX : e.clientX;
    }

    function seekFromEvent(e) {
      const clientX = getClientX(e);
      const rect = progressBar.getBoundingClientRect();
      const rawPct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      const tot = getTotalPageCount();
      let targetPage = tot > 0 ? Math.max(1, Math.round((rawPct / 100) * tot)) : 1;

      // 正式版：限制不超过 maxpg（只能拖到已访问过的最大页码）
      if (!window.__IS_DEBUG__) {
        targetPage = Math.min(targetPage, GameState._maxpg || 1);
      }

      // 防止跳转到当前页
      const cur = getCurrentPageIndex();
      if (targetPage === cur) return;

      // 反查目标场景
      const target = getSceneAtPageIndex(targetPage);
      if (!target) return;

      // 更新当前场景与章节
      GameState.currentScene = target.sceneId;
      GameState.chapter = target.chapterNum;

      // 尝试在已有历史中定位目标场景（保持历史链完整，避免跨章跳转后回退链断裂）
      const existingIdx = GameState.history.lastIndexOf(target.sceneId);
      if (existingIdx >= 0) {
        // 场景已在历史中 → 回卷到该位置
        GameState.historyIndex = existingIdx;
      } else {
        // 场景不在历史中 → 截断"未来"分支后追加
        if (GameState.historyIndex < GameState.history.length - 1) {
          GameState.history = GameState.history.slice(0, GameState.historyIndex + 1);
        }
        GameState.history.push(target.sceneId);
        GameState.historyIndex = GameState.history.length - 1;
      }

      // 同步 round
      const chapterData = getCurrentChapterData();
      const scene = chapterData ? chapterData.scenes[target.sceneId] : null;
      if (scene) GameState.round = scene.round || 0;

      StorageManager.autoSave();
      Renderer.render();
    }

    function onDragStart(e) {
      dragging = true;
      seekFromEvent(e);
      // 阻止触屏时的页面滚动
      if (e.cancelable) e.preventDefault();
    }

    function onDragMove(e) {
      if (!dragging) return;
      seekFromEvent(e);
      if (e.cancelable) e.preventDefault();
    }

    function onDragEnd() {
      dragging = false;
    }

    // 鼠标事件
    progressBar.addEventListener('mousedown', onDragStart);
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);

    // 触屏事件
    progressBar.addEventListener('touchstart', onDragStart, { passive: false });
    document.addEventListener('touchmove', onDragMove, { passive: false });
    document.addEventListener('touchend', onDragEnd);
  }

  console.log('《百年孤独 · 宿命之环》已就绪');
}

// 启动
document.addEventListener('DOMContentLoaded', init);
