/* ---- 第一章数据 ---- */
registerChapter({
  id: 'chapter1',
  title: '第一章 · 宿命之环',
  initialScene: 'prologue',
  possessedCharacter: '何塞·阿尔卡蒂奥·布恩迪亚',
  chapterNumber: 1,
  preview: '<p>第二章 · 失眠症</p><p style="margin-top:8px;">你将附身于奥雷里亚诺（或乌尔苏拉，或何塞本人），</p><p>经历那场让整个马孔多失去记忆的瘟疫。</p><p style="margin-top:8px;font-weight:600;color:var(--gold-light);">失眠症最可怕的不是无法入睡——</p><p style="font-weight:600;color:var(--gold-light);">而是忘记了你是谁。</p>',
  nextLabel: '进入第二章 · 失眠症',
  moods: {
    'prologue': '刚刚睁开眼睛 —— 手里攥着两块磁铁，心跳如战鼓，面前是乌尔苏拉铁青的脸',
    'round1_choice': '磁铁在手中嗡鸣 —— 铁锅铁盆向你聚来，乌尔苏拉的目光如芒在背',
    'round2_choice': '放大镜聚焦的阳光灼伤了你的手臂 —— 但你不在乎，你在乎的是那束光能射多远',
    'round3_choice': '两个孩子的手 —— 一个厚实如石，一个冰凉如河 —— 你同时握着两种未来',
    'round4_choice': '远山在暮色里变成蓝色 —— 乌尔苏拉站在你身旁，等你回答那个你没有答案的问题',
    'chapter1_end': '第一次合上羊皮卷 —— 手指还残留着冰块的温度，眼睛已经望向第二章的阴影'
  },

  scenes: {

    /* ---- 序章 ---- */
    prologue: {
      id: 'prologue',
      type: 'narrative',
      chapter: 1,
      round: 0,
      title: '第一幕开启·你醒来了',
      leftPage: {
        speaker: '旁白',
        speakerColor: '#4a2a18',
        paragraphs: [
          '你在一片混沌中睁开眼睛。没有身体，没有声音——只有感知。',
          '你闻到：河水的气味，潮湿的泥土，以及某种你无法命名的、像烧焦的金属一样的甜腥味。你感觉到：一个男人正在你面前呼吸。他蹲在地上，背对着你，太阳在他肩头晒出一层细密的汗珠。',
          '他的手里攥着两块金属锭。'
        ],
        quotes: [
          '“万物皆有灵。只需唤起它们的灵性。”'
        ],
        postQuote: [
          '他站起身，回过头来。你看见他的脸——年轻、狂热、眼睛里燃烧着一种你熟悉的东西。那不是疯狂，那是确信。他确信这世界上除了土地和牲口，还有别的东西——藏在铁锭里、藏在天空中、藏在冰块的心脏里。',
          '他身后是一个女人。她双手叉腰，脸色铁青。她叫乌尔苏拉。',
          '你突然明白了。',
          '你不是在观看。你就是他。',
          '你是何塞·阿尔卡蒂奥·布恩迪亚。你正在用一头骡子和一对山羊，换两块磁铁。',
          '而你即将迈出第一步——走向你命中注定的百年孤独。'
        ],
        transition: '梅尔基亚德斯从箱底摸出一面小铜镜，在你眼前晃了晃——镜面上隐约倒映着某个弯曲的字符。点击右侧选项，做出你的第一个选择——',
        clues: [
          { triggerText: '一面小铜镜', itemId: 'melquiades_mirror', narrative: '铜镜的镜面模糊——但你看见了。你的眼睛里有一行倒写的字。你不认识这种文字，但你知道它写的是什么——是你还没走过的路。', unlocksIn: ['chapter17'] }
        ]
      },
      marginalia: { text: '我第一次读到"万物皆有灵"时，在页边写了一个"信"字。后来再读，我把那个字划掉了——改成了"等"。', style: 'whisper' },
      choices: null,
      nextScene: 'round1_choice'
    },

    /* ---- 第一轮选择：磁铁 ---- */
    round1_choice: {
      id: 'round1_choice',
      type: 'choice',
      chapter: 1,
      round: 1,
      title: '第一轮选择 · 磁铁',
      leftPage: {
        speaker: '乌尔苏拉',
        speakerColor: '#a52020',
        paragraphs: [
          '乌尔苏拉站在你身后，声音像一根绷紧的弦：'
        ],
        quotes: [
          '“那是我们仅有的牲口。你拿它们换了两块废铁？”'
        ],
        postQuote: [
          '你低头看着磁铁。铁锅、铁盆、铁钳从地上纷纷立起，像被唤醒的士兵，叮叮当当朝你走来。你的心跳得像战鼓。',
          '吉卜赛人梅尔基亚德斯站在帐篷阴影里，用嘶哑的声音说：'
        ],
        quotes2: [
          '“干不了这个，朋友。磁铁挖不出黄金。”'
        ],
        postQuote2: [
          '但你不信。你不信任何人。'
        ],
        transition: '你选择——',
        clues: [
          { triggerText: '铁锅、铁盆、铁钳从地上纷纷立起', itemId: 'magnet_hum', narrative: '磁铁在你手中发出低沉的嗡鸣——不是声音，是一种你从未感受过的振动。像大地在和你说话，用一种比语言更古老的频率。你忽然明白了梅尔基亚德斯说的"万物皆有灵"——不是比喻，不是疯话。是事实。', unlocksIn: ['chapter5'] }
        ]
      },
      choices: [
        {
          id: 'r1_a',
          label: '拖着磁铁走进丛林',
          description: '你不回答她。你扛起磁铁，走进密林，一寸一寸地走，寻找黄金……',
          nextScene: 'round1_a_narrative',
          effects: { tags: ['执着勘探者'], memory: null, relationshipEffects: { '乌尔苏拉·伊瓜兰': -10, '梅尔基亚德斯': 5 }, characterFlags: { 'obsession_path': 1 }, fate: 2, bond: -1 },
          emotionalCost: '乌尔苏拉会在门口站到天黑——从这天起，她不再等你回家吃饭',
          emotionalGain: '你在密林深处发现了那副盔甲里的骷髅和那绺黑发——某种比黄金更重的东西',
          alternativeNarrative: '若你把磁铁还给梅尔基亚德斯——乌尔苏拉会握住你的手。铜镜会挂在门后，你会每天在镜子里看见她的脸。但你永远不会知道密林深处埋着什么。'
        },
        {
          id: 'r1_b',
          label: '把磁铁还给梅尔基亚德斯',
          description: '你看着乌尔苏拉红肿的眼睛，把磁铁放回吉卜赛人的面前……',
          nextScene: 'round1_b_narrative',
          effects: { tags: ['家庭的守望者'], memory: null, relationshipEffects: { '乌尔苏拉·伊瓜兰': 15, '梅尔基亚德斯': -5 }, characterFlags: { 'ursula_cared': 1 }, fate: -1, bond: 2 },
          emotionalCost: '你放弃了磁铁能唤出黄金的那个可能性——某种狂热从你眼睛里熄灭了',
          emotionalGain: '乌尔苏拉端出那碗汤时没有看你——但她的手在你手背上停了一秒',
          alternativeNarrative: '若你拖着磁铁走进丛林——你会在密林里迷路三天。乌尔苏拉会把晚饭热了三遍，然后在第四天凌晨把碗收进橱柜。你不会知道那天晚上她哭了。'
        },
        {
          id: 'r1_c',
          label: '把磁铁卖给村里的其他人',
          description: '你以双倍价格把磁铁卖给商人，用金币换回了骡子和山羊……',
          nextScene: 'round1_c_narrative',
          effects: { tags: ['精明的妥协者'], memory: null, relationshipEffects: { '乌尔苏拉·伊瓜兰': 5, '梅尔基亚德斯': -10 }, characterFlags: { 'anti_fate_choice': 1 }, fate: 0, bond: 1 },
          emotionalCost: '梅尔基亚德斯收回了那面铜镜——也收回了你本想看到的那块冰',
          emotionalGain: '金币在桌上叮当作响。乌尔苏拉数了三遍——她笑了，那是几个月来的第一次',
          alternativeNarrative: '若你把磁铁还给梅尔基亚德斯——他不会从箱底取出铜镜。你不会在镜子里看见自己狂热的脸。但你会知道：在吉卜赛老人的眼中，你不是一个商人。'
        },
        {
          id: 'r1_d', label: '你记得磁铁的嗡鸣——这一次，听听它说什么',
          description: '上一次你拖着磁铁走进了丛林。这一次你停下脚步——不是寻找黄金，是倾听。磁铁在嗡鸣——不是金属在说话，是马孔多的大地在叫你慢下来。',
          nextScene: 'round1_b_narrative',
          requiredPlaythrough: 2,
          effects: { tags: ['轮回的倾听者'], memory: null, fate: -1, bond: 2 }
        }
      ],
      settlement: 'round1_settlement'
    },

    /* 第一轮 A 分支叙事 */
    round1_a_narrative: {
      id: 'round1_a_narrative',
      type: 'narrative',
      chapter: 1, round: 1,
      title: '执着勘探者',
      echoText: '你记得磁铁在手中的嗡鸣——那不是声音，是大地在和你说话。你相信万物皆有灵。你从来没有不信过。',
      leftPage: {
        speaker: '何塞·阿尔卡蒂奥·布恩迪亚',
        speakerColor: '#1a3a4a',
        paragraphs: [
          '你不回答乌尔苏拉。你把两块磁铁扛上肩膀，赤脚走进河岸边的密林。你口中念念有词——那些咒语是梅尔基亚德斯教你的，你记不全，但你不在乎。你一寸一寸地走，一路拖拽，铁锭划过石头发出刺耳的刮擦声。',
          '三天。你走了三天。',
          '你没有找到黄金。唯一的收获是一副十五世纪的盔甲，锈迹斑斑，嵌在泥地里。你把它撬出来，敲开——里面是一具钙化的骷髅，颈上挂着铜质圣物盒，盒里有一绺女人的头发，黑得像夜。',
          '你把头发收进口袋。把盔甲拖回家。'
        ],
        quotes: [
          '乌尔苏拉站在门口，看到你满身泥泞、手里只有一副破铁壳，她没有骂你。她只是说：“挂门后吧。至少能吓唬盗贼。”'
        ],
        postQuote: [
          '那天晚上你躺在床上，听着她在隔壁翻身的声音。你知道她没睡。你也没睡。你在黑暗中握着那一绺黑发，觉得它比黄金更重。'
        ]
      },
      choices: null,
      nextScene: 'round1_settlement'
    },

    /* 第一轮 B 分支叙事 */
    round1_b_narrative: {
      id: 'round1_b_narrative',
      type: 'narrative',
      chapter: 1, round: 1,
      title: '家庭的守望者',
      echoText: '你记得她端出那碗汤时没有看你。但她的手在你手背上停了一秒——那一秒够长了。',
      leftPage: {
        speaker: '何塞·阿尔卡蒂奥·布恩迪亚',
        speakerColor: '#1a3a4a',
        paragraphs: [
          '你站在乌尔苏拉和磁铁之间，手心出汗。你看着她——她的眼睛红肿，嘴唇紧抿。你忽然想起她嫁给你那天，穿的白裙子沾了泥，她笑着说："没关系，我们从头开始。"',
          '你转身，走回帐篷，把磁铁放回梅尔基亚德斯面前。'
        ],
        quotes: [
          '“我换不了。”你说。',
          '梅尔基亚德斯没有笑，只是收起磁铁，从箱子里取出一面小铜镜递给你。“送你的，”他说，“别让女人哭。”'
        ],
        postQuote: [
          '你拿着铜镜回家，递给乌尔苏拉。她接过去，看了一眼镜子里的自己，又看了一眼你。"你还有骡子和山羊吗？""没有。""那明年呢？""……会有。"',
          '她转身走进厨房，锅碗瓢盆响了一阵。然后她端出一碗热汤放在桌上，没看你，说："喝吧。"',
          '你坐下来喝汤。汤很咸。你不知道是因为盐放多了，还是因为你在喝的时候，眼睛湿了。'
        ]
      },
      choices: null,
      nextScene: 'round1_settlement'
    },

    /* 第一轮 C 分支叙事 */
    round1_c_narrative: {
      id: 'round1_c_narrative',
      type: 'narrative',
      chapter: 1, round: 1,
      title: '精明的妥协者',
      leftPage: {
        speaker: '何塞·阿尔卡蒂奥·布恩迪亚',
        speakerColor: '#1a3a4a',
        paragraphs: [
          '你从乌尔苏拉身边走过，径直去了村里的广场。你大声吆喝着，用磁铁吸引铁器，表演了一场"唤醒万物"的奇观。村民们围上来，惊叹不已。',
          '你以双倍价格把磁铁卖给了一个商人。他用它们来吸井底的铁桶。',
          '当晚你回到家，把金币倒在桌上——不多不少，正好够买回那对骡子和山羊，还有多余的一些。',
          '乌尔苏拉站在桌旁，数了三遍金币，抬起头看你：'
        ],
        quotes: [
          '“你不疯了？”',
          '“我从来没疯过，”你说，“我只是在找办法。”'
        ],
        postQuote: [
          '她没说话，但那天晚上她把手放在你的手背上。那是几个月来第一次。',
          '你赢了这场仗，但你心里明白：你失去的不是磁铁，而是那个站在帐篷阴影里的吉卜赛人望向你的、像是在说"你本该走得更远"的眼神。'
        ]
      },
      choices: null,
      nextScene: 'round1_settlement'
    },

    /* 第一轮结算 */
    round1_settlement: {
      id: 'round1_settlement',
      type: 'settlement',
      chapter: 1, round: 1,
      title: '第一轮 · 结算',
      leftPage: {
        speaker: null,
        speakerColor: null,
        paragraphs: [
          '无论你选了哪一条路，三月都过去了。吉卜赛人再次到来的时候，乌尔苏拉正在院子里晾衣服。你听见远处传来鼓声——不是节庆的鼓，是科学的鼓。',
          '你放下手中的锄头，向河边走去。你没有回头。',
          '你永远不会知道，乌尔苏拉站在那根晾衣绳后面，看了你多久。'
        ]
      },
      settlement: {
        summary: '第一轮选择完成。你的决定改变了何塞与乌尔苏拉之间的关系，也为后续的旅程埋下了伏笔。',
        nextScene: 'round2_choice',
        nextLabel: '进入第二轮',
        quadrantNarratives: {
          guardian: '你选择在家庭与探索之间寻找平衡——乌尔苏拉在厨房等你，但你的眼睛还望着远山。',
          prophet: '你独自走向真理的方向——磁铁、放大镜、冰块，每一次都离家人更远。但你是谁？你是那个在密林里寻找黄金的人。',
          follower: '你选择了陪伴——在乌尔苏拉身边，在孩子们身边。你不是不理解命运的召唤，你只是选择了回答另一种召唤。',
          rebel: '你与一切搏斗——与磁铁、与放大镜、与乌尔苏拉的目光。你在撕扯中找到自己的形状。'
        }
      }
    },

    /* ---- 第二轮选择：放大镜 ---- */
    round2_choice: {
      id: 'round2_choice',
      type: 'choice',
      chapter: 1, round: 2,
      title: '第二轮选择 · 放大镜',
      leftPage: {
        speaker: '梅尔基亚德斯',
        speakerColor: '#c4910a',
        paragraphs: [
          '梅尔基亚德斯站在新搭的帐篷前，这一次他身边没有女人和孩子，只有一个木箱。他打开木箱，取出一面巨大的放大镜——足有鼓面大小。',
          '他把它举到太阳下。一束光落在干草堆上，草堆瞬间燃烧起来，火焰蹿起一人多高。',
          '人群后退。你向前走了一步。'
        ],
        quotes: [
          '“上一次，你用磁铁找黄金。这一次呢？用这面镜子，你能点燃敌人的堡垒。能点燃整个世界的天空。”'
        ],
        postQuote: [
          '你想起了那副盔甲里的骷髅。想起了那绺黑发。想起了乌尔苏拉站在门口说"你至少能吓唬盗贼"——你不想再只是"吓唬"了。'
        ],
        transition: '你选择——'
      },
      marginalia: { text: '读到火焰蹿起一人多高时，我的手在发抖。不是因为害怕——是因为我也想被那束光照一次。', style: 'whisper' },
      choices: [
        {
          id: 'r2_a',
          label: '用乌尔苏拉的金币购买',
          description: '跑回家，撬开床底的木匣，取出她父亲一辈子积蓄的三枚金币……',
          nextScene: 'round2_a_narrative',
          effects: { tags: ['科学与牺牲'], memory: null, relationshipEffects: { '乌尔苏拉·伊瓜兰': -15 }, characterFlags: { 'betrayed_ursula_trust': 1 }, fate: 1, bond: -2 },
          emotionalCost: '金币是乌尔苏拉父亲的遗产——她留着"等真正需要时"。你今天证明了：你不是那个"真正需要"',
          alternativeNarrative: '若你用记忆交换——你将失去父亲的脸。你将永远无法在脑海里画出那个教会你骑马的男人的面容。但乌尔苏拉的金币还在床底——这让她在多年后的饥荒中多撑了三个月。'
        },
        {
          id: 'r2_b',
          label: '与梅尔基亚德斯交易——用你的"记忆"',
          description: '你买不起放大镜。但你有一件东西可以交换：你父亲的面容记忆……',
          nextScene: 'round2_b_narrative',
          isSecretOption: true,
          effects: { tags: ['代价与收获', '失去面容的人'], memory: null, relationshipEffects: { '梅尔基亚德斯': 10 }, characterFlags: { 'paid_with_memory': 1 }, fate: 2, bond: 0 },
          emotionalCost: '你失去的是父亲的脸——他的眉毛、他的胡茬、他笑时的皱纹。你记得他存在过，但再也看不见他',
          emotionalGain: '你得到了这面能点燃一切的镜子——代价已付，从此没有人能说你是一个不敢付出的人',
          alternativeNarrative: '若你偷了乌尔苏拉的金币——你不会失去记忆。但多年以后你照镜子时，你会看见的不是自己——是那个床底木匣被撬开的下午，铜锁在月光下反着冷光。'
        },
        {
          id: 'r2_c',
          label: '先向乌尔苏拉坦白，再决定',
          description: '你走回院子，把一切告诉她。她从床底取出木匣，把金币倒在桌上……',
          nextScene: 'round2_c_narrative',
          effects: { tags: ['清醒的狂热者'], memory: null, relationshipEffects: { '乌尔苏拉·伊瓜兰': 10 }, characterFlags: { 'ursula_cared': 1 }, fate: -1, bond: 2 },
          alternativeNarrative: '若你用记忆交换放大镜——梅尔基亚德斯会欣然应允。但你会在多年后的某个黄昏发现你画不出乌尔苏拉年轻时的脸——不是因为你老了，是因为你用来交换的东西不只是你父亲的面容。'
        }
      ],
      settlement: 'round2_settlement'
    },

    /* 第二轮 A 分支叙事 */
    round2_a_narrative: {
      id: 'round2_a_narrative',
      type: 'narrative',
      chapter: 1, round: 2,
      title: '科学与牺牲',
      leftPage: {
        speaker: '何塞·阿尔卡蒂奥·布恩迪亚',
        speakerColor: '#1a3a4a',
        paragraphs: [
          '你跑回家。你知道她藏在哪儿——床底下，第三块石板下面，一个带铜锁的木匣。你撬开锁，取出三枚金币。那是她父亲一辈子的积蓄，是她留着"等真正需要时"的底牌。',
          '你带着金币回到帐篷，买下了放大镜。',
          '当天下午你就在院子里试了。你举着它对着太阳，光束聚焦在你自己的手臂上——不是想自杀，你只是想试试它有多烫。结果你的前臂灼伤，皮肉翻卷，像被烙铁烫过。',
          '乌尔苏拉回来的时候，你正坐在门槛上，左手缠着破布，右手还攥着放大镜。',
          '她没有说话。她走进屋里，把剩下的金币钉进箱底，上了三把锁。',
          '那天夜里你痛得睡不着。你躺在床上，听见月光在屋顶上走动。你把放大镜举到眼前，透过它看月亮——月亮碎成一片片的，像她撕碎的信。'
        ]
      },
      choices: null,
      nextScene: 'round2_settlement'
    },

    /* 第二轮 B 分支叙事 */
    round2_b_narrative: {
      id: 'round2_b_narrative',
      type: 'narrative',
      chapter: 1, round: 2,
      title: '代价与收获',
      leftPage: {
        speaker: '何塞·阿尔卡蒂奥·布恩迪亚',
        speakerColor: '#1a3a4a',
        paragraphs: [
          '你买不起放大镜。你口袋里只有三十铜板，但你没有犹豫。'
        ],
        quotes: [
          '“我没有钱，”你对梅尔基亚德斯说，“但我有一样东西可以换。”',
          '“什么？”',
          '“我记得我父亲的样子。我祖父的样子。我祖父的祖父的样子。我能把它们画给你看。”'
        ],
        postQuote: [
          '梅尔基亚德斯看了你很久。他伸出雀爪般的手，握住你的手腕，像是把什么东西从你的骨头里抽走——但你没有痛感，只觉得一阵凉意掠过。',
          '他放开了你，把放大镜递到你手中。'
        ],
        quotes2: [
          '“成交，”他说，“但我拿走的不是你父亲的容貌。我拿走的是你记住他的能力。”'
        ],
        postQuote2: [
          '你拿着放大镜走回家，站在院子里。你举它对着太阳，点燃了一堆干草。火焰在黄昏中跳动着，你忽然想不起你父亲是否长着胡子。',
          '你试着回想——失败。你再试——失败。你最后一次试——你的脑海里空空如也，只剩下一个模糊的轮廓。',
          '你站在原地，火焰在脚边静静燃烧。你没有哭。你只是说："值得。"'
        ]
      },
      choices: null,
      nextScene: 'round2_settlement'
    },

    /* 第二轮 C 分支叙事 */
    round2_c_narrative: {
      id: 'round2_c_narrative',
      type: 'narrative',
      chapter: 1, round: 2,
      title: '清醒的狂热者',
      leftPage: {
        speaker: '何塞·阿尔卡蒂奥·布恩迪亚',
        speakerColor: '#1a3a4a',
        paragraphs: [
          '你没有冲回家，也没有立刻交易。你走回自家院子，坐在乌尔苏拉身边，把放大镜的事原原本本告诉了她——包括你想用它做什么，包括你还缺多少钱。',
          '她听完，沉默了很长时间。然后她从床底下取出那个木匣，打开锁，把金币倒在桌上。'
        ],
        quotes: [
          '“三枚，”她说，“只能三枚。”',
          '“你为什么给我？”',
          '“因为如果你永远得不到它，你会恨我一辈子。我宁愿你得到它，然后自己发现它没你想的那么重要。”'
        ],
        postQuote: [
          '你拿着三枚金币走向帐篷。你把金币递给梅尔基亚德斯，拿起放大镜。你走回家的时候，乌尔苏拉正坐在门槛上缝衣服。',
          '你没说话。你举起放大镜——点燃了院子里第一棵枯草。火烧得很快，片刻就熄了。',
          '她没抬头。"冷吗？"她问。"什么？""你拿着那东西的时候，心里冷吗？"',
          '你想了想，说："不冷。……但也没有我想象的那么热。"'
        ]
      },
      choices: null,
      nextScene: 'round2_settlement'
    },

    /* 第二轮结算 */
    round2_settlement: {
      id: 'round2_settlement',
      type: 'settlement',
      chapter: 1, round: 2,
      title: '第二轮 · 结算',
      leftPage: {
        speaker: null,
        speakerColor: null,
        paragraphs: [
          '你在放大镜上花了太多时间。你写了一本手册，论述阳光战的战术威力，厚达两百页，寄往首都。你等待回复，等了两个月、半年、一年。',
          '后来你终于明白，那封信并没有寄到任何人手里。邮差在半路上被河水冲走了。信沉入河底，被鱼啃食，被淤泥覆盖。',
          '你是在一个黄昏知道的。邮局的门已经关了，你站在门口，看着夕阳一寸一寸沉入地平线。你没有生气。你只是把放大镜放在门槛上，走回屋里。',
          '乌尔苏拉在桌上摆了两副碗筷——她一直在等你。'
        ]
      },
      settlement: {
        summary: '第二轮选择完成。放大镜带来的不仅是火焰，还有你和乌尔苏拉之间微妙的平衡。',
        nextScene: 'round3_choice',
        nextLabel: '进入第三轮',
        quadrantNarratives: {
          guardian: '你选择在家庭与探索之间寻找平衡——乌尔苏拉在厨房等你，但你的眼睛还望着远山。',
          prophet: '你独自走向真理的方向——磁铁、放大镜、冰块，每一次都离家人更远。但你是谁？你是那个在密林里寻找黄金的人。',
          follower: '你选择了陪伴——在乌尔苏拉身边，在孩子们身边。你不是不理解命运的召唤，你只是选择了回答另一种召唤。',
          rebel: '你与一切搏斗——与磁铁、与放大镜、与乌尔苏拉的目光。你在撕扯中找到自己的形状。'
        }
      }
    },

    /* ---- 第三轮选择：孩子们 ---- */
    round3_choice: {
      id: 'round3_choice',
      type: 'choice',
      chapter: 1, round: 3,
      title: '第三轮选择 · 孩子们',
      leftPage: {
        speaker: '乌尔苏拉',
        speakerColor: '#a52020',
        paragraphs: [
          '何塞·阿尔卡蒂奥——你的长子——十四岁了。他站在院子里，石头一样沉默，身材壮得像一头小牛。他不说话的时候，你就忘记了他的存在。',
          '奥雷里亚诺——你的次子——六岁，瘦得像一根芦苇，眼睛里有一种奇怪的清澈。他看东西的时候，你能感觉到他在穿透它。',
          '你一向很少管他们。你忙着炼金、测量星空、烧灼自己的皮肤。你觉得他们自然会成长，像河边的草一样。',
          '但今天下午，乌尔苏拉把两个孩子赶进厨房，站在你面前说：'
        ],
        quotes: [
          '“你带他们去看吉卜赛人。”',
          '“为什么是我？”',
          '“因为你是他们的父亲。”'
        ],
        postQuote: [
          '她没有说"因为你也该当个父亲"。她说的只是"因为你是他们的父亲"。',
          '你带着两个男孩穿过村子，走向帐篷。你左手牵着何塞·阿尔卡蒂奥的手——他手大得像成年人的——右手牵着奥雷里亚诺的手——他的手冰凉，像河里的石头。'
        ],
        transition: '你选择——'
      },
      choices: [
        {
          id: 'r3_a',
          label: '带他们去看冰块',
          description: '挤进人群最前面，把两个孩子拉到身前。奥雷里亚诺伸手去摸冰块……',
          nextScene: 'round3_a_narrative',
          effects: { tags: ['冰块的导师'], memory: null, relationshipEffects: { '奥雷里亚诺·布恩迪亚': 15, '何塞·阿尔卡蒂奥': -5 }, characterFlags: { 'showed_ice': 1 }, fate: 2, bond: -1 },
          alternativeNarrative: '若你带他们去看纸牌——庇拉尔会翻出那张"死神"。奥雷里亚诺会记住的不是冰块的触感，而是她翻牌时突然停顿的手指。'
        },
        {
          id: 'r3_b',
          label: '带他们去看吉卜赛女人的纸牌',
          description: '绕开冰块的帐篷，来到庇拉尔·特尔内拉的旧纸牌面前……',
          nextScene: 'round3_b_narrative',
          effects: { tags: ['命运的揭示者'], memory: null, relationshipEffects: { '奥雷里亚诺·布恩迪亚': 5, '庇拉尔·特尔内拉': 10 }, characterFlags: { 'heard_prophecy': 1 }, fate: -1, bond: 2 },
          alternativeNarrative: '若你带他们去看冰块——奥雷里亚诺会在行刑队前想起你的手覆在他手背上的温度。他不会知道庇拉尔曾预言了他的死——他只会记得冰在烧。'
        },
        {
          id: 'r3_c',
          label: '带他们去看望远镜',
          description: '每人五个里亚尔，可以看到村子另一头的女人，仿佛近在咫尺……',
          nextScene: 'round3_c_narrative',
          effects: { tags: ['观看者'], memory: null, relationshipEffects: { '何塞·阿尔卡蒂奥': 10, '奥雷里亚诺·布恩迪亚': 5 }, fate: 0, bond: 2 },
          alternativeNarrative: '若你带他们去看冰——奥雷里亚诺会摸到时间。若你带他们去看纸牌——何塞·阿尔卡蒂奥会听到关于自己远行的预言。你选了望远镜——他们看见的是此刻，不是未来。'
        }
      ],
      settlement: 'round3_settlement'
    },

    /* 第三轮 A 分支叙事 */
    round3_a_narrative: {
      id: 'round3_a_narrative',
      type: 'narrative',
      chapter: 1, round: 3,
      title: '冰块的导师',
      leftPage: {
        speaker: '旁白',
        speakerColor: '#4a2a18',
        paragraphs: [
          '你挤进人群，一直挤到最前面，把两个孩子拉到身前。吉卜赛人打开箱子，寒气扑面而来。何塞·阿尔卡蒂奥后退了一步。奥雷里亚诺却向前走了一步，伸出手去摸。'
        ],
        quotes: [
          '“它在烧。”奥雷里亚诺说。'
        ],
        postQuote: [
          '你把手放在冰块上。你感觉到的不是冰——是时间。是未来。是一座永远也建不成的城市。',
          '你没有说话。你站了很久。',
          '多年以后，奥雷里亚诺上校面对行刑队的时候，会想起这一天。他会想起你的手放在冰块上，指节发白。那时候他会明白，你那天没有在看冰块——你在看他。'
        ]
      },
      choices: null,
      nextScene: 'round3_settlement'
    },

    /* 第三轮 B 分支叙事 */
    round3_b_narrative: {
      id: 'round3_b_narrative',
      type: 'narrative',
      chapter: 1, round: 3,
      title: '命运的揭示者',
      leftPage: {
        speaker: '旁白',
        speakerColor: '#4a2a18',
        paragraphs: [
          '你绕开了冰块的帐篷，带他们来到一个坐在树下、手拿旧纸牌的女人面前。她是庇拉尔·特尔内拉。',
          '"给这两个孩子算一算。"你说。',
          '她看了看何塞·阿尔卡蒂奥，笑了："他会走很远的路，但这家里没有他的位置。"',
          '她看了看奥雷里亚诺，笑容消失了。她翻了翻牌，又翻了一遍，第三次翻了一遍，然后把牌扣在膝盖上："这个孩子……他会死很多次。"',
          '奥雷里亚诺面无表情地站在那里，看了她很久。',
          '回程的路上，他问你："她会说真话吗？"你想了想："她会说她想说的。但那不一定是真的。""那你呢？你会说真话吗？"',
          '你没有回答。多年以后，奥雷里亚诺上校会站在行刑队面前，想起你沉默的侧影。他会明白，你那天没有回答，是因为你说不出口——你想告诉他"不会"，但你怕他记住。'
        ]
      },
      choices: null,
      nextScene: 'round3_settlement'
    },

    /* 第三轮 C 分支叙事 */
    round3_c_narrative: {
      id: 'round3_c_narrative',
      type: 'narrative',
      chapter: 1, round: 3,
      title: '观看者',
      leftPage: {
        speaker: '旁白',
        speakerColor: '#4a2a18',
        paragraphs: [
          '你带他们来到望远镜前。每人五个里亚尔，可以看到村子另一头的那个女人——她正坐在院子里梳头，仿佛近在咫尺。',
          '何塞·阿尔卡蒂奥只看了一眼就说："假的。"他转身走了。',
          '奥雷里亚诺却站在望远镜前很久。他转动旋钮，把焦点从女人调到天空、调到远山、调到一只正在飞的鸟。他一直没有说话。',
          '你站在他身后，忽然觉得这个孩子比你更老。',
          '许多年后，奥雷里亚诺·布恩迪亚上校会在一场战役中用望远镜观测敌军的阵地。那时他会想起这个下午，想起你站在他身后，没有催促他离开。那也许是你唯一一次耐心地等他把一件事情做完。'
        ]
      },
      choices: null,
      nextScene: 'round3_settlement'
    },

    /* 第三轮结算 */
    round3_settlement: {
      id: 'round3_settlement',
      type: 'settlement',
      chapter: 1, round: 3,
      title: '第三轮 · 结算',
      leftPage: {
        speaker: null,
        speakerColor: null,
        paragraphs: [
          '那天晚上你睡得很晚。你坐在门口，看着马孔多的街道在月光下像一条河。两个孩子都睡了，乌尔苏拉也睡了，整个村子都睡了。',
          '只有你一个人醒着。',
          '你手里握着一小块冰——你从帐篷里悄悄带出来的——它在月光下慢慢融化，像一颗缓慢死去的星星。',
          '你知道你会记住这一天。不是因为冰块，不是因为望远镜，不是因为纸牌。是因为你第一次觉得：你正在活着，而不仅是存在。'
        ]
      },
      settlement: {
        summary: '第三轮选择完成。你与孩子们共度的这个下午，将在多年后成为他们记忆中最重要的时刻。',
        nextScene: 'round4_choice',
        nextLabel: '进入第四轮',
        quadrantNarratives: {
          guardian: '你选择在家庭与探索之间寻找平衡——乌尔苏拉在厨房等你，但你的眼睛还望着远山。',
          prophet: '你独自走向真理的方向——磁铁、放大镜、冰块，每一次都离家人更远。但你是谁？你是那个在密林里寻找黄金的人。',
          follower: '你选择了陪伴——在乌尔苏拉身边，在孩子们身边。你不是不理解命运的召唤，你只是选择了回答另一种召唤。',
          rebel: '你与一切搏斗——与磁铁、与放大镜、与乌尔苏拉的目光。你在撕扯中找到自己的形状。'
        }
      }
    },

    /* ---- 第四轮选择：迁徙与留下 ---- */
    round4_choice: {
      id: 'round4_choice',
      type: 'choice',
      chapter: 1, round: 4,
      title: '第四轮选择 · 迁徙与留下',
      leftPage: {
        speaker: '乌尔苏拉',
        speakerColor: '#a52020',
        paragraphs: [
          '吉卜赛人走了。马孔多恢复了平静——那种不真实的、像假象一样的平静。你每天清晨起来，看见同样的屋顶，同样的街道，同样的灰尘在同样的阳光下飞扬。',
          '你在实验室里待的时间越来越长。你研究星盘、六分仪、地球是圆的这一事实。你写了一封信给首都，申请一笔钱来"验证地球曲率"。没有回复。',
          '有一天傍晚，你站在院子里，看着远山。乌尔苏拉走到你身边，没有说话。你感觉到她在看你的侧脸。'
        ],
        quotes: [
          '“你想离开。”她说。不是疑问句。',
          '你想了一会儿："我想去看看海。"',
          '“我们建村的时候，你见过海。”',
          '“那是沼泽。不是海。真正的大海，蔚蓝的，绵延不绝的——”'
        ],
        postQuote: [
          '她打断你："你是想去找海，还是想离开我？"'
        ],
        transition: '你选择——'
      },
      choices: [
        {
          id: 'r4_a',
          label: '独自出发，寻找大海',
          description: '带上星盘、六分仪、干粮和磁铁，在黎明前离开家门……',
          nextScene: 'round4_a_narrative',
          effects: { tags: ['远行者'], memory: '不是海的海', relationshipEffects: { '乌尔苏拉·伊瓜兰': -20 }, characterFlags: { 'left_alone': 1 }, fate: 2, bond: -1 },
          emotionalCost: '你推开家门的时候天还没亮。乌尔苏拉在假装睡着——你知道她在假装，她也知道你知道',
          emotionalGain: '你看见了海。它不是你想象的样子——但它是你的。只有你一个人看过它',
          alternativeNarrative: '若你说服全家一起迁徙——乌尔苏拉会背着你最小的儿子，在丛林里走二十三天。你不会一个人看见海——但你会永远记得她把孩子交给你的那一刻：她信任你，胜过信任任何地图。'
        },
        {
          id: 'r4_b',
          label: '说服全家一起迁徙',
          description: '画地图、算路程，承诺"到了海边我们就建一所更大的房子"……',
          nextScene: 'round4_b_narrative',
          effects: { tags: ['同行者'], memory: '一只手', relationshipEffects: { '乌尔苏拉·伊瓜兰': 10, '何塞·阿尔卡蒂奥': 5, '奥雷里亚诺·布恩迪亚': 5 }, characterFlags: { 'ursula_cared': 1, 'family_together': 1 }, fate: -1, bond: 2 },
          alternativeNarrative: '若你独自离开——你会在十天后推开同一扇门。桌上的汤已经凉了。乌尔苏拉没有问你去哪——她的沉默比任何问题都更沉。'
        },
        {
          id: 'r4_c',
          label: '留下——但建造一座"看不见的城市"',
          description: '在院子里挖坑，用黏土建造一个只属于想象的世界……',
          nextScene: 'round4_c_narrative',
          effects: { tags: ['造梦者'], memory: '泥土中的马孔多', relationshipEffects: { '乌尔苏拉·伊瓜兰': 5 }, characterFlags: { 'built_city': 1, 'anti_fate_choice': 1 }, fate: 0, bond: 0 },
          emotionalCost: '你用黏土建造的城市永远无法住人。你抬头看天的时候，阳光刺眼——你分不清天空和泥土哪个更真实',
          emotionalGain: '这座看不见的城市是你一个人的。没有人能夺走它——不是飓风，不是时间，不是命运',
          alternativeNarrative: '若你独自出发去找海——你会看见灰白的海浪翻腾如洗碗水。你会转身走回马孔多，推开同一扇门。乌尔苏拉会在桌旁等你——她的眼睛比海更深。'
        }
      ],
      settlement: 'round4_settlement'
    },

    /* 第四轮 A 分支叙事 */
    round4_a_narrative: {
      id: 'round4_a_narrative',
      type: 'narrative',
      chapter: 1, round: 4,
      title: '远行者',
      leftPage: {
        speaker: '何塞·阿尔卡蒂奥·布恩迪亚',
        speakerColor: '#1a3a4a',
        paragraphs: [
          '你没有回答她的问题。第二天凌晨，你带上星盘、六分仪、一袋干粮和那两块磁铁（你还留着它们），在黎明前离开了家门。',
          '你穿过丛林，走了四天。你穿过沼泽，走了六天。你翻过一座山，看见了——大海。',
          '灰白的，肮脏的，泡沫翻腾的，像一碗泼在地上的洗碗水。',
          '你站在岸边，看了很久。你觉得你应该哭，但你没有。你只是站在那里，像一株被遗忘在岸边的植物。',
          '你转身。你走回马孔多，用了更短的时间。你推开家门的时候，乌尔苏拉正在桌子上铺桌布。',
          '她没有问你去了哪里。她只是说："菜要凉了。"',
          '你坐下来吃饭。你没有告诉她海是什么样子，她也没有问。有些话永远不说出口，不是因为没有说出来的必要——而是因为说出来的话，就再也没有办法假装它从未发生。'
        ]
      },
      choices: null,
      nextScene: 'round4_settlement'
    },

    /* 第四轮 B 分支叙事 */
    round4_b_narrative: {
      id: 'round4_b_narrative',
      type: 'narrative',
      chapter: 1, round: 4,
      title: '同行者',
      leftPage: {
        speaker: '何塞·阿尔卡蒂奥·布恩迪亚',
        speakerColor: '#1a3a4a',
        paragraphs: [
          '你花了三天时间说服乌尔苏拉。你画地图，算路程，承诺"到了海边我们就建一所更大的房子"。她没有立刻答应，但她开始收拾行李。',
          '你们走了整整两个月。',
          '你带着妻子、两个孩子、三头驴、五只鸡和一口装着所有家当的箱子，穿过山脉、沼泽、瘴气弥漫的河谷。一路上死了两头驴，鸡全跑了，箱子在路上摔开过两次。',
          '到了海边——你看见了那片灰白肮脏的水面。',
          '乌尔苏拉站在你身边，看了一眼，然后说："这就是你非要来看的？""……是。""好看吗？"',
          '你沉默了很久。然后你说："不好看。但我得亲眼看见。"',
          '她没有回答。但她把一只手放在你的肩膀上。那是她嫁给你的这些年里，第一次主动触碰你。'
        ]
      },
      choices: null,
      nextScene: 'round4_settlement'
    },

    /* 第四轮 C 分支叙事 */
    round4_c_narrative: {
      id: 'round4_c_narrative',
      type: 'narrative',
      chapter: 1, round: 4,
      title: '造梦者',
      leftPage: {
        speaker: '何塞·阿尔卡蒂奥·布恩迪亚',
        speakerColor: '#1a3a4a',
        paragraphs: [
          '你没有走。你也没有继续种地。',
          '你在院子里挖了一个坑，把所有的炼金器具搬进去，用木板盖住顶部，每天下午钻进去待上几个小时。乌尔苏拉问你在做什么，你说："我在建一座看不见的城市。"',
          '她以为你疯了。你没有疯——你只是不想再试图用脚步丈量世界。你想用想象来建造它。',
          '你在坑底用黏土捏出山峦、河流、房屋。你用手指在泥面上划出街道、广场、教堂的尖顶。你在坑壁上画出太阳、月亮、星星。整个马孔多在你的地下洞穴里被重新建造了一次。',
          '很多年后，当真正的马孔多被飓风抹去时，没有人记得它原来的模样。但你记得——它在你手指下、在黏土中、在黑暗中，一直存在。'
        ]
      },
      choices: null,
      nextScene: 'round4_settlement'
    },

    /* 第四轮结算 */
    round4_settlement: {
      id: 'round4_settlement',
      type: 'settlement',
      chapter: 1, round: 4,
      title: '第四轮 · 结算',
      leftPage: {
        speaker: null,
        speakerColor: null,
        paragraphs: [
          '无论你走了多远，无论你是否真的看见了海——你终究还是坐在了这座院子里。',
          '栗树的影子在傍晚拉长，像一只手伸向你的脚踝。乌尔苏拉在厨房里喊着"吃饭了"。你站起来，拍了拍手上的泥，向屋里走去。',
          '你知道你还会想走。你也知道你不会再走。',
          '这不是妥协。这是你第一次主动选择留下——不是因为她，不是因为孩子，不是因为没有路。是因为你忽然想亲眼看看，这座你自己建造的村子，最终会变成什么样子。'
        ]
      },
      settlement: {
        summary: '第四轮选择完成。你与"远方"达成了和解——无论走还是留，马孔多都在那里。',
        nextScene: 'round5_choice',
        nextLabel: '进入最终轮',
        quadrantNarratives: {
          guardian: '你选择在家庭与探索之间寻找平衡——乌尔苏拉在厨房等你，但你的眼睛还望着远山。',
          prophet: '你独自走向真理的方向——磁铁、放大镜、冰块，每一次都离家人更远。但你是谁？你是那个在密林里寻找黄金的人。',
          follower: '你选择了陪伴——在乌尔苏拉身边，在孩子们身边。你不是不理解命运的召唤，你只是选择了回答另一种召唤。',
          rebel: '你与一切搏斗——与磁铁、与放大镜、与乌尔苏拉的目光。你在撕扯中找到自己的形状。'
        }
      }
    },

    /* ---- 第五轮选择：冰块与永恒 ---- */
    round5_choice: {
      id: 'round5_choice',
      type: 'choice',
      chapter: 1, round: 5,
      title: '第五轮选择 · 冰块与永恒',
      leftPage: {
        speaker: '旁白',
        speakerColor: '#4a2a18',
        paragraphs: [
          '这是梅尔基亚德斯最后一次来到马孔多。',
          '他已经老了。牙齿掉光了，皮肤像干裂的泥土，眼睛浑浊得像暴雨前的河面。但他带来的冰块仍然清澈——清得像他年轻时一样。',
          '他把冰块放在帐篷中央，周围点了八盏灯，让光线穿过冰块洒在幕布上。全村人都来了。孩子们挤在最前面，用手戳着透明的表面。',
          '你站在人群后面，站在阴影里。你看着奥雷里亚诺伸出手去摸冰块。你看着他缩回手说"它在烧"。你看着他第二次伸手——这一次他按住了冰块，没有松开。',
          '你想说话，但有什么东西堵住了你的喉咙。你想起你父亲。你不记得他的脸，但你记得他的手——他曾在一个冬天的下午，把一块冰放在你的手心里，说："这是结冰的水。它是这世界上最安静的东西。"',
          '你不记得他的脸。但你记得那块冰。'
        ],
        transition: '你选择——'
      },
      choices: [
        {
          id: 'r5_a',
          label: '把奥雷里亚诺的手放在冰块上，和他一起感受',
          description: '你走到奥雷里亚诺身后，把自己的手覆在他的手上……',
          nextScene: 'round5_a_narrative',
          effects: { tags: ['冰上的手'], memory: '覆手', fate: 1, bond: 1 }
        },
        {
          id: 'r5_b',
          label: '退后一步，让他们父子独自面对',
          description: '你从人群中退出来，站在帐篷入口处，只是看着……',
          nextScene: 'round5_b_narrative',
          effects: { tags: ['旁观者'], memory: '一步之遥', fate: 0, bond: -1}
        },
        {
          id: 'r5_c',
          label: '把冰块举起来，让全村人都在它的光里',
          description: '你抓住冰块的边缘，把它举过头顶，让蓝白色的光洒在所有人的脸上……',
          nextScene: 'round5_c_narrative',
          effects: { tags: ['举冰者'], memory: '蓝白色的光', fate: 2, bond: 0 }
        }
      ],
      settlement: 'round5_settlement'
    },

    /* 第五轮 A 分支叙事 */
    round5_a_narrative: {
      id: 'round5_a_narrative',
      type: 'narrative',
      chapter: 1, round: 5,
      title: '冰上的手',
      leftPage: {
        speaker: '旁白',
        speakerColor: '#4a2a18',
        paragraphs: [
          '你走到奥雷里亚诺身后，把你自己的手覆在他的手上。你们两个人的手掌重叠在一起，按在那块冰的表面。',
          '你想说点什么——关于父亲的记忆、关于时间、关于人类如何试图用火和铁来对抗世界的寒冷——但你没说出口。你只是和他一起站着，感受那块冰在你们掌心下融化。',
          '许多年以后，奥雷里亚诺上校会站在行刑队面前。他脑海里浮现的最后一个画面，不是战争，不是枪口——是这一天，是你的手覆在他的手上，冰块在你们掌心下慢慢变薄。',
          '那时他会明白：你什么都没有说，是因为你想说的话，都留在那块冰里了。'
        ]
      },
      choices: null,
      nextScene: 'round5_settlement'
    },

    /* 第五轮 B 分支叙事 */
    round5_b_narrative: {
      id: 'round5_b_narrative',
      type: 'narrative',
      chapter: 1, round: 5,
      title: '旁观者',
      leftPage: {
        speaker: '旁白',
        speakerColor: '#4a2a18',
        paragraphs: [
          '你从人群中退了出来。你站在帐篷入口处，看着奥雷里亚诺和何塞·阿尔卡蒂奥——两个完全不同的孩子，面对同一块冰，露出完全不同的表情。',
          '何塞·阿尔卡蒂奥看了一会儿就走了。奥雷里亚诺却站了很久，一直站到冰块开始滴水，一直站到梅尔基亚德斯吹熄了灯。',
          '你始终没有上前。你只是看着。',
          '你忽然觉得，有些东西不需要你去触碰——它的存在本身就足够了。',
          '很多年后，当你在栗树下被绑住的时候，你会记得这个夜晚。你会记得你退后了一步。你会问自己：如果当时我没有退后，会不会不一样？',
          '你永远不会知道答案。但你会记住那个夜晚——记住奥雷里亚诺的影子被灯光拉得很长，记住冰块滴落的水声，记住你站在阴影里，什么都没有做。'
        ]
      },
      choices: null,
      nextScene: 'round5_settlement'
    },

    /* 第五轮 C 分支叙事 */
    round5_c_narrative: {
      id: 'round5_c_narrative',
      type: 'narrative',
      chapter: 1, round: 5,
      title: '举冰者',
      leftPage: {
        speaker: '旁白',
        speakerColor: '#4a2a18',
        paragraphs: [
          '你从人群中走出来，抓住冰块的边缘——它很重，冰得刺骨，但你把它举了起来。',
          '你把它举过头顶，让灯光穿过冰块，洒落在所有人的脸上。整个帐篷被蓝白色的光充满。孩子们在光芒中尖叫，女人们捂着嘴笑，男人们沉默地看着。',
          '乌尔苏拉站在人群之外，她没有笑。她看着你，眼睛里有一种你看不懂的东西——不是愤怒，不是悲伤，是某种比两者都更深刻的东西。',
          '你放下冰块，走到她面前："你怎么了？"',
          '"我没事，"她说，"我只是在想——等你死了，村里的人会怎么记得你。"',
          '"他们会怎么记得我？"',
          '"他们会说：那个人曾经举起过一块冰。"',
          '她转身走了。你站在原地，手里还残留着冰块的温度。那一刻你忽然明白——她说的不是真的。他们会记住的，不是你举起了冰——而是你把冰举起来的那一刻，她看见了你的脸，在光芒中，像一个不认识的人。'
        ]
      },
      choices: null,
      nextScene: 'round5_settlement'
    },

    /* 第五轮结算 */
    round5_settlement: {
      id: 'round5_settlement',
      type: 'settlement',
      chapter: 1, round: 5,
      title: '第五轮 · 结算',
      leftPage: {
        speaker: null,
        speakerColor: null,
        paragraphs: [
          '吉卜赛人走了。冰块融化了。马孔多的夜晚恢复了它本来的样子——闷热、安静、蟋蟀在墙缝里鸣叫。',
          '你坐在门槛上，手上还有冰水的痕迹。乌尔苏拉已经睡了。整个村子都睡了。只有你还醒着。',
          '你在想：如果时间可以像冰块一样被举起、被看到、被触摸——那该有多好。'
        ]
      },
      settlement: {
        summary: '最终轮选择完成。你与冰、与光、与永恒——在那一刻达成了某种不言说的和解。',
        nextScene: 'chapter1_end',
        nextLabel: '查看章末结算'
      }
    },

    /* ---- 章末结算 ---- */
    chapter1_end: {
      id: 'chapter1_end',
      type: 'settlement',
      chapter: 1, round: 6,
      title: '第一章 · 章末结算',
      leftPage: {
        speaker: null,
        speakerColor: null,
        paragraphs: [
          '你合上羊皮卷。梅尔基亚德斯坐在窗边，背对着你。他没有回头。',
          '"看够了吗？"他问。',
          '你没有回答。你还在想那块冰——你在想，它为什么那么冷，却又让你觉得温暖。',
          '"明天，"他说，"明天你会看到另一种冷——不是冰的冷，是遗忘的冷。"',
          '他翻了一页羊皮卷。"明天，失眠症会来。"'
        ]
      },
      settlement: {
        summary: '第一章完结。你在五轮选择中确定了与"疯狂"的关系——是拥抱它，还是与它搏斗。',
        isChapterEnd: true,
        nextLabel: '进入第二章 · 失眠症',
        quadrantNarratives: {
          guardian: '你选择在家庭与探索之间寻找平衡——乌尔苏拉在厨房等你，但你的眼睛还望着远山。',
          prophet: '你独自走向真理的方向——磁铁、放大镜、冰块，每一次都离家人更远。但你是谁？你是那个在密林里寻找黄金的人。',
          follower: '你选择了陪伴——在乌尔苏拉身边，在孩子们身边。你不是不理解命运的召唤，你只是选择了回答另一种召唤。',
          rebel: '你与一切搏斗——与磁铁、与放大镜、与乌尔苏拉的目光。你在撕扯中找到自己的形状。'
        },

        emotionalCost: '多年以后，当你站在栗树下——被绑在树干上，胡子拖到地面——你将会回想起这个下午。这个你第一次合上羊皮卷的下午。你不知道自己离那个栗树下的黄昏，还有多少步。'
      }
    }
  },
  /* 第一章记忆碎片 */
  memories: {
    '覆手': {
      id: '覆手', title: '覆手',
      description: '你和奥雷里亚诺一起按住冰块，他的手掌冰凉。多年后行刑队前，他会想起这一刻。',
      chapter: 1,
      unlockHint: '在第五章战争场景中，奥雷里亚诺上校在面对行刑队时会想起这块冰——你将获得一个额外的选择：用冰块般的冷静面对死亡'
    },
    '不是海的海': {
      id: '不是海的海', title: '不是海的海',
      description: '你看见的大海是灰白的、肮脏的、泡沫翻腾的——但它仍然是大海。你没有哭，你只是站着。',
      chapter: 1,
      unlockHint: '在第十章面对三千人屠杀时，你将回忆起这片海——它会给你一种旁人无法理解的平静'
    },
    '一只手': {
      id: '一只手', title: '一只手',
      description: '乌尔苏拉把手放在你肩上。那是她嫁给你的这些年里，第一次主动触碰你。',
      chapter: 1,
      unlockHint: '在第十二章乌尔苏拉临终时，这个触碰将成为一道额外的告别场景'
    },
    '泥土中的马孔多': {
      id: '泥土中的马孔多', title: '泥土中的马孔多',
      description: '你在坑底用黏土建造了一座城市。多年后飓风抹去马孔多时，只有你记得它原来的模样。',
      chapter: 1,
      unlockHint: '在终章飓风来临时，这座泥土中的城市将成为你最后的庇护所——解锁一段关于"记忆比现实更坚固"的叙事'
    },
    '一步之遥': {
      id: '一步之遥', title: '一步之遥',
      description: '你退后了一步。奥雷里亚诺的影子被灯光拉得很长，而你站在阴影里，什么都没有做。',
      chapter: 1
    },
    '蓝白色的光': {
      id: '蓝白色的光', title: '蓝白色的光',
      description: '你把冰块举过头顶，蓝白色的光洒在所有人的脸上。那一刻，乌尔苏拉看见了你的脸，像一个不认识的人。',
      chapter: 1
    }
  },
  /* 第一章家族成员 */
  familyMembers: [
    {
      name: '何塞·阿尔卡蒂奥·布恩迪亚',
      relation: '族长 · 当前附身',
      generation: 1,
      isCurrent: true,
      description: '马孔多的建立者。痴迷于炼金术、星盘和一切未知之物。正在用一头骡子和一对山羊换两块磁铁。'
    },
    {
      name: '乌尔苏拉·伊瓜兰',
      relation: '妻子',
      generation: 1,
      isCurrent: false,
      description: '何塞的妻子，家族的实际支柱。她总是等在家里，在桌上摆好碗筷。'
    },
    {
      name: '何塞·阿尔卡蒂奥',
      relation: '长子',
      generation: 2,
      isCurrent: false,
      description: '十四岁，石头一样沉默，身材壮得像一头小牛。不说话的时候，你就忘记了他的存在。'
    },
    {
      name: '奥雷里亚诺·布恩迪亚',
      relation: '次子',
      generation: 2,
      isCurrent: false,
      description: '六岁，瘦得像一根芦苇，眼睛里有一种奇怪的清澈。多年后将成为奥雷里亚诺上校。'
    },
    {
      name: '梅尔基亚德斯',
      relation: '吉卜赛智者',
      generation: 0,
      isCurrent: false,
      description: '吉卜赛人，带来磁铁、放大镜、望远镜和冰块。他知道一切，包括那些尚未发生的事情。'
    },
    {
      name: '庇拉尔·特尔内拉',
      relation: '纸牌占卜者',
      generation: 0,
      isCurrent: false,
      description: '吉卜赛女人，用旧纸牌看穿命运。她对奥雷里亚诺说："这个孩子……他会死很多次。"'
    }
  ]
});
