/* ================================================================
   js/game-engine.js — 游戏引擎
   依赖：js/game-state.js, js/chapter-registry.js, js/storage.js, js/ui.js
   ================================================================ */

const GameEngine = {
  selectChoice(choiceId) {
    const scene = this.getCurrentScene();
    if (!scene || scene.type !== 'choice') return null;

    const choice = scene.choices.find(c => c.id === choiceId);
    if (!choice) return null;

    // 记录选择
    GameState.choices.push(choiceId);
    GameState.choiceLog.push({
      round: scene.round,
      choiceId: choiceId,
      label: choice.label,
      tags: choice.effects.tags,
      memory: choice.effects.memory,
      targetChapter: choice.effects.targetChapter || null
    });

    // 应用效果
    if (choice.effects.tags) {
      choice.effects.tags.forEach(t => {
        if (!GameState.tags.includes(t)) GameState.tags.push(t);
      });
    }

    if (choice.effects.memory && !GameState.memories.includes(choice.effects.memory)) {
      GameState.memories.push(choice.effects.memory);
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

    // 可玩性增强：追踪秘密选项使用
    if (choice.isSecretOption || choice.requiredMemory) {
      GameState._secretOptionChosen = true;
    }

    // 先跳转到分支叙事
    const nextSceneId = choice.nextScene;
    GameState.history.push(nextSceneId);
    GameState.currentScene = nextSceneId;
    GameState.round = scene.round;

    // 自动存档
    StorageManager.autoSave();

    return choice;
  },

  goToScene(sceneId) {
    GameState.history.push(sceneId);
    GameState.currentScene = sceneId;
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

  /** 切换到指定章节（用于章节选择器跳转） */
  switchToChapter(chapterNum) {
    const chapterId = chapterNumToId(chapterNum);
    const chapterData = chapters[chapterId];
    if (!chapterData) return false;

    if (chapterNum !== GameState.chapter) {
      const isFromPrologue = (GameState.chapter === 0);

      // 已完成章节 → 进入查看模式（跳到章末结算）
      if (GameState.isChapterCompleted(chapterNum) && chapterNum < GameState.chapter) {
        GameState.chapter = chapterNum;
        const endScene = chapterData.scenes[chapterData.id + '_end'];
        if (endScene) {
          GameState.currentScene = chapterData.id + '_end';
          GameState.round = endScene.round || 99;
          GameState.history = [chapterData.id + '_end'];
          StorageManager.autoSave();
          return true;
        }
        GameState.currentScene = chapterData.initialScene;
        GameState.round = 0;
        GameState.history = [chapterData.initialScene];
        StorageManager.autoSave();
        return true;
      }

      // 序章跳转：允许跳转到时代选择的目标章节
      if (isFromPrologue) {
        GameState.chapter = chapterNum;
        GameState.currentScene = chapterData.initialScene;
        GameState.round = 0;
        GameState.history = [chapterData.initialScene];
        GameState.choices = [];
        GameState.choiceLog = [];
        StorageManager.autoSave();
        this.encounterChapterMembers();
        return true;
      }

      // 前进到紧邻的下一章（仅当当前章节已完成）
      if (chapterNum === GameState.chapter + 1 && GameState.isChapterCompleted(GameState.chapter)) {
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
        GameState.history = [chapterData.initialScene];
        GameState.choices = [];
        GameState.choiceLog = [];
        StorageManager.autoSave();
        this.encounterChapterMembers();
        return true;
      }

      // 其他情况：锁定
      if (!GameState.isChapterCompleted(chapterNum) && chapterNum > GameState.chapter) {
        showToast('🔒 请先完成当前章节再来探索这里');
        return false;
      }
    }

    // 同一章节，允许切换
    GameState.chapter = chapterNum;
    GameState.currentScene = chapterData.initialScene;
    GameState.round = 0;
    GameState.history = [chapterData.initialScene];
    GameState.choices = [];
    GameState.choiceLog = [];
    StorageManager.autoSave();
    return true;
  },

  /** 进入下一章 */
  goToNextChapter() {
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

    // 可玩性增强：终章结局路由
    if (nextChapter === 21) {
      const endingType = (typeof determineEnding === 'function') ? determineEnding(GameState) : 'bystander';
      GameState._endingType = endingType;
      // 标记游戏通关
      GameState.markGameCompleted();
      // 检查是否所有章节已完成（真结局条件之一）
      const allChaptersDone = Object.keys(GameState.completedChapters).length >= 20;
      GameState._allChaptersDone = allChaptersDone;
    }

    return this.switchToChapter(nextChapter);
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
          showToast('🌳 ' + newEncounters[0] + ' 已加入家族树');
        } else {
          showToast('🌳 ' + newEncounters.length + ' 位人物已加入家族树');
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
    GameState.choices = [];
    GameState.choiceLog = [];
    StorageManager.autoSave();
    return true;
  },

  resetGame() {
    GameState.reset();
    StorageManager.clearAll();
  },

  /** 可玩性增强：根据已收集的记忆碎片过滤可见选项
   *  @param {object} scene — 选择场景对象
   *  @returns {array} 过滤后的选项列表（仅保留条件满足的）
   */
  filterChoicesByMemories(scene) {
    if (!scene || scene.type !== 'choice' || !scene.choices) return [];
    return scene.choices.filter(choice => {
      // 没有 requiredMemory 条件 → 总是可见
      if (!choice.requiredMemory) return true;
      // 有 requiredMemory 条件 → 检查是否持有
      return GameState.memories.includes(choice.requiredMemory);
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

  /** 可玩性增强：追踪"另一种可能"已读 */
  trackAltNarrativeSeen() {
    GameState._altNarrativeSeen = true;
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
  }
};
