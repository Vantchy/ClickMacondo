/* ================================================================
   js/achievements.js — 成就系统
   依赖：js/config.js (ACHIEVEMENTS), js/game-state.js (GameState)
   ================================================================ */

function checkAchievements() {
  const newly = getNewlyUnlocked();
  if (newly.length > 0) {
    persistAchievements();
  }
  return getUnlockedAchievements();
}

function getUnlockedAchievements() {
  // 从持久化存储读取，合并当前满足条件的成就
  const stored = JSON.parse(localStorage.getItem('cien_anos_achievements') || '[]');
  const current = [];
  ACHIEVEMENTS.forEach(ach => {
    if (ach.cond(GameState)) current.push(ach.id);
  });
  const merged = [...new Set([...stored, ...current])];
  return merged;
}

/** 获取新增的成就（用于通知） */
function getNewlyUnlocked() {
    const stored = JSON.parse(localStorage.getItem('cien_anos_achievements') || '[]');
  const current = [];
  ACHIEVEMENTS.forEach(ach => {
    if (ach.cond(GameState)) current.push(ach.id);
  });
  return current.filter(id => !stored.includes(id));
}

/** 持久化当前成就到 localStorage */
function persistAchievements() {
  const current = [];
  ACHIEVEMENTS.forEach(ach => {
    if (ach.cond(GameState)) current.push(ach.id);
  });
  const stored = JSON.parse(localStorage.getItem('cien_anos_achievements') || '[]');
  const merged = [...new Set([...stored, ...current])];
  localStorage.setItem('cien_anos_achievements', JSON.stringify(merged));
}

function isAchievementUnlocked(achId) {
  const stored = JSON.parse(localStorage.getItem('cien_anos_achievements') || '[]');
  if (stored.includes(achId)) return true;
  // 同时检查当前条件（未持久化的最新状态）
  const ach = ACHIEVEMENTS.find(function(a) { return a.id === achId; });
  return ach ? ach.cond(GameState) : false;
}

function clearAchievements() {
  localStorage.removeItem('cien_anos_achievements');
}

/* ---- 成就解锁通知 ---- */
let _lastAchievementCheck = [];

function checkAndNotifyAchievements() {
  // 确保已初始化，防止对所有成就同时触发通知
  if (_lastAchievementCheck.length === 0) {
    initAchievementTracking();
  }
  const current = getUnlockedAchievements();
  const newly = current.filter(id => !_lastAchievementCheck.includes(id));
  _lastAchievementCheck = current;
  newly.forEach(id => {
    const ach = ACHIEVEMENTS.find(a => a.id === id);
    if (ach) {
      setTimeout(() => {
        const toast = document.getElementById('toast');
        if (toast) {
          toast.innerHTML = `<span style="font-size:1.2rem;">${ach.icon}</span> 成就解锁：<strong>${ach.name}</strong>`;
          toast.classList.add('show');
          if (toast._timer) clearTimeout(toast._timer);
          toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
        }
      }, 1000);
    }
  });
}

// 初始化成就检查列表
function initAchievementTracking() {
  _lastAchievementCheck = getUnlockedAchievements();
}
