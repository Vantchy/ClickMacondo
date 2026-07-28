/* ================================================================
   js/sidebar.js — 侧边栏管理（家族树、历史档案、个人简介、关系查询）
   依赖：js/game-state.js, js/chapter-registry.js, js/config.js
   ================================================================ */

const SidebarManager = {
  /* 家族树 */
  openFamilyTree() {
    const overlay = document.getElementById('sidebar-family-overlay');
    const panel = document.getElementById('sidebar-family');
    const content = document.getElementById('family-content');
    if (!overlay || !panel || !content) return;

    const chData = getCurrentChapterData();
    const possessedChar = chData ? chData.possessedCharacter : null;
    const allMembers = familyTreeToArray();
    const members = allMembers.filter(m => GameState.encounteredCharacters.includes(m.name));
    members.sort((a, b) => a.generation - b.generation);

    let html = '';
    if (members.length === 0) {
      html += '<div style="text-align:center;color:var(--gold-dim);padding:20px;font-style:italic;">尚未遇到任何家族成员。<br>继续旅程来发现他们。</div>';
    } else {
      let lastGen = null;
      const GEN_LABELS = { 0: '外部人物', 1: '第一代', 2: '第二代', 3: '第三代', 4: '第四代', 5: '第五代', 6: '第六代' };
      members.forEach((member, i) => {
        if (member.generation !== lastGen) {
          if (lastGen !== null) {
            html += '<div class="family-tree-connector"></div>';
          }
          const genLabel = GEN_LABELS[member.generation] || ('第' + member.generation + '代');
          html += `<div style="font-family:var(--font-title);font-size:0.75rem;color:var(--gold-light);margin:16px 0 6px;letter-spacing:0.08em;padding-bottom:4px;border-bottom:1px solid rgba(184,137,62,0.18);">${genLabel}</div>`;
          lastGen = member.generation;
        }
        const isCurrent = possessedChar && member.name === possessedChar;
        html += `
          <div class="family-member ${isCurrent ? 'current' : ''}">
            <div class="fm-name">${isCurrent ? '► ' : ''}${member.name}</div>
            <div class="fm-relation">${member.relation}</div>
            <div style="font-size:0.72rem;color:#c0b090;margin-top:4px;line-height:1.4;">${member.description}</div>
          </div>`;
      });
    }

    content.innerHTML = html;
    overlay.classList.add('open');
    panel.classList.add('open');
  },

  closeFamilyTree() {
    document.getElementById('sidebar-family-overlay').classList.remove('open');
    document.getElementById('sidebar-family').classList.remove('open');
  },

  /* 历史档案 */
  openArchives() {
    const overlay = document.getElementById('sidebar-archives-overlay');
    const panel = document.getElementById('sidebar-archives');
    const content = document.getElementById('archives-content');
    if (!overlay || !panel || !content) return;

    let html = '';

    const sortedChapterIds = Object.keys(chapters).sort((a, b) => {
      const na = chapters[a].chapterNumber;
      const nb = chapters[b].chapterNumber;
      return na - nb;
    });
    sortedChapterIds.forEach(chId => {
      const ch = chapters[chId];
      if (!ch.memories) return;
      const chMemories = Object.values(ch.memories);
      if (chMemories.length === 0) return;

      html += `<div style="font-size:0.75rem;color:var(--gold-dim);margin:12px 0 8px;">${ch.title}</div>`;

      chMemories.forEach(mem => {
        const unlocked = GameState.memories.includes(mem.id);
        html += `
          <div class="archive-item ${unlocked ? 'unlocked' : 'locked'}">
            <div class="archive-chapter">第${ch.chapterNumber}章</div>
            <div class="archive-title">${unlocked ? '💎 ' : ''}${mem.title}</div>
            <div class="archive-desc">${unlocked ? mem.description : '尚未解锁……做出不同的选择来发现这段记忆。'}</div>
          </div>`;
      });
    });

    if (Object.keys(memoryRegistry).length === 0 || GameState.memories.length === 0) {
      html += '<div style="text-align:center;color:var(--gold-dim);padding:20px;font-style:italic;">尚未解锁任何记忆碎片。<br>在游戏中做出选择来收集它们。</div>';
    }

    content.innerHTML = html;
    overlay.classList.add('open');
    panel.classList.add('open');
  },

  closeArchives() {
    document.getElementById('sidebar-archives-overlay').classList.remove('open');
    document.getElementById('sidebar-archives').classList.remove('open');
  },

  /* 个人简介 */
  openProfile() {
    const overlay = document.getElementById('sidebar-profile-overlay');
    const panel = document.getElementById('sidebar-profile');
    const content = document.getElementById('profile-content');
    if (!overlay || !panel || !content) return;

    const chapterData = getCurrentChapterData();
    const chapterTitle = chapterData ? chapterData.title : '未知章节';
    const possessedChar = chapterData ? chapterData.possessedCharacter || '未知角色' : '未知角色';
    let html = '';

    // 状态概览
    html += '<div class="profile-section">';
    html += '<h4>当前状态</h4>';
    html += `<p class="profile-choice-log">附身角色：<strong>${possessedChar}</strong></p>`;
    html += `<p class="profile-choice-log">章节进度：${chapterTitle} · 第${Math.max(0, GameState.round)}轮</p>`;
    html += '</div>';

    // 已获得标签
    html += '<div class="profile-section">';
    html += '<h4>已获得标签</h4>';
    html += '<div class="profile-tags">';
    if (GameState.tags.length === 0) {
      html += '<span style="color:var(--gold-dim);font-style:italic;">暂无标签</span>';
    } else {
      GameState.tags.forEach(t => {
        html += `<span class="tag-badge">${t}</span>`;
      });
    }
    html += '</div></div>';

    // 选择记录
    html += '<div class="profile-section">';
    html += '<h4>选择记录</h4>';
    if (GameState.choiceLog.length === 0) {
      html += '<p class="profile-choice-log" style="color:var(--gold-dim);font-style:italic;">尚未做出选择。</p>';
    } else {
      GameState.choiceLog.forEach((log, i) => {
        html += `<p class="profile-choice-log">第${log.round}轮：<strong>${log.label}</strong> → ${log.tags.join('、')}</p>`;
      });
    }
    html += '</div>';

    // 可玩性增强：角色关系值
    html += '<div class="profile-section">';
    html += '<h4>🤝 羁绊之人</h4>';
    if (!GameState.relationships || Object.keys(GameState.relationships).length === 0) {
      html += '<p class="profile-choice-log" style="color:var(--gold-dim);font-style:italic;">尚未建立与他人的羁绊。<br>继续旅程来影响你与他人的关系。</p>';
    } else {
      const relEntries = Object.entries(GameState.relationships);
      // 按关系值从高到低排列
      relEntries.sort((a, b) => b[1] - a[1]);
      const displayedChars = relEntries.slice(0, 8); // 最多显示8个
      displayedChars.forEach(([charName, value]) => {
        const level = GameState.getRelationshipLevel
          ? GameState.getRelationshipLevel(charName)
          : null;
        const tierLabel = level ? level.tier : '';
        const tierColor = level ? level.color : 'var(--gold-dim)';
        const barColor = value >= 66 ? '#6a9a5a' : value >= 34 ? '#c4910a' : '#a05040';
        html += '<div class="relationship-item">';
        html += '<div class="rel-name">' + charName + ' <span style="color:' + tierColor + ';font-size:0.65rem;">— ' + tierLabel + '</span></div>';
        html += '<div class="rel-bar-wrap"><div class="rel-bar-fill" style="width:' + value + '%;background:' + barColor + ';"></div></div>';
        html += '<div class="rel-label">' + value + ' / 100</div>';
        html += '</div>';
      });
      if (relEntries.length > 8) {
        html += '<p class="profile-choice-log" style="text-align:center;color:var(--gold-dim);">……还有 ' + (relEntries.length - 8) + ' 人</p>';
      }
    }
    html += '</div>';

    content.innerHTML = html;
    overlay.classList.add('open');
    panel.classList.add('open');
  },

  closeProfile() {
    document.getElementById('sidebar-profile-overlay').classList.remove('open');
    document.getElementById('sidebar-profile').classList.remove('open');
  },

  /* 关系查询 */
  openRelations() {
    const overlay = document.getElementById('sidebar-relations-overlay');
    const panel = document.getElementById('sidebar-relations');
    if (!overlay || !panel) return;

    const allNames = Object.keys(familyTreeRegistry);
    const members = allNames.map(n => familyTreeRegistry[n]);
    members.sort((a, b) => a.generation - b.generation);

    const sel1 = document.getElementById('relation-char1');
    const sel2 = document.getElementById('relation-char2');
    if (!sel1 || !sel2) return;

    const GEN_LABELS = {0:'外部', 1:'第一代', 2:'第二代', 3:'第三代', 4:'第四代', 5:'第五代', 6:'第六代'};
    const optionsHTML = members.map(m => {
      const genLabel = GEN_LABELS[m.generation] || ('第'+m.generation+'代');
      const encountered = GameState.encounteredCharacters.includes(m.name) ? '' : '（未遇到）';
      return `<option value="${m.name}">${m.name} — ${genLabel}${encountered}</option>`;
    }).join('');
    sel1.innerHTML = optionsHTML;
    sel2.innerHTML = optionsHTML;

    document.getElementById('relation-result').innerHTML = '';

    overlay.classList.add('open');
    panel.classList.add('open');
  },

  closeRelations() {
    document.getElementById('sidebar-relations-overlay').classList.remove('open');
    document.getElementById('sidebar-relations').classList.remove('open');
  },

  queryRelation() {
    const raw1 = document.getElementById('relation-char1').value;
    const raw2 = document.getElementById('relation-char2').value;
    const resultDiv = document.getElementById('relation-result');
    if (!raw1 || !raw2 || !resultDiv) return;

    if (raw1 === raw2) {
      resultDiv.innerHTML = '<div style="color:var(--gold-dim);text-align:center;padding:12px;font-style:italic;">请选择两个不同的人物</div>';
      return;
    }

    const name1 = resolveCharacterName(raw1);
    const name2 = resolveCharacterName(raw2);

    const direct = findRelation(name1, name2);
    const path = findRelationPath(name1, name2);

    let html = '<div style="padding:12px;background:rgba(184,137,62,0.08);border:1px solid rgba(184,137,62,0.2);border-radius:8px;">';
    html += '<div style="font-family:var(--font-title);font-size:0.85rem;color:var(--gold-light);margin-bottom:10px;">🔗 关系查询结果</div>';

    if (direct) {
      const [label, event] = direct;
      html += '<div style="margin-bottom:12px;">';
      html += '<div style="font-size:0.9rem;color:var(--gold-light);margin-bottom:4px;"><strong>' + name1 + '</strong> 与 <strong>' + name2 + '</strong></div>';
      html += '<div style="font-size:1rem;color:#e8d0a0;margin:6px 0;letter-spacing:0.04em;">' + label + '</div>';
      html += '<div style="font-size:0.8rem;color:#c0b090;line-height:1.7;margin-top:8px;padding-top:8px;border-top:1px solid rgba(184,137,62,0.15);">' + event + '</div>';
      html += '</div>';
    } else if (path && path.length > 0) {
      html += '<div style="margin-bottom:12px;">';
      html += '<div style="font-size:0.9rem;color:var(--gold-light);margin-bottom:6px;"><strong>' + name1 + '</strong> 与 <strong>' + name2 + '</strong></div>';
      html += '<div style="font-size:0.78rem;color:var(--gold-dim);margin-bottom:8px;">无直接记录的关系，通过以下链路关联：</div>';
      const pathDescParts = [];
      for (let i = 0; i < path.length; i++) {
        const edge = path[i];
        const fromGender = CHARACTER_GENDERS[edge.from] || '未知';
        const toGender = CHARACTER_GENDERS[edge.to] || '未知';
        const fromRef = (i === 0) ? name1 : ('其' + (fromGender === '男' ? '丈夫' : fromGender === '女' ? '妻子' : '伴侣'));
        const toRef = (i === path.length - 1) ? name2 : ('其' + (toGender === '男' ? '丈夫' : toGender === '女' ? '妻子' : '伴侣'));
        pathDescParts.push(fromRef + '与' + toRef + '为' + edge.label);
      }
      html += '<div style="font-size:0.78rem;color:#c0b090;line-height:1.8;">' + pathDescParts.join('；') + '</div>';
      html += '</div>';
    } else {
      html += '<div style="color:var(--gold-dim);text-align:center;padding:12px;font-style:italic;">未找到两人之间的关联路径。<br>他们可能来自完全不同的时代与谱系。</div>';
    }

    html += '</div>';
    resultDiv.innerHTML = html;
  }
};
