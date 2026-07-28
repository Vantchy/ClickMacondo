/* ================================================================
   js/game-state.js — 游戏状态管理
   依赖：js/chapter-registry.js (getChapterMaxFate, getCurrentChapterData)
   ================================================================ */

const GameState = {
  currentScene: 'void_awakening',
  chapter: 0,
  round: 0,
  tags: [],
  fateCounter: 0,
  antiFateCounter: 0,
  memories: [],
  history: [],
  choices: [],
  choiceLog: [],
  completedChapters: {},
  encounteredCharacters: [],
  /* 可玩性增强：新增字段 */
  characterFlags: {},       // { flagName: count } — 跨章节条件追踪（如 'ursula_cared': 4）
  relationships: {},        // { characterName: value } — 关系值 (0-100)
  relationshipLog: [],      // [{ character, delta, reason }] — 关系值变动日志
  hasCompletedGame: false,  // 是否已通关
  playthroughCount: 0,      // 通关次数（用于多周目）

  reset() {
    this.currentScene = 'void_awakening';
    this.chapter = 0;
    this.round = 0;
    this.tags = [];
    this.fateCounter = 0;
    this.antiFateCounter = 0;
    this.memories = [];
    this.history = ['void_awakening'];
    this.choices = [];
    this.choiceLog = [];
    this.completedChapters = {};
    this.encounteredCharacters = [];
    this._eraVisited = [];
    this.characterFlags = {};
    this.relationships = {};
    this.relationshipLog = [];
    // hasCompletedGame 和 playthroughCount 不重置——它们是持久化元数据
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

  getFateLevel() {
    const f = this.fateCounter;
    const maxF = getChapterMaxFate();
    const low = Math.ceil(maxF / 3);
    const mid = Math.ceil(maxF * 2 / 3);
    if (f <= low) return { level: '宿命抗争者', color: 'var(--fate-low)', desc: '你还在与命运搏斗。你相信自己可以改变方向。' };
    if (f <= mid) return { level: '宿命追随者', color: 'var(--fate-mid)', desc: '你开始听见命运的低语。你偶尔会在夜里惊醒，感觉一切都已经被写好了。' };
    return { level: '宿命见证者', color: 'var(--fate-high)', desc: '你已经知道答案了。你只是还在走着看。' };
  },

  /** 初始化角色关系值（首次遇到时调用，默认50） */
  initRelationship(characterName) {
    if (!(characterName in this.relationships)) {
      this.relationships[characterName] = 50;
    }
  },

  /** 调整角色关系值，自动限制在 0-100 */
  adjustRelationship(characterName, delta, reason) {
    if (!characterName) return;
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
    this.characterFlags[flagName] += (amount || 1);
  },

  /** 获取角色标记值 */
  getFlag(flagName) {
    return this.characterFlags[flagName] || 0;
  },

  /** 标记游戏已通关 */
  markGameCompleted() {
    this.hasCompletedGame = true;
    this.playthroughCount = (this.playthroughCount || 0) + 1;
  },

  toJSON() {
    return {
      currentScene: this.currentScene,
      chapter: this.chapter,
      round: this.round,
      tags: [...this.tags],
      fateCounter: this.fateCounter,
      antiFateCounter: this.antiFateCounter,
      memories: [...this.memories],
      history: [...this.history],
      choices: [...this.choices],
      choiceLog: [...this.choiceLog],
      completedChapters: {...this.completedChapters},
      encounteredCharacters: [...this.encounteredCharacters],
      _eraVisited: [...(this._eraVisited || [])],
      characterFlags: {...this.characterFlags},
      relationships: {...this.relationships},
      relationshipLog: [...this.relationshipLog],
      hasCompletedGame: this.hasCompletedGame || false,
      playthroughCount: this.playthroughCount || 0
    };
  },

  fromJSON(data) {
    this.currentScene = data.currentScene;
    this.chapter = data.chapter;
    this.round = data.round;
    this.tags = data.tags || [];
    this.fateCounter = data.fateCounter || 0;
    this.antiFateCounter = data.antiFateCounter || 0;
    this.memories = data.memories || [];
    this.history = data.history || [];
    this.choices = data.choices || [];
    this.choiceLog = data.choiceLog || [];
    this.completedChapters = data.completedChapters || {};
    this.encounteredCharacters = data.encounteredCharacters || [];
    this._eraVisited = data._eraVisited || [];
    this.characterFlags = data.characterFlags || {};
    this.relationships = data.relationships || {};
    this.relationshipLog = data.relationshipLog || [];
    this.hasCompletedGame = data.hasCompletedGame || false;
    this.playthroughCount = data.playthroughCount || 0;
  }
};

// 追踪访问过的时代
GameState._eraVisited = GameState._eraVisited || [];
