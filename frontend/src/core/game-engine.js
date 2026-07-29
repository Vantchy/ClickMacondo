/* ================================================================
   js/game-engine.js — 游戏引擎
   依赖：js/game-state.js, js/chapter-registry.js, js/storage.js, js/ui.js
   ================================================================ */

const GameEngine = {
  selectChoice(choiceId) {
    const scene = this.getCurrentScene();
    if (!scene || scene.type !== 'choice') return null;

    // 已锁定——回退查看时不可重新选择
    if (GameState.sceneChoices[scene.id]) return null;

    const choice = scene.choices.find(c => c.id === choiceId);
    if (!choice) return null;

    // 记录选择
    GameState.choices.push(choiceId);
    GameState.choiceLog.push({
      chapter: GameState.chapter,
      round: scene.round,
      choiceId: choiceId,
      label: choice.label,
      tags: choice.effects.tags,
      memory: choice.effects.memory,
      targetChapter: choice.effects.targetChapter || null
    });

    // 应用效果
    if (choice.effects.tags) {
      const newTags = [];
      choice.effects.tags.forEach(t => {
        if (!GameState.tags.includes(t)) { GameState.tags.push(t); newTags.push(t); }
      });
      // v2.1: 持久化标签到跨存档存储
      if (newTags.length > 0 && typeof persistTags === 'function') {
        persistTags(newTags);
      }
    }

    if (choice.effects.memory && !GameState.memories.includes(choice.effects.memory)) {
      GameState.memories.push(choice.effects.memory);
      // v2.1: 持久化记忆碎片
      if (typeof persistMemory === 'function') persistMemory(choice.effects.memory);
    }

    // v2.0: 处理宿命值变化
    if (typeof choice.effects.fate === 'number' && Number.isFinite(choice.effects.fate)) {
      GameState.fateCounter = Math.max(0, Math.min(
        (typeof MAX_FATE !== 'undefined') ? MAX_FATE : 6,
        GameState.fateCounter + choice.effects.fate
      ));
      GameState._lastFateChange = choice.effects.fate;
    } else {
      GameState._lastFateChange = 0;
    }

    // v2.0: 处理羁绊值变化
    if (typeof choice.effects.bond === 'number' && Number.isFinite(choice.effects.bond)) {
      GameState.bondCounter = Math.max(0, Math.min(
        (typeof MAX_BOND !== 'undefined') ? MAX_BOND : 6,
        GameState.bondCounter + choice.effects.bond
      ));
      GameState._lastBondChange = choice.effects.bond;
    } else {
      GameState._lastBondChange = 0;
    }

    // v2.0: 处理线索道具获得
    if (choice.effects.clue) {
      const clueId = choice.effects.clue;
      if (GameState.addClueFragment(clueId)) {
        GameState._lastClueFound = clueId;
        // v2.1: 持久化到跨存档存储
        if (typeof persistClue === 'function') persistClue(clueId);
      }
    }

    // 可玩性增强：处理关系值变化
    if (choice.effects.relationshipEffects) {
      Object.entries(choice.effects.relationshipEffects).forEach(([charName, delta]) => {
        GameState.adjustRelationship(charName, delta, choice.label);
      });
    }

    // 可玩性增强：处理角色标记（跨章节条件追踪）
    if (choice.effects.characterFlags) {
      Object.entries(choice.effects.characterFlags).forEach(([flagName, amount]) => {
        GameState.incrementFlag(flagName, amount);
      });
    }

    // v2.3: 追踪所有门控选项使用（线索/记忆/标记/关系/宿命/羁绊/周目）
    if (choice.requiredClue || choice.requiredMemory || choice.requiredFlag ||
        choice.requiredRelationship || choice.requiredFate || choice.requiredBond ||
        choice.requiredPlaythrough) {
      GameState._secretOptionsChosen = (GameState._secretOptionsChosen || 0) + 1;
    }

    // 锁定选择：记录当前场景选择了哪个选项（回退后不可更改）
    GameState.sceneChoices[scene.id] = choiceId;

    // 先跳转到分支叙事
    const nextSceneId = choice.nextScene;

    // 截断历史：如果在回看中做了新选择，丢弃"未来"分支
    if (GameState.historyIndex < GameState.history.length - 1) {
      GameState.history = GameState.history.slice(0, GameState.historyIndex + 1);
    }

    GameState.history.push(nextSceneId);
    GameState.currentScene = nextSceneId;
    GameState.historyIndex = GameState.history.length - 1;
    GameState.round = scene.round;

    // 自动存档
    StorageManager.autoSave();

    return choice;
  },

  goToScene(sceneId) {
    // 截断历史
    if (GameState.historyIndex < GameState.history.length - 1) {
      GameState.history = GameState.history.slice(0, GameState.historyIndex + 1);
    }
    GameState.history.push(sceneId);
    GameState.currentScene = sceneId;
    GameState.historyIndex = GameState.history.length - 1;
    const chapterData = getCurrentChapterData();
    const scene = chapterData ? chapterData.scenes[sceneId] : null;
    if (scene) {
      GameState.round = scene.round || GameState.round;
    }
    StorageManager.autoSave();
  },

  getCurrentScene() {
    const chapterData = getCurrentChapterData();
    return chapterData ? chapterData.scenes[GameState.currentScene] || null : null;
  },

  goToSettlement() {
    const scene = this.getCurrentScene();
    if (scene && scene.type === 'narrative' && scene.nextScene) {
      this.goToScene(scene.nextScene);
    }
  },

  getChapterEndScene() {
    const chapterData = getCurrentChapterData();
    return chapterData ? chapterData.scenes[chapterData.id + '_end'] : null;
  },

  /* ---- v2.0: 动量与烙印方法 ---- */

  /** 记录本章烙印 */
  recordChapterImprint(chapterNum) {
    const MAX_F = (typeof MAX_FATE !== 'undefined') ? MAX_FATE : 6;
    const MAX_B = (typeof MAX_BOND !== 'undefined') ? MAX_BOND : 6;
    const fLevel = getImprintLevel(GameState.fateCounter, MAX_F);
    const bLevel = getBondImprintLevel(GameState.bondCounter, MAX_B);
    GameState.recordImprint(chapterNum, fLevel, bLevel);
  },

  /** 应用动量规则：根据上章烙印计算下章起始值 */
  applyMomentum(prevChapterNum) {
    const MAX_F = (typeof MAX_FATE !== 'undefined') ? MAX_FATE : 6;
    const MAX_B = (typeof MAX_BOND !== 'undefined') ? MAX_BOND : 6;

    const fLevel = GameState.fateImprint[prevChapterNum];
    const bLevel = GameState.bondImprint[prevChapterNum];

    // 宿命动量
    if (fLevel === 'witness') GameState.fateCounter = Math.round(MAX_F * 2/3);
    else if (fLevel === 'follower') GameState.fateCounter = Math.round(MAX_F * 1/3);
    else GameState.fateCounter = 0; // rebel 或无记录

    // 羁绊动量
    if (bLevel === 'soul_of_family') GameState.bondCounter = Math.round(MAX_B * 2/3);
    else if (bLevel === 'bonded') GameState.bondCounter = Math.round(MAX_B * 1/3);
    else GameState.bondCounter = 0; // estranged 或无记录
  },

  /** 获取当前象限 */
  getCurrentQuadrant() {
    return GameState.getQuadrant ? GameState.getQuadrant() : getQuadrantLabel(GameState.fateCounter, GameState.bondCounter);
  },

  /** 切换到指定章节（用于章节选择器跳转）
   *  @param {boolean} preserveHistory - true=自然推进时保留跨章历史，false/undefined=跳转时重置
   */
  switchToChapter(chapterNum, preserveHistory) {
    const chapterId = chapterNumToId(chapterNum);
    const chapterData = chapters[chapterId];
    if (!chapterData) return false;

    if (chapterNum !== GameState.chapter) {
      const isFromPrologue = (GameState.chapter === 0);

      // 已完成章节 → 进入查看模式（跳到章末结算，保留回退链）
      if (GameState.isChapterCompleted(chapterNum) && chapterNum < GameState.chapter) {
        GameState.chapter = chapterNum;
        const endScene = chapterData.scenes[chapterData.id + '_end'];
        const targetScene = endScene ? (chapterData.id + '_end') : chapterData.initialScene;
        GameState.currentScene = targetScene;
        GameState.round = endScene ? (endScene.round || 99) : 0;
        GameState.history.push(targetScene);
        GameState.historyIndex = GameState.history.length - 1;
        StorageManager.autoSave();
        return true;
      }

      // 序章跳转：允许跳转到时代选择的目标章节
      if (isFromPrologue) {
        console.log('switchToChapter prologue: preserveHistory=' + preserveHistory + ', historyLen=' + GameState.history.length);
        GameState.chapter = chapterNum;
        GameState.currentScene = chapterData.initialScene;
        GameState.round = 0;
        if (preserveHistory) {
          GameState.history.push(chapterData.initialScene);
          GameState.historyIndex = GameState.history.length - 1;
          console.log('switchToChapter prologue: pushed, new len=' + GameState.history.length + ', idx=' + GameState.historyIndex);
        } else {
          GameState.history = [chapterData.initialScene];
          GameState.historyIndex = 0;
          console.log('switchToChapter prologue: reset, len=1, idx=0');
        }
        GameState.choices = [];
        GameState.choiceLog = [];
        StorageManager.autoSave();
        this.encounterChapterMembers();
        return true;
      }

      // 前进到紧邻的下一章（仅当当前章节已完成）
      if (chapterNum === GameState.chapter + 1 && GameState.isChapterCompleted(GameState.chapter)) {
        // v2.0: 应用动量规则（从第2章开始，序章跳转不走此逻辑）
        if (GameState.chapter >= 1) {
          this.applyMomentum(GameState.chapter);
        }
        GameState.chapter = chapterNum;
        // 可玩性增强：终章结局路由
        let initialScene = chapterData.initialScene;
        if (chapterNum === 21 && GameState._endingType && typeof ENDING_DEFS !== 'undefined') {
          const endingDef = ENDING_DEFS[GameState._endingType];
          if (endingDef && endingDef.initialScene && chapterData.scenes[endingDef.initialScene]) {
            initialScene = endingDef.initialScene;
          }
        }
        GameState.currentScene = initialScene;
        GameState.round = 0;
        if (preserveHistory) {
          // 自然推进：追加到现有历史，保留跨章回溯能力
          GameState.history.push(initialScene);
          GameState.historyIndex = GameState.history.length - 1;
        } else {
          GameState.history = [initialScene];
          GameState.historyIndex = 0;
        }
        GameState.choices = [];
        GameState.choiceLog = [];
        StorageManager.autoSave();
        this.encounterChapterMembers();
        return true;
      }

      // 其他情况：锁定
      if (!GameState.isChapterCompleted(chapterNum) && chapterNum > GameState.chapter + 1) {
        showToast('✕ 请先完成当前章节再来探索这里');
        return false;
      }
    }

    // 同一章节，允许切换
    GameState.chapter = chapterNum;
    GameState.currentScene = chapterData.initialScene;
    GameState.round = 0;
    GameState.history = [chapterData.initialScene];
    GameState.historyIndex = 0;
    GameState.choices = [];
    GameState.choiceLog = [];
    StorageManager.autoSave();
    return true;
  },

  /** 进入下一章 */
  goToNextChapter() {
    // v2.0: 记录本章烙印（序章不记录）
    if (GameState.chapter >= 1) {
      this.recordChapterImprint(GameState.chapter);
    }
    GameState.markChapterCompleted(GameState.chapter);
    // 追踪时代访问（序章选择记录）
    if (GameState.chapter === 0) {
      const lastChoice = GameState.choiceLog.length > 0 ? GameState.choiceLog[GameState.choiceLog.length - 1] : null;
      if (lastChoice && lastChoice.targetChapter) {
        if (!GameState._eraVisited) GameState._eraVisited = [];
        if (!GameState._eraVisited.includes(lastChoice.targetChapter)) {
          GameState._eraVisited.push(lastChoice.targetChapter);
        }
      }
    }
    // 检查成就并通知
    checkAchievements();
    checkAndNotifyAchievements();
    // 检查是否有待处理的targetChapter（序章时代选择）
    const lastChoice = GameState.choiceLog.length > 0 ? GameState.choiceLog[GameState.choiceLog.length - 1] : null;
    let nextChapter = (lastChoice && lastChoice.targetChapter) ? lastChoice.targetChapter : GameState.chapter + 1;

    // v2.0: 终章结局路由 — 按 imprint 统计判定
    if (nextChapter === 21) {
      const endingType = (typeof determineEnding === 'function') ? determineEnding(GameState) : 'bystander';
      GameState._endingType = endingType;
      // 追踪已看过的结局（归一化：_all_clues 变体计入基础结局）
      if (!GameState._endingsSeen) GameState._endingsSeen = [];
      const baseEndingType = endingType.replace('_all_clues', '');
      if (!GameState._endingsSeen.includes(baseEndingType)) {
        GameState._endingsSeen.push(baseEndingType);
      }
      // 标记游戏通关
      GameState.markGameCompleted();
      // 检查是否所有章节已完成（真结局条件之一）
      const allChaptersDone = Object.keys(GameState.completedChapters).length >= 20;
      GameState._allChaptersDone = allChaptersDone;
    }

    return this.switchToChapter(nextChapter, true);
  },

  /** 遇到当前章节的家族成员（包括附身角色和场景中出现的说话者） */
  encounterChapterMembers() {
    const chData = getCurrentChapterData();
    if (!chData) return;
    const newEncounters = [];

    // 1. 附身角色
    if (chData.possessedCharacter) {
      const possessed = chData.possessedCharacter;
      const registryNames = Object.keys(familyTreeRegistry);
      const matchedName = registryNames.find(rn =>
        rn === possessed || rn.includes(possessed) || possessed.includes(rn)
      );
      const nameToEncounter = matchedName || possessed;
      if (GameState.encounterCharacter(nameToEncounter)) {
        newEncounters.push(nameToEncounter);
      }
    }

    // 2. 注册的家庭成员
    if (chData.familyMembers) {
      chData.familyMembers.forEach(m => {
        if (GameState.encounterCharacter(m.name)) {
          newEncounters.push(m.name);
        }
      });
    }

    // 3. 扫描所有场景中的说话者
    if (chData.scenes) {
      const registryNames = Object.keys(familyTreeRegistry);
      Object.values(chData.scenes).forEach(scene => {
        if (scene.leftPage && scene.leftPage.speaker) {
          const speaker = scene.leftPage.speaker;
          if (speaker === '旁白') return;
          const matches = registryNames.filter(rn =>
            rn === speaker || rn.includes(speaker) || speaker.includes(rn)
          );
          let matchedName = null;
          if (matches.length === 1) {
            matchedName = matches[0];
          } else if (matches.length > 1) {
            matchedName = matches.find(rn => {
              const gen = familyTreeRegistry[rn].generation;
              if (chData.chapterNumber <= 7 && gen === 2) return true;
              if (chData.chapterNumber >= 15 && gen === 6) return true;
              return false;
            });
            if (!matchedName) matchedName = matches[0];
          }
          if (matchedName && GameState.encounterCharacter(matchedName)) {
            if (!newEncounters.includes(matchedName)) {
              newEncounters.push(matchedName);
            }
          }
        }
      });
    }

    // 可玩性增强：为所有遇到的角色初始化关系值
    if (GameState.encounteredCharacters && GameState.encounteredCharacters.length > 0) {
      GameState.encounteredCharacters.forEach(name => {
        GameState.initRelationship(name);
      });
    }

    // 批量通知
    if (newEncounters.length > 0) {
      setTimeout(() => {
        if (newEncounters.length === 1) {
          showToast('❦ ' + newEncounters[0] + ' 已加入家族树');
        } else {
          showToast('❦ ' + newEncounters.length + ' 位人物已加入家族树');
        }
      }, 800);
    }
  },

  /** 从序章跳转到指定章节 */
  jumpToChapterFromPrologue(chapterNum) {
    GameState.markChapterCompleted(0);
    GameState.chapter = chapterNum;
    const chapterId = chapterNumToId(chapterNum);
    const chapterData = chapters[chapterId];
    if (!chapterData) return false;
    GameState.currentScene = chapterData.initialScene;
    GameState.round = 0;
    GameState.history = [chapterData.initialScene];
    GameState.historyIndex = 0;
    GameState.choices = [];
    GameState.choiceLog = [];
    StorageManager.autoSave();
    return true;
  },

  resetGame() {
    if (typeof resetRendererState === 'function') resetRendererState();
    GameState.reset();
    StorageManager.clearAll();
  },

  /** v2.0：根据记忆碎片 + 隐藏线索过滤可见选项
   *  @param {object} scene — 选择场景对象
   *  @returns {array} 过滤后的选项列表（仅保留条件满足的）
   */
  filterChoicesByMemories(scene) {
    if (!scene || scene.type !== 'choice' || !scene.choices) return [];
    return scene.choices.filter(choice => {
      // requiredMemory 条件 → 必须持有该记忆碎片
      if (choice.requiredMemory && !GameState.memories.includes(choice.requiredMemory)) return false;
      // requiredClue 条件 → 必须持有该线索道具
      if (choice.requiredClue && !GameState.hasClue(choice.requiredClue)) return false;
      // requiredFlag 条件 → 必须达到指定标记累积
      if (choice.requiredFlag) {
        const { flag, min } = choice.requiredFlag;
        if (GameState.getFlag(flag) < min) return false;
      }
      // requiredRelationship 条件 → 必须与指定角色达到好感度阈值
      if (choice.requiredRelationship) {
        const { character, min } = choice.requiredRelationship;
        if ((GameState.relationships[character] || 0) < min) return false;
      }
      // requiredFate 条件 → 宿命值范围（min 含，max 含）
      if (choice.requiredFate) {
        const f = GameState.fateCounter;
        if (choice.requiredFate.min != null && f < choice.requiredFate.min) return false;
        if (choice.requiredFate.max != null && f > choice.requiredFate.max) return false;
      }
      // requiredBond 条件 → 羁绊值范围（min 含，max 含）
      if (choice.requiredBond) {
        const b = GameState.bondCounter;
        if (choice.requiredBond.min != null && b < choice.requiredBond.min) return false;
        if (choice.requiredBond.max != null && b > choice.requiredBond.max) return false;
      }
      // requiredPlaythrough 条件 → 周目数（≥ min）
      if (choice.requiredPlaythrough) {
        if ((GameState.playthroughCount || 0) < choice.requiredPlaythrough) return false;
      }
      return true;
    });
  },

  /** 可玩性增强：追踪边缘文字阅读 */
  trackMarginaliaRead() {
    if (!GameState._marginaliaRead) GameState._marginaliaRead = 0;
    GameState._marginaliaRead++;
  },

  /** 可玩性增强：追踪探索场景热点发现 */
  trackHotspotDiscovered() {
    if (!GameState._hotspotsFound) GameState._hotspotsFound = 0;
    GameState._hotspotsFound++;
  },

  /** 可玩性增强：为探索场景检查热点发现进度 */
  getExplorationProgress(requiredDiscoveries) {
    return {
      found: GameState._hotspotsFound || 0,
      required: requiredDiscoveries || 0,
      isComplete: (GameState._hotspotsFound || 0) >= (requiredDiscoveries || 1)
    };
  },

  /** 可玩性增强：重置探索场景热点计数（进入新探索场景时调用） */
  resetExplorationProgress() {
    GameState._hotspotsFound = 0;
  },

  /** 同步 chapter 到 sceneId 所属章节 */
  _syncChapterForScene(sceneId) {
    const ch = getChapterForScene(sceneId);
    if (ch !== null && ch !== GameState.chapter) {
      GameState.chapter = ch;
    }
  },

  /** 翻页：回到历史中的上一页 */
  navigateBack() {
    console.log('navigateBack: index=' + GameState.historyIndex + ', len=' + GameState.history.length + ', cur=' + GameState.currentScene);
    if (GameState.historyIndex <= 0) return false;
    // v2.3: 追踪回退导航
    GameState._hasGoneBack = true;
    GameState._backNavCount = (GameState._backNavCount || 0) + 1;
    GameState.historyIndex--;
    const prevId = GameState.history[GameState.historyIndex];
    GameState.currentScene = prevId;
    this._syncChapterForScene(prevId);
    const chData = getCurrentChapterData();
    const prevScene = chData ? chData.scenes[prevId] : null;
    console.log('navigateBack: -> ' + prevId + ', chapter=' + GameState.chapter + ', found=' + !!prevScene);
    if (prevScene) GameState.round = prevScene.round || 0;
    return true;
  },

  /** 翻页：前往历史中的下一页，或在末端继续推进 */
  navigateForward() {
    if (GameState.historyIndex < GameState.history.length - 1) {
      // 仍在历史中——前进到下一页
      GameState.historyIndex++;
      const nextId = GameState.history[GameState.historyIndex];
      GameState.currentScene = nextId;
      this._syncChapterForScene(nextId);
      const chData = getCurrentChapterData();
      const nextScene = chData ? chData.scenes[nextId] : null;
      if (nextScene) GameState.round = nextScene.round || 0;
      return true;
    }
    // 已在历史末端——检查是否可以自然推进
    const scene = this.getCurrentScene();
    if (!scene) return false;
    // 选项页：已锁定的自动推进，未选择的必须手动
    if (scene.type === 'choice') {
      const lockedId = GameState.sceneChoices[scene.id];
      if (lockedId && scene.choices) {
        const choice = scene.choices.find(c => c.id === lockedId);
        if (choice && choice.nextScene) {
          GameState.history.push(choice.nextScene);
          GameState.currentScene = choice.nextScene;
          GameState.historyIndex = GameState.history.length - 1;
          this._syncChapterForScene(choice.nextScene);
          return true;
        }
      }
      return false;
    }
    // 叙事页有 nextScene
    if (scene.type === 'narrative' && scene.nextScene) {
      this.goToScene(scene.nextScene);
      return true;
    }
    // 结算页（章末/轮末）— 用空格或右箭头继续
    if (scene.type === 'settlement' && scene.settlement) {
      const st = scene.settlement;
      if (st.isFinalEnd) return false; // 终章致谢需手动点击
      if (st.nextScene) {
        if (st.isChapterEnd) {
          // v2.0: 记录本章烙印（与 goToNextChapter 保持一致）
          if (GameState.chapter >= 1) {
            this.recordChapterImprint(GameState.chapter);
          }
          GameState.markChapterCompleted(GameState.chapter);
          // 检查成就
          checkAchievements();
          checkAndNotifyAchievements();
        }
        this.goToScene(st.nextScene);
        return true;
      }
      if (st.isChapterEnd) {
        // 无 nextScene 的章末 — 调用标准章节推进
        this.goToNextChapter();
        return true;
      }
      return false;
    }
    return false;
  }
};
