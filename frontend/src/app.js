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

  // 动态生成章节选择器
  populateChapterSelect();

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

  // 底部栏
  document.getElementById('btn-save').addEventListener('click', () => SaveLoadPanel.open('save'));
  document.getElementById('btn-load').addEventListener('click', () => SaveLoadPanel.open('load'));
  document.getElementById('btn-family-tree').addEventListener('click', () => SidebarManager.openFamilyTree());
  document.getElementById('btn-archives').addEventListener('click', () => SidebarManager.openArchives());
  document.getElementById('btn-profile').addEventListener('click', () => SidebarManager.openProfile());
  document.getElementById('btn-relations').addEventListener('click', () => SidebarManager.openRelations());

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
        document.getElementById('bookmarks-overlay').classList.contains('open');

      if (anyOpen) {
        // 关闭全部面板
        SidebarManager.closeFamilyTree();
        SidebarManager.closeArchives();
        SidebarManager.closeProfile();
        SidebarManager.closeRelations();
        SettingsPanel.close();
        SaveLoadPanel.close();
        hideMainMenu();
        closeAchievements();
        closeArchiveBookmarks();
      } else {
        // 无面板打开 → 呼出主菜单
        showMainMenu();
      }
    }
    if (e.key === '1' || e.key === '2' || e.key === '3') {
      const scene = GameEngine.getCurrentScene();
      if (scene && scene.type === 'choice' && scene.choices) {
        const idx = parseInt(e.key) - 1;
        if (scene.choices[idx]) handleChoice(scene.choices[idx].id);
      }
    }
  });

  console.log('《百年孤独 · 宿命之环》已就绪');
}

// 启动
document.addEventListener('DOMContentLoaded', init);
