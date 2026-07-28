/* ================================================================
   js/ui.js — Toast 提示、封面/致谢/主菜单、BGM、终章评价
   依赖：js/game-state.js, js/game-engine.js (惰性), js/storage.js (惰性),
         js/chapter-registry.js, js/achievements.js
   ================================================================ */

/* ---- Toast 提示 ---- */
let toastTimer = null;
function showToast(msg, duration = 2000) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

/* ---- 封面 ---- */

/** 生成封面漂浮粒子 */
function spawnCoverParticles() {
  const container = document.getElementById('cover-particles');
  if (!container) return;
  const count = 40;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'cover-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (6 + Math.random() * 10) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.width = (1 + Math.random() * 3) + 'px';
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}

/** 逐字动画标题 */
function animateCoverTitle() {
  const titleEl = document.getElementById('cover-main-title');
  if (!titleEl) return;
  const text = '百 年 孤 独';
  const chars = text.split('');
  titleEl.innerHTML = '';
  chars.forEach((ch, i) => {
    const span = document.createElement('span');
    span.className = 'char';
    span.textContent = ch;
    span.style.animationDelay = (1.0 + i * 0.18) + 's';
    titleEl.appendChild(span);
  });
}

/** 显示开头封面 */
function showCover() {
  const cover = document.getElementById('cover-overlay');
  if (!cover) return;
  cover.classList.remove('hidden');
  spawnCoverParticles();
  animateCoverTitle();
  // 点击封面进入主菜单
  cover.onclick = function() {
    cover.classList.add('hidden');
    showMainMenu();
  };
}

/* ---- 致谢名单 ---- */

/** 显示结尾致谢名单 */
function showCredits() {
  const overlay = document.getElementById('credits-overlay');
  if (!overlay) return;
  // 重置动画
  const scroll = document.getElementById('credits-scroll');
  if (scroll) {
    scroll.style.animation = 'none';
    scroll.offsetHeight; // reflow
    scroll.style.animation = 'creditsRoll 25s linear forwards';
  }
  overlay.classList.add('show');
  // 25秒后可点重新开始
  setTimeout(() => {
    const btn = document.getElementById('credits-restart');
    if (btn) btn.style.pointerEvents = 'all';
  }, 26000);
}

/** 关闭致谢名单并重置游戏 */
function closeCredits() {
  document.getElementById('credits-overlay').classList.remove('show');
  GameEngine.resetGame();
  StorageManager.clearAll();
  GameState.chapter = 0;
  GameState.currentScene = 'void_awakening';
  GameState.history = ['void_awakening'];
  populateChapterSelect();
  Renderer.render();
  GameEngine.encounterChapterMembers();
  showCover();
  showToast('羊皮卷重新翻开');
}

/* ---- BGM 背景音乐 ---- */
const BGM = {
  audio: null,
  _started: false,

  init() {
    this.audio = document.getElementById('bgm-audio');
    if (this.audio) {
      this.audio.volume = SettingsPanel.volume / 100;
    }
  },

  /** 开始播放 MP3 背景音乐 */
  tryPlay() {
    if (!this.audio || this._started) return;
    const p = this.audio.play();
    if (p && p.then) {
      p.then(() => { this._started = true; console.log('背景音乐已启动'); })
       .catch((e) => { console.warn('背景音乐播放失败（可能需要用户交互后重试）:', e.message); });
    } else {
      this._started = true;
    }
  },

  setVolume(v) {
    if (this.audio) {
      this.audio.volume = v / 100;
    }
  }
};

/* ---- 大存档记录（独立于6槽位小存档） ---- */
const BIG_SAVE_KEY = 'cien_anos_big_save';

function getBigSave() {
  try {
    const raw = localStorage.getItem(BIG_SAVE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch(e) { return null; }
}

function updateBigSave() {
  const data = {
    totalPlayMinutes: (getBigSave()?.totalPlayMinutes || 0),
    lastPlayed: new Date().toLocaleString('zh-CN'),
    chaptersCompleted: Object.keys(GameState.completedChapters).filter(k => GameState.completedChapters[k]).length,
    totalFateCurrent: GameState.fateCounter,
    totalTags: GameState.tags.length,
    totalMemories: GameState.memories.length,
    currentChapter: GameState.chapter,
    currentChapterTitle: getCurrentChapterData()?.title || '未知',
    possessedChar: getCurrentChapterData()?.possessedCharacter || '未知'
  };
  localStorage.setItem(BIG_SAVE_KEY, JSON.stringify(data));
}

// 每分钟更新一次游玩时间
let playTimeInterval = null;
function startPlayTimeTracking() {
  if (playTimeInterval) return;
  playTimeInterval = setInterval(() => {
    const save = getBigSave() || { totalPlayMinutes: 0 };
    save.totalPlayMinutes = (save.totalPlayMinutes || 0) + 1;
    localStorage.setItem(BIG_SAVE_KEY, JSON.stringify(save));
  }, 60000);
}

/* ---- 主菜单 ---- */
function spawnMainMenuParticles() {
  const container = document.getElementById('mainmenu-particles');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'cover-particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 14) + 's';
    p.style.animationDelay = Math.random() * 6 + 's';
    p.style.width = (1 + Math.random() * 2.5) + 'px';
    p.style.height = p.style.width;
    container.appendChild(p);
  }
}

function refreshBigSaveCard() {
  const card = document.getElementById('mm-saveinfo');
  const continueBtn = document.getElementById('mm-btn-continue');
  if (!card) return;
  const save = getBigSave();
  const hasAutosave = StorageManager.hasAutoSave();
  if (save && hasAutosave) {
    const hours = Math.floor((save.totalPlayMinutes || 0) / 60);
    const mins = (save.totalPlayMinutes || 0) % 60;
    const timeStr = hours > 0 ? hours + '小时' + mins + '分钟' : mins + '分钟';
    card.innerHTML = `
      <div>📖 当前进度：<strong style="color:var(--gold-light);">${save.currentChapterTitle || '未知'}</strong></div>
      <div>👤 附身角色：${save.possessedChar || '—'}</div>
      <div>⭐ 宿命值：${save.totalFateCurrent || 0}　🏷️ 标签：${save.totalTags || 0}　💎 记忆：${save.totalMemories || 0}</div>
      <div>📅 上次游玩：${save.lastPlayed || '—'}　⏱️ 累计时长：${timeStr}</div>
      <div>📚 已完成章节：${save.chaptersCompleted || 0} / 21</div>
    `;
    if (continueBtn) continueBtn.disabled = false;
  } else if (hasAutosave) {
    card.innerHTML = '<div style="color:#c0b090;">检测到游玩记录，但档案数据不完整</div>';
    if (continueBtn) continueBtn.disabled = false;
  } else {
    card.innerHTML = '<div style="color:#6a5a48;font-style:italic;">尚无游玩记录<br>选择「重新开始」翻开羊皮卷的第一页</div>';
    if (continueBtn) continueBtn.disabled = true;
  }
}

function showMainMenu() {
  const overlay = document.getElementById('mainmenu-overlay');
  if (!overlay) return;
  spawnMainMenuParticles();
  refreshBigSaveCard();
  overlay.classList.add('open');
  // 重置动画
  const content = document.getElementById('mainmenu-content');
  if (content) {
    content.style.animation = 'none';
    content.offsetHeight;
    content.style.animation = 'mmFadeUp 0.8s ease forwards';
  }
}

function hideMainMenu() {
  document.getElementById('mainmenu-overlay').classList.remove('open');
}

function continueFromMenu() {
  if (!StorageManager.hasAutoSave()) {
    showToast('没有可读取的存档');
    return;
  }
  const loaded = StorageManager.autoLoad();
  if (!loaded) { showToast('读档失败'); return; }
  hideMainMenu();
  document.getElementById('cover-overlay').classList.add('hidden');
  populateChapterSelect();
  Renderer.render();
  updateBigSave();
  startPlayTimeTracking();
}

function startNewGame() {
  if (StorageManager.hasAutoSave()) {
    if (!confirm('开始新游戏将覆盖所有进度（成就和书签保留）。确定继续？')) return;
  }
  GameEngine.resetGame();
  StorageManager.clearAll();
  GameState.chapter = 0;
  GameState.currentScene = 'void_awakening';
  GameState.history = ['void_awakening'];
  hideMainMenu();
  document.getElementById('cover-overlay').classList.add('hidden');
  populateChapterSelect();
  Renderer.render();
  GameEngine.encounterChapterMembers();
  updateBigSave();
  startPlayTimeTracking();
  showToast('羊皮卷已翻开——新的命运等待着你');
}

function exitToCover() {
  hideMainMenu();
  showCover();
}

function openMainMenu() {
  updateBigSave();
  refreshBigSaveCard();
  showMainMenu();
}

/* ---- 成就 & 书签页面 ---- */
function openAchievementsPage() {
  const grid = document.getElementById('achievements-grid');
  if (!grid) return;
  const unlockedIds = getUnlockedAchievements();
  let html = '';
  ACHIEVEMENTS.forEach(ach => {
    const unlocked = unlockedIds.includes(ach.id);
    html += `
      <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
        <div class="ach-icon">${unlocked ? ach.icon : '🔒'}</div>
        <div class="ach-info">
          <div class="ach-name">${ach.name}</div>
          <div class="ach-desc">${ach.desc}</div>
          <div class="ach-status ${unlocked ? 'unlocked' : 'locked'}">${unlocked ? '✦ 已解锁' : '— 尚未达成'}</div>
        </div>
      </div>`;
  });
  grid.innerHTML = html || '<div style="color:var(--gold-dim);text-align:center;padding:20px;">暂无成就定义</div>';
  document.getElementById('achievements-overlay').classList.add('open');
}

function closeAchievements() {
  document.getElementById('achievements-overlay').classList.remove('open');
}

function openBookmarksPage() {
  const grid = document.getElementById('bookmarks-grid');
  if (!grid) return;
  const sortedIds = Object.keys(chapters).sort((a, b) => chapters[a].chapterNumber - chapters[b].chapterNumber);
  let html = '';
  sortedIds.forEach(chId => {
    const ch = chapters[chId];
    if (!ch.memories || Object.keys(ch.memories).length === 0) return;
    html += `<div style="font-family:var(--font-title);font-size:0.72rem;color:var(--gold-dim);margin:10px 0 4px;letter-spacing:0.06em;padding-bottom:3px;border-bottom:1px solid rgba(184,137,62,0.1);">${ch.title}</div>`;
    Object.values(ch.memories).forEach(mem => {
      const unlocked = GameState.memories.includes(mem.id);
      html += `
        <div class="bookmark-card ${unlocked ? 'unlocked' : 'locked'}">
          <div class="bookmark-icon">${unlocked ? '💎' : '🔒'}</div>
          <div class="bookmark-info">
            <div class="bookmark-chapter">第${ch.chapterNumber}章</div>
            <div class="bookmark-title">${mem.title}</div>
            <div class="bookmark-desc">${unlocked ? mem.description : '尚未解锁……做出不同的选择来发现这段记忆。'}</div>
          </div>
        </div>`;
    });
  });
  if (GameState.memories.length === 0) {
    html = '<div style="color:var(--gold-dim);text-align:center;padding:20px;font-style:italic;">尚未收集任何记忆碎片。<br>在游戏中做出选择来收集它们。</div>' + html;
  }
  grid.innerHTML = html;
  document.getElementById('bookmarks-overlay').classList.add('open');
}

function closeArchiveBookmarks() {
  document.getElementById('bookmarks-overlay').classList.remove('open');
}

/* ---- 终章评价 ---- */
function calculateTotalFate() {
  let total = 0;
  for (let i = 1; i <= 20; i++) {
    total += GameState.fateCounter;
  }
  const tagFate = GameState.tags.length * 1.5;
  const memFate = GameState.memories.length * 0.5;
  return Math.round(GameState.fateCounter + tagFate + memFate);
}

function getEndingEvaluation() {
  const total = calculateTotalFate();
  const chaptersDone = Object.keys(GameState.completedChapters).length;
  const tags = GameState.tags.length;
  const memories = GameState.memories.length;

  if (chaptersDone <= 5) {
    return {
      title: '浅尝辄止的旅人',
      color: '#8a9a8a',
      quote: '你只翻开了羊皮卷的前几页——马孔多的故事还很长。当你准备好时，栗树下的老人仍在等你。',
    };
  }
  if (total <= 10) {
    return {
      title: '宿命抗争者',
      color: 'var(--fate-low)',
      quote: '你走过了马孔多的街道，但从未真正走进任何一扇门。百年孤独不是关于命运——是关于在命运面前，你是否还敢选择去爱。',
    };
  }
  if (total <= 20) {
    return {
      title: '命运的共行者',
      color: 'var(--fate-mid)',
      quote: '你在宿命与自由之间找到了自己的步伐。你知道有些事早已写好在羊皮卷上——但你仍然选择了用自己的手去触碰每一块冰、每一只蝴蝶、每一个在走廊尽头等着你的人。',
    };
  }
  if (total <= 30) {
    return {
      title: '羊皮卷的合著者',
      color: 'var(--fate-high)',
      quote: '你已经不是读者了——你是这卷羊皮纸上的最后一个名字。梅尔基亚德斯写下了一切，但他没有写你会怎么读。你用自己的选择在每一个句号之间种下了新的逗号。',
    };
  }
  return {
    title: '百年孤独的见证者',
    color: 'var(--gold-light)',
    quote: '你活过了一百年。不是作为布恩迪亚——是作为你自己。你记得磁铁的刮擦声、冰块的融化、枪口的硝烟、黄蝴蝶的翅膀、四年大雨的每一滴水。马孔多被飓风抹去了——但它在你的记忆里比任何现实都更坚固。这是羊皮卷无法预言的——一个读者把一本书活成了自己的生命。',
  };
}

function showEndingCredits() {
  const evalData = getEndingEvaluation();
  const scroll = document.getElementById('credits-scroll');
  if (scroll) {
    const evalHTML = `
      <div style="height:25vh;"></div>
      <div style="font-family:var(--font-title);font-size:1rem;color:${evalData.color};letter-spacing:0.12em;margin-bottom:8px;">
        — ${evalData.title} —
      </div>
      <div class="credits-quote" style="margin-bottom:40px;font-size:0.85rem;color:${evalData.color};">
        ${evalData.quote}
      </div>
      <div class="credits-divider"></div>
    `;
    const existing = scroll.innerHTML;
    scroll.innerHTML = evalHTML + existing.replace(/<div style="height:30vh;"><\/div>/, '<div style="height:5vh;"></div>');
  }
  showCredits();
}
