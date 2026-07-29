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
  const creditsOverlay = document.getElementById('credits-overlay');
  if (creditsOverlay) creditsOverlay.classList.remove('show');
  GameEngine.resetGame();
  StorageManager.clearAll();
  GameState.chapter = 0;
  GameState.currentScene = 'void_awakening';
  GameState.history = ['void_awakening'];
  GameState.historyIndex = 0;
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
      <div>❧ 当前进度：<strong style="color:var(--gold-light);">${save.currentChapterTitle || '未知'}</strong></div>
      <div>◆ 附身角色：${save.possessedChar || '—'}</div>
      <div>⁂ 标签：${save.totalTags || 0}　◆ 记忆：${save.totalMemories || 0}</div>
      <div>¶ 上次游玩：${save.lastPlayed || '—'}　↻ 累计时长：${timeStr}</div>
      <div>❧ 已完成章节：${save.chaptersCompleted || 0} / 21</div>
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
  GameState.historyIndex = 0;
  hideMainMenu();
  document.getElementById('cover-overlay').classList.add('hidden');
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

/* ---- v2.0: 玩法介绍 ---- */
function openGameplayIntro() {
  document.getElementById('gameplay-overlay').classList.add('open');
}
function closeGameplayIntro() {
  document.getElementById('gameplay-overlay').classList.remove('open');
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
        <div class="ach-icon">${unlocked ? ach.icon : '✕'}</div>
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
          <div class="bookmark-icon">${unlocked ? '◆' : '✕'}</div>
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

/* ---- v2.1: 标签收集册（跨存档持久化） ---- */
const TAG_PERSIST_KEY = 'cien_anos_tags_persistent';

/** 将新获得的标签加入持久存储 */
function persistTags(newTags) {
  if (!newTags || newTags.length === 0) return;
  let stored = [];
  try {
    const raw = localStorage.getItem(TAG_PERSIST_KEY);
    if (raw) stored = JSON.parse(raw);
  } catch(e) { stored = []; }
  let changed = false;
  newTags.forEach(t => {
    if (!stored.includes(t)) { stored.push(t); changed = true; }
  });
  if (changed) localStorage.setItem(TAG_PERSIST_KEY, JSON.stringify(stored));
}

/** 获取所有持久化标签 */
function getPersistentTags() {
  try {
    const raw = localStorage.getItem(TAG_PERSIST_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

/** 打开标签收集册 */
function openTagCollectionPage() {
  const overlay = document.getElementById('tagcollection-overlay');
  const grid = document.getElementById('tagcollection-grid');
  if (!overlay || !grid) return;

  const persistentTags = new Set(getPersistentTags());
  const currentTags = new Set(GameState.tags);

  // 从章节数据提取所有可能标签
  const chapterTags = {};
  Object.values(chapters).forEach(chData => {
    const chNum = chData.chapterNumber;
    if (!chNum || chNum === 0) return;
    if (!chapterTags[chNum]) chapterTags[chNum] = { title: chData.title || '', all: new Set() };
    if (chData.scenes) {
      Object.values(chData.scenes).forEach(scene => {
        if (scene.type === 'choice' && scene.choices) {
          scene.choices.forEach(choice => {
            if (choice.effects && choice.effects.tags) {
              choice.effects.tags.forEach(t => chapterTags[chNum].all.add(t));
            }
          });
        }
      });
    }
  });

  // 统计
  let totalAll = 0, totalGot = 0;
  Object.values(chapterTags).forEach(ct => { totalAll += ct.all.size; });

  let html = '';
  const sorted = Object.entries(chapterTags).sort((a,b) => parseInt(a[0])-parseInt(b[0]));
  sorted.forEach(([chNum, ct]) => {
    if (ct.all.size === 0) return;
    const tags = [...ct.all].sort();
    const gotCount = tags.filter(t => persistentTags.has(t)).length;
    const allCount = tags.length;
    totalGot += gotCount;
    const pct = Math.round((gotCount/allCount)*100);
    const barColor = pct >= 100 ? '#6a9a5a' : pct >= 50 ? '#c4910a' : '#8a6a50';
    const isComplete = gotCount >= allCount;

    html += '<div style="border:1px solid ' + (isComplete ? 'rgba(120,160,120,0.3)' : 'rgba(184,137,62,0.12)') + ';border-radius:8px;padding:8px 12px;background:' + (isComplete ? 'rgba(120,160,120,0.04)' : 'rgba(184,137,62,0.02)') + ';">';
    html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">';
    html += '<span style="font-size:0.72rem;color:var(--gold-light);font-family:var(--font-title);">Ch' + chNum + ' ' + ct.title.split('·')[0] + '</span>';
    html += '<span style="margin-left:auto;font-size:0.6rem;color:var(--gold-dim);">' + gotCount + '/' + allCount + '</span>';
    if (isComplete) html += '<span style="font-size:0.6rem;">✅</span>';
    html += '</div>';
    // 进度条
    html += '<div style="height:4px;background:rgba(184,137,62,0.08);border-radius:2px;margin-bottom:6px;"><div style="width:' + pct + '%;height:100%;background:' + barColor + ';border-radius:2px;"></div></div>';
    // 标签列表
    html += '<div style="display:flex;flex-wrap:wrap;gap:3px;">';
    tags.forEach(t => {
      const has = persistentTags.has(t);
      const cur = currentTags.has(t);
      let cls = 'tag-badge';
      if (has) cls += ' tag-obtained';
      else cls += ' tag-missing';
      html += '<span class="' + cls + '" style="font-size:0.62rem;padding:2px 7px;">' + t + (cur && !has ? ' ●' : '') + '</span>';
    });
    html += '</div></div>';
  });

  // 全局进度
  const globalPct = totalAll > 0 ? Math.round((totalGot/totalAll)*100) : 0;
  html = '<div style="text-align:center;margin-bottom:12px;font-size:0.75rem;color:var(--gold-light);">◈ 全局收集进度：<strong>' + totalGot + '/' + totalAll + ' (' + globalPct + '%)</strong></div>' + html;

  grid.innerHTML = html;
  overlay.classList.add('open');
}

function closeTagCollection() {
  document.getElementById('tagcollection-overlay').classList.remove('open');
}

/* ---- v2.1: 隐藏线索册（跨存档持久化） ---- */
const CLUE_PERSIST_KEY = 'cien_anos_clues_persistent';

/** 将新获得的线索加入持久存储 */
function persistClue(clueId) {
  if (!clueId) return;
  let stored = [];
  try {
    const raw = localStorage.getItem(CLUE_PERSIST_KEY);
    if (raw) stored = JSON.parse(raw);
  } catch(e) { stored = []; }
  if (!stored.includes(clueId)) {
    stored.push(clueId);
    localStorage.setItem(CLUE_PERSIST_KEY, JSON.stringify(stored));
  }
}

/** 获取所有持久化线索 */
function getPersistentClues() {
  try {
    const raw = localStorage.getItem(CLUE_PERSIST_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

/** 记忆碎片持久化 */
const MEM_PERSIST_KEY = 'cien_anos_memories_persistent';
function persistMemory(memId) {
  if (!memId) return;
  let stored = [];
  try { const raw = localStorage.getItem(MEM_PERSIST_KEY); if (raw) stored = JSON.parse(raw); } catch(e) { stored = []; }
  if (!stored.includes(memId)) { stored.push(memId); localStorage.setItem(MEM_PERSIST_KEY, JSON.stringify(stored)); }
}
function getPersistentMemories() {
  try { const raw = localStorage.getItem(MEM_PERSIST_KEY); return raw ? JSON.parse(raw) : []; } catch(e) { return []; }
}

/** 打开隐藏线索册 */
function openClueCollectionPage() {
  const overlay = document.getElementById('cluecollection-overlay');
  const grid = document.getElementById('cluecollection-grid');
  if (!overlay || !grid) return;

  const persistentClues = new Set(getPersistentClues());
  const currentClues = new Set(GameState.clueFragments || []);

  // 按章节分组线索
  const chapterClues = {};
  if (typeof CLUE_DEFS !== 'undefined') {
    Object.values(CLUE_DEFS).forEach(clue => {
      const chNum = clue.chapter || 0;
      if (!chapterClues[chNum]) chapterClues[chNum] = [];
      chapterClues[chNum].push(clue);
    });
  }

  let totalAll = Object.values(chapterClues).reduce((s, arr) => s + arr.length, 0);
  let totalGot = 0;

  let html = '';
  const sorted = Object.entries(chapterClues).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
  sorted.forEach(([chNum, clues]) => {
    const gotCount = clues.filter(c => persistentClues.has(c.id)).length;
    totalGot += gotCount;
    const allCount = clues.length;
    const pct = Math.round((gotCount / allCount) * 100);
    const isComplete = gotCount >= allCount;
    const barColor = isComplete ? '#6a9a5a' : pct >= 50 ? '#c4910a' : '#8a6a50';

    html += '<div style="border:1px solid ' + (isComplete ? 'rgba(192,128,208,0.3)' : 'rgba(184,137,62,0.12)') + ';border-radius:8px;padding:8px 12px;background:' + (isComplete ? 'rgba(192,128,208,0.04)' : 'rgba(184,137,62,0.02)') + ';">';
    html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">';
    html += '<span style="font-size:0.7rem;color:var(--gold-light);font-family:var(--font-title);">' + (chNum == 0 ? '序章' : '第' + chNum + '章') + '</span>';
    html += '<span style="margin-left:auto;font-size:0.6rem;color:var(--gold-dim);">' + gotCount + '/' + allCount + '</span>';
    if (isComplete) html += '<span style="font-size:0.6rem;">✅</span>';
    html += '</div>';
    html += '<div style="height:4px;background:rgba(184,137,62,0.08);border-radius:2px;margin-bottom:6px;"><div style="width:' + pct + '%;height:100%;background:' + barColor + ';border-radius:2px;"></div></div>';
    html += '<div style="display:flex;flex-wrap:wrap;gap:4px;">';
    clues.forEach(clue => {
      const found = persistentClues.has(clue.id);
      const cur = currentClues.has(clue.id);
      let cls = found ? 'clue-collection-item found' : 'clue-collection-item missing';
      const marker = cur && !found ? ' ●' : '';
      html += '<span class="' + cls + '" style="font-size:0.6rem;padding:2px 8px;border-radius:10px;">' + (found ? '◈ ' : '？') + clue.name + marker + '</span>';
    });
    html += '</div></div>';
  });

  const globalPct = totalAll > 0 ? Math.round((totalGot / totalAll) * 100) : 0;
  html = '<div style="text-align:center;margin-bottom:12px;font-size:0.75rem;color:#c0a0d0;">◈ 线索收集进度：<strong>' + totalGot + '/' + totalAll + ' (' + globalPct + '%)</strong></div>' + html;

  grid.innerHTML = html;
  overlay.classList.add('open');
}

function closeClueCollection() {
  document.getElementById('cluecollection-overlay').classList.remove('open');
}

/* ---- v2.3: 结局回廊 ---- */
function openEndingsGallery() {
  hideMainMenu();
  const overlay = document.getElementById('endings-gallery-overlay');
  if (!overlay) return;
  const grid = document.getElementById('endings-gallery-grid');
  if (!grid) return;

  const seenSet = new Set(GameState._endingsSeen || []);
  const baseEndings = [
    { id: 'coauthor',  title: '合著者',         desc: '高宿命 + 高羁绊 —— 理解命运的必然，在每一页边缘写注释。',             hint: '见证者烙印主导 + 家族的魂羁绊主导' },
    { id: 'prophet',   title: '孤独智者',       desc: '高宿命 + 低羁绊 —— 看了全部，理解了全部，从未属于其中任何一页。',     hint: '见证者烙印主导 + 疏离者羁绊主导' },
    { id: 'lover',     title: '为爱赴死',       desc: '低宿命 + 高羁绊 —— 没改变结局，但让某些人活得更久、死得更暖。',       hint: '抗争者烙印主导 + 家族的魂羁绊主导' },
    { id: 'hurricane', title: '飓风中的人',     desc: '低宿命 + 低羁绊 —— 和命运互相撕扯，谁都没赢。',                        hint: '抗争者烙印主导 + 疏离者羁绊主导' },
    { id: 'rebel',     title: '反抗者烙印',     desc: '羊皮卷有一页空白的——你撕掉了。',                                       hint: '抗争者烙印占比 ≥ 60%' },
    { id: 'balanced',  title: '均衡烙印',       desc: '轮廓在羊皮卷上是模糊的——你不是任何一个固定的形状。',                 hint: '无任何烙印档位过半' },
    { id: 'bystander', title: '宿命旁观者',     desc: '只是一个在时间里走过的人——见证过，仅此而已。',                        hint: '混合烙印，见证者低于33%' },
    { id: 'witness',   title: '见证者',         desc: '你见证了全部——羊皮卷在你眼前一页页翻过。',                            hint: '见证者烙印占比 ≥ 33%（默认）' }
  ];

  let html = '';
  baseEndings.forEach(e => {
    const unlocked = seenSet.has(e.id);
    const cardClass = unlocked ? 'ending-card-unlocked' : 'ending-card-locked';
    const statusIcon = unlocked ? '◉' : '○';
    const statusText = unlocked ? '已抵达' : '尚未踏足';
    html += `<div class="ending-gallery-card ${cardClass}">
      <div class="ending-gallery-status">${statusIcon} ${statusText}</div>
      <div class="ending-gallery-title">${e.title}</div>
      <div class="ending-gallery-desc">${e.desc}</div>
      ${unlocked ? '' : `<div class="ending-gallery-hint">✦ ${e.hint}</div>`}
    </div>`;
  });

  grid.innerHTML = html;
  overlay.classList.add('open');
}

function closeEndingsGallery() {
  const overlay = document.getElementById('endings-gallery-overlay');
  if (overlay) overlay.classList.remove('open');
}

/* ---- 终章评价 ---- */
function getEndingEvaluation() {
  const chaptersDone = Object.keys(GameState.completedChapters).length;
  const memories = GameState.memories.length;
  const endingType = GameState._endingType || 'bystander';
  const baseEnding = endingType.replace('_all_clues', '');
  const allClues = endingType.includes('_all_clues');
  const endingDef = (typeof ENDING_DEFS !== 'undefined') ? ENDING_DEFS[endingType] : null;
  const endingTitle = endingDef ? endingDef.title : '宿命旁观者';

  // 综合评分：记忆碎片数 + 全线索加分
  const score = memories + (allClues ? 5 : 0);

  if (chaptersDone <= 5) {
    return {
      title: '浅尝辄止的旅人',
      color: '#8a9a8a',
      quote: '你只翻开了羊皮卷的前几页——马孔多的故事还很长。当你准备好时，栗树下的老人仍在等你。',
    };
  }
  if (score <= 3) {
    return {
      title: '匆匆过客',
      color: 'var(--gold-dim)',
      quote: '你走过了马孔多的街道，但未曾拾起一片落叶。有些故事，需要停下来才能听见。',
    };
  }
  if (score <= 7) {
    return {
      title: '马孔多的旅人',
      color: 'var(--gold)',
      quote: '你在故事之间找到了自己的步伐。你知道有些事早已写好在羊皮卷上——但你仍然选择了用自己的手去触碰每一块冰、每一只蝴蝶。',
    };
  }
  if (score <= 12) {
    return {
      title: '羊皮卷的合著者',
      color: 'var(--gold-light)',
      quote: '你已经不是读者了——你是这卷羊皮纸上的最后一个名字。梅尔基亚德斯写下了一切，但他没有写你会怎么读。你用自己的选择在每一个句号之间种下了新的逗号。',
    };
  }
  // 高分 + 特定结局的定制评价
  if (baseEnding === 'rebel') {
    return {
      title: '羊皮卷的撕裂者',
      color: 'var(--gold)',
      quote: '你撕掉了命运写好的那一页。梅尔基亚德斯看着空白处——然后笑了。"我写不了你。但你已经写下了自己的故事。"',
    };
  }
  if (baseEnding === 'coauthor' || baseEnding === 'witness') {
    return {
      title: '百年孤独的见证者',
      color: 'var(--gold-light)',
      quote: '你活过了一百年。不是作为布恩迪亚——是作为你自己。马孔多被飓风抹去了——但它在你的记忆里比任何现实都更坚固。这是羊皮卷无法预言的——一个读者把一本书活成了自己的生命。',
    };
  }
  return {
    title: endingTitle + '的旅人',
    color: (endingDef && endingDef.color) || 'var(--gold-light)',
    quote: '你以「' + endingTitle + '」的身份走完了百年的孤独。羊皮卷已经合上——但你的名字，已经写在了最后一页的空白处。',
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
      // 使用更健壮的方式替换 credits 间距：先匹配再替换，避免硬编码 HTML 格式
      const spacerMatch = existing.match(/<div style="height:30vh;"><\/div>/);
      if (spacerMatch) {
        scroll.innerHTML = evalHTML + existing.replace(spacerMatch[0], '<div style="height:5vh;"><\/div>');
      } else {
        scroll.innerHTML = evalHTML + existing;
      }
  }
  showCredits();
}
