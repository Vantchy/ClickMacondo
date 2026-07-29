/* ================================================================
   js/game-state.js — 游戏状态管理
   依赖：js/chapter-registry.js (getCurrentChapterData)
   ================================================================ */

const GameState = {
  currentScene: 'void_awakening',
  chapter: 0,
  round: 0,
  tags: [],
  memories: [],
  history: [],
  historyIndex: 0,
  choices: [],
  sceneChoices: {},     // { sceneId: choiceId } — 锁定已做过的选择，回退不可更改
  choiceLog: [],
  completedChapters: {},
  encounteredCharacters: [],
  /* 可玩性增强：新增字段 */
  characterFlags: {},       // { flagName: count } — 跨章节条件追踪（如 'ursula_cared': 4）
  relationships: {},        // { characterName: value } — 关系值 (0-100)
  relationshipLog: [],      // [{ character, delta, reason }] — 关系值变动日志
  hasCompletedGame: false,  // 是否已通关
  playthroughCount: (function() { try { return parseInt(localStorage.getItem('cien_anos_playthrough')) || 0; } catch(e) { return 0; } })(),  // 通关次数（多周目，页面刷新不丢）
  /* v2.0 双轴 × 三层宿命 */
  fateCounter: 0,           // 当前章宿命值（每章重置）
  bondCounter: 0,           // 当前章羁绊值（每章重置）
  fateImprint: {},          // { chapterNum: 'rebel'|'follower'|'witness' } — 永久烙印
  bondImprint: {},          // { chapterNum: 'estranged'|'bonded'|'soul_of_family' } — 永久烙印
  clueFragments: [],        // [clueId] — 已收集的隐藏线索道具

  reset() {
    this.currentScene = 'void_awakening';
    this.chapter = 0;
    this.round = 0;
    this.tags = [];
    this.memories = [];
    this.history = ['void_awakening'];
    this.historyIndex = 0;
    this.choices = [];
    this.sceneChoices = {};
    this.choiceLog = [];
    this.completedChapters = {};
    this.encounteredCharacters = [];
    // _eraVisited 不重置——跨周目累积，成就"三种视角"需要访问3个时代入口
    this.characterFlags = {};
    this.relationships = {};
    this.relationshipLog = [];
    // v2.0 双轴重置
    this.fateCounter = 0;
    this.bondCounter = 0;
    this.fateImprint = {};
    this.bondImprint = {};
    this.clueFragments = [];
    // 重置瞬态字段
    this._lastFateChange = 0;
    this._lastBondChange = 0;
    this._lastClueFound = null;
    this._secretOptionsChosen = 0;   // v2.3: 计数器——单次游玩中选择的门控选项数
    this._hasGoneBack = false;       // v2.3: 是否使用过回退键
    this._backNavCount = 0;          // v2.3: 回退导航次数
    this._allHotspotsFound = false;
    this._marginaliaRead = 0;
    this._hotspotsFound = 0;
    // 清理终章泄露字段（Bug #4）
    this._endingType = null;
    this._allChaptersDone = false;
    // hasCompletedGame 和 playthroughCount 不重置——它们是持久化元数据
    // 从 localStorage 恢复周目数（跨页面刷新保留）
    const savedPT = localStorage.getItem('cien_anos_playthrough');
    if (savedPT) this.playthroughCount = Math.max(this.playthroughCount || 0, parseInt(savedPT) || 0);
  },

  /** 记录遇到的人物 */
  encounterCharacter(name) {
    if (!this.encounteredCharacters.includes(name)) {
      this.encounteredCharacters.push(name);
      return true; // 新人物
    }
    return false;
  },

  /** 标记某章节已完成 */
  markChapterCompleted(chapterNum) {
    this.completedChapters[chapterNum] = true;
  },

  /** 检查某章节是否已完成 */
  isChapterCompleted(chapterNum) {
    return !!this.completedChapters[chapterNum];
  },

  /** 初始化角色关系值（首次遇到时调用，默认50） */
  initRelationship(characterName) {
    if (!(characterName in this.relationships)) {
      this.relationships[characterName] = 50;
    }
  },

  /** 调整角色关系值，自动限制在 0-100（防御 NaN） */
  adjustRelationship(characterName, delta, reason) {
    if (!characterName) return;
    if (!Number.isFinite(delta)) return;
    this.initRelationship(characterName);
    const oldVal = this.relationships[characterName];
    this.relationships[characterName] = Math.max(0, Math.min(100, oldVal + delta));
    if (delta !== 0) {
      this.relationshipLog.push({
        character: characterName,
        delta: delta,
        reason: reason || '',
        from: oldVal,
        to: this.relationships[characterName]
      });
    }
  },

  /** 获取关系值档位标签 */
  getRelationshipLevel(characterName) {
    const v = this.relationships[characterName];
    if (v === undefined) return null;
    if (v <= 25) return { tier: '疏远', color: '#8a7060' };
    if (v <= 45) return { tier: '冷淡', color: '#a09080' };
    if (v <= 65) return { tier: '普通', color: '#c0a878' };
    if (v <= 85) return { tier: '亲近', color: '#d4b878' };
    return { tier: '至交', color: 'var(--gold-light)' };
  },

  /** 递增角色标记（用于跨章节条件追踪） */
  incrementFlag(flagName, amount) {
    if (!flagName) return;
    if (!(flagName in this.characterFlags)) {
      this.characterFlags[flagName] = 0;
    }
    // 使用 != null 而非 ||，确保 amount=0 不会错误地变成 1
    this.characterFlags[flagName] += (amount != null ? amount : 1);
  },

  /** 获取角色标记值 */
  getFlag(flagName) {
    return this.characterFlags[flagName] || 0;
  },

  /** 标记游戏已通关 */
  markGameCompleted() {
    this.hasCompletedGame = true;
    this.playthroughCount = (this.playthroughCount || 0) + 1;
    // 持久化周目数到 localStorage（独立于存档，跨页面刷新保留）
    try { localStorage.setItem('cien_anos_playthrough', this.playthroughCount); } catch(e) {}
  },

  /* ---- v2.0 双轴 × 三层宿命方法 ---- */

  /** 获取当前象限标签 */
  getQuadrant() {
    return getQuadrantLabel(this.fateCounter, this.bondCounter);
  },

  /** 获取烙印统计 */
  getImprintStats() {
    return computeImprintStats(this.fateImprint, this.bondImprint);
  },

  /** 添加线索碎片 */
  addClueFragment(clueId) {
    if (!this.clueFragments.includes(clueId)) {
      this.clueFragments.push(clueId);
      return true;
    }
    return false;
  },

  /** 检查是否持有某线索 */
  hasClue(clueId) {
    return this.clueFragments.includes(clueId);
  },

  /** 获取关系值档位标签（增强版 — 含阈值触发提示，阈值与 getRelationshipLevel 对齐） */
  getRelationshipTier(characterName) {
    const v = this.relationships[characterName];
    if (v === undefined) return null;
    if (v >= 86) return { tier: '至交', threshold: 'secret', desc: '愿为你披露秘密' };
    if (v >= 66) return { tier: '亲近', threshold: 'dialogue', desc: '对话中流露真心' };
    if (v >= 46) return { tier: '普通', threshold: null, desc: '相敬如宾' };
    if (v >= 26) return { tier: '冷淡', threshold: null, desc: '保持距离' };
    return { tier: '疏远', threshold: null, desc: '形同陌路' };
  },

  /** 记录本章烙印（由引擎调用） */
  recordImprint(chapterNum, fateLevel, bondLevel) {
    this.fateImprint[chapterNum] = fateLevel;
    this.bondImprint[chapterNum] = bondLevel;
  },

  toJSON() {
    return {
      _version: 2,  // 存档格式版本号，用于未来迁移
      currentScene: this.currentScene,
      chapter: this.chapter,
      round: this.round,
      tags: [...this.tags],
      memories: [...this.memories],
      history: [...this.history],
      historyIndex: this.historyIndex,
      choices: [...this.choices],
      choiceLog: [...this.choiceLog],
      sceneChoices: {...this.sceneChoices},
      completedChapters: {...this.completedChapters},
      encounteredCharacters: [...this.encounteredCharacters],
      _eraVisited: [...(this._eraVisited || [])],
      characterFlags: {...this.characterFlags},
      relationships: {...this.relationships},
      relationshipLog: [...this.relationshipLog],
      hasCompletedGame: this.hasCompletedGame || false,
      playthroughCount: this.playthroughCount || 0,
      _endingsSeen: [...(this._endingsSeen || [])],
      // v2.3: 单次游玩追踪（读档后应保留，否则成就进度丢失）
      _secretOptionsChosen: this._secretOptionsChosen || 0,
      _backNavCount: this._backNavCount || 0,
      _hasGoneBack: this._hasGoneBack || false,
      _marginaliaRead: this._marginaliaRead || 0,
      _hotspotsFound: this._hotspotsFound || 0,
      _allHotspotsFound: this._allHotspotsFound || false,
      // v2.0
      fateCounter: this.fateCounter || 0,
      bondCounter: this.bondCounter || 0,
      fateImprint: {...(this.fateImprint || {})},
      bondImprint: {...(this.bondImprint || {})},
      clueFragments: [...(this.clueFragments || [])]
    };
  },

  fromJSON(data) {
    if (!data || !data.currentScene) {
      console.warn('存档数据无效，使用默认状态');
      this.reset();
      return;
    }
    this.currentScene = data.currentScene;
    this.chapter = data.chapter;
    this.round = data.round;
    this.tags = data.tags || [];
    this.memories = data.memories || [];
    this.history = data.history || [];
    this.historyIndex = data.historyIndex !== undefined ? data.historyIndex : (this.history.length > 0 ? this.history.length - 1 : 0);
    this.choices = data.choices || [];
    this.choiceLog = data.choiceLog || [];
    this.sceneChoices = data.sceneChoices || {};
    this.completedChapters = data.completedChapters || {};
    this.encounteredCharacters = data.encounteredCharacters || [];
    this._eraVisited = data._eraVisited || [];
    this.characterFlags = data.characterFlags || {};
    this.relationships = data.relationships || {};
    this.relationshipLog = data.relationshipLog || [];
    this.hasCompletedGame = data.hasCompletedGame || false;
    this.playthroughCount = data.playthroughCount || 0;
    this._endingsSeen = data._endingsSeen || [];
    // v2.3: 单次游玩追踪——从存档恢复，保持成就进度
    this._secretOptionsChosen = data._secretOptionsChosen || 0;
    this._hasGoneBack = data._hasGoneBack || false;
    this._backNavCount = data._backNavCount || 0;
    this._allHotspotsFound = data._allHotspotsFound || false;
    this._marginaliaRead = data._marginaliaRead || 0;
    this._hotspotsFound = data._hotspotsFound || 0;
    // v2.0
    this.fateCounter = data.fateCounter || 0;
    this.bondCounter = data.bondCounter || 0;
    this.fateImprint = data.fateImprint || {};
    this.bondImprint = data.bondImprint || {};
    this.clueFragments = data.clueFragments || [];
    // 重置瞬态显示字段（仅结算页展示用，不跨存档保留）
    this._lastFateChange = 0;
    this._lastBondChange = 0;
    this._lastClueFound = null;
  }
};

// 追踪访问过的时代
GameState._eraVisited = GameState._eraVisited || [];

/* ---- v2.0 象限与烙印辅助函数 ---- */

/** 获取象限标签 */
function getQuadrantLabel(fateVal, bondVal) {
  const MAX_VAL = (typeof MAX_FATE !== 'undefined') ? MAX_FATE : 6;
  const mid = MAX_VAL / 2;
  const highFate = fateVal >= mid;
  const highBond = bondVal >= mid;

  if (highFate && highBond) return {
    id: 'guardian', name: '家族守望者',
    desc: '为家人而活——理解一切，仍选择连接',
    color: 'var(--gold-light)'
  };
  if (highFate && !highBond) return {
    id: 'prophet', name: '孤绝先知',
    desc: '看透一切，与谁都不相连',
    color: '#8a9ab0'
  };
  if (!highFate && highBond) return {
    id: 'follower', name: '命运追随者',
    desc: '顺从命运的流动，在陪伴中找到意义',
    color: 'var(--gold)'
  };
  return {
    id: 'rebel', name: '孤独反抗者',
    desc: '搏斗命运，独自一人',
    color: '#a05040'
  };
}

/** 判定单章烙印档位 */
function getImprintLevel(counter, maxVal) {
  const ratio = maxVal > 0 ? counter / maxVal : 0;
  // 宿命烙印: rebel(≤1/3) / follower(1/3~2/3) / witness(≥2/3)
  if (ratio >= 2 / 3) return 'witness';
  if (ratio >= 1 / 3) return 'follower';
  return 'rebel';
}

/** 判定羁绊烙印档位 */
function getBondImprintLevel(counter, maxVal) {
  const ratio = maxVal > 0 ? counter / maxVal : 0;
  if (ratio >= 2 / 3) return 'soul_of_family';
  if (ratio >= 1 / 3) return 'bonded';
  return 'estranged';
}

/** 计算烙印统计 */
function computeImprintStats(fateImprint, bondImprint) {
  const fateEntries = Object.entries(fateImprint);
  const total = fateEntries.length;
  if (total === 0) return { total: 0, rebelPct: 0, followerPct: 0, witnessPct: 0, maxConsecutive: 0, pendulumSwings: 0 };

  let rebel = 0, follower = 0, witness = 0;
  fateEntries.forEach(([, level]) => {
    if (level === 'rebel') rebel++;
    else if (level === 'follower') follower++;
    else if (level === 'witness') witness++;
  });

  // 连续同档位最大次数
  let maxConsecutive = 0, currentConsecutive = 1;
  for (let i = 1; i < fateEntries.length; i++) {
    if (fateEntries[i][1] === fateEntries[i - 1][1]) {
      currentConsecutive++;
    } else {
      maxConsecutive = Math.max(maxConsecutive, currentConsecutive);
      currentConsecutive = 1;
    }
  }
  maxConsecutive = Math.max(maxConsecutive, currentConsecutive);

  // 摆锤翻转次数（相邻两章档位不同即算一次翻转）
  let pendulumSwings = 0;
  for (let i = 1; i < fateEntries.length; i++) {
    if (fateEntries[i][1] !== fateEntries[i - 1][1]) pendulumSwings++;
  }

  return {
    total,
    rebelPct: parseFloat(((rebel / total) * 100).toFixed(1)),
    followerPct: parseFloat(((follower / total) * 100).toFixed(1)),
    witnessPct: parseFloat(((witness / total) * 100).toFixed(1)),
    rebelCount: rebel,
    followerCount: follower,
    witnessCount: witness,
    maxConsecutive,
    pendulumSwings,
    dominantImprint: rebel >= follower && rebel >= witness ? 'rebel'
      : follower >= rebel && follower >= witness ? 'follower' : 'witness'
  };
}
