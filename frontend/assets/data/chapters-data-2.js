/* chapters-data-2.js — 第3-5章游戏数据 */

/* ================================================================
   第三章 · 丽贝卡——家族扩张
   ================================================================ */
registerChapter({
  id: 'chapter3', title: '第三章 · 丽贝卡——家族扩张',
  initialScene: 'ch3_opening', possessedCharacter: '奥雷里亚诺', chapterNumber: 3,
  preview: '<p>第四章 · 自动钢琴、皮埃特罗·克雷斯皮</p><p style="margin-top:8px;">你将附身于丽贝卡（或阿玛兰妲），</p><p>经历爱情如何在姐妹之间变成战争。</p>',
  nextLabel: '进入第四章 · 自动钢琴',
  scenes: {
    ch3_opening: { id:'ch3_opening', type:'narrative', chapter:3, round:0, title:'第三幕开启 · 敲门的人', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['门开了。你站在走廊的阴影里。她站在门外——赤着脚，抱着一个过于窄小的木箱，脚背上全是湿泥。她的眼睛很大，像两口干涸的井。','她说她叫丽贝卡。父亲侧身让她走进来。她经过时，所有人都闻到了那种气味——像从很远的地方飘来的风干肉的味道。','乌尔苏拉从厨房走出："让她进来。"这一句话改变了这个家。']}, choices:null, nextScene:'ch3_r1_choice' },

    ch3_r1_choice: { id:'ch3_r1_choice', type:'choice', chapter:3, round:1, title:'第一轮选择 · 收养与陌生', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['第二天早上，你在天井里看见了丽贝卡。她站在井边，手伸进口袋，摸出什么东西塞进嘴里。你走近——她嘴角有泥痕。', '"你在吃什么？"她吓了一跳。泥从指缝漏下来。"没有什么。"'], transition:'你选择——' }, choices:[
      { id:'ch3_r1_a', label:'保守她的秘密', description:'退后一步，假装什么都没看见。每个人都有权保留自己的秘密。', nextScene:'ch3_r1a', effects:{ tags:['沉默的守护者'], memory:null } },
      { id:'ch3_r1_b', label:'告诉乌尔苏拉', description:'乌尔苏拉知道怎么照顾人。让她来处理丽贝卡的吃泥问题。', nextScene:'ch3_r1b', effects:{ tags:['告密者'], memory:null } },
      { id:'ch3_r1_c', label:'给她一块面包', description:'从厨房拿一块面包，放在她手里。"泥不是食物。这个才是。"', nextScene:'ch3_r1c', effects:{ tags:['温柔的替代者'], memory:'面包与泥' } }
    ], settlement:'ch3_r1_settlement' },
    ch3_r1a: { id:'ch3_r1a', type:'narrative', chapter:3, round:1, title:'沉默的守护者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你退后了一步。但从那天起，你会在厨房里多留一块面包，放在她容易找到的地方。你从来没有问她是否吃了——只是看见盘子空了的时候，心里会暖一下。']}, choices:null, nextScene:'ch3_r1_settlement' },
    ch3_r1b: { id:'ch3_r1b', type:'narrative', chapter:3, round:1, title:'告密者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你告诉了乌尔苏拉。她没有责备丽贝卡——只是煮了一锅草药汤，加了糖，端到丽贝卡面前。"喝这个——比泥好吃。"丽贝卡端起碗，一口气喝完了。']}, choices:null, nextScene:'ch3_r1_settlement' },
    ch3_r1c: { id:'ch3_r1c', type:'narrative', chapter:3, round:1, title:'温柔的替代者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你从厨房拿了一块面包，放在她手里。"泥不是食物。这个才是。"她低下头，看着面包很久。然后咬了一口——咬得很小，像在试探。但她咽下去了。']}, choices:null, nextScene:'ch3_r1_settlement' },
    ch3_r1_settlement: { id:'ch3_r1_settlement', type:'settlement', chapter:3, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['丽贝卡开始慢慢习惯这个家。她不再只是角落里的影子——但她的骨灰盒还在床底下，而她的手指，偶尔还会在半夜伸向墙角的泥土。']}, settlement:{ summary:'第一轮选择完成。你选择了如何面对丽贝卡的秘密。', nextScene:'ch3_r2_choice', nextLabel:'进入第二轮' } },

    ch3_r2_choice: { id:'ch3_r2_choice', type:'choice', chapter:3, round:2, title:'第二轮选择 · 失眠症的第二次侵袭', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['失眠症又回来了。你已经三天没有合眼了。闭上眼睛的时候，脑子里就开始播放回忆的碎片。','村民们开始在墙上写下越来越多的标签。乌尔苏拉说："再这样下去，我们会在醒来的时候忘记自己是谁。"'], transition:'你选择——' }, choices:[
      { id:'ch3_r2_a', label:'发明绳结记事', description:'用绳子打结来代表每天发生的事。每个结都是一段记忆——看得见，摸得着。', nextScene:'ch3_r2a', effects:{ tags:['记忆发明家'], memory:'绳结记事' } },
      { id:'ch3_r2_b', label:'让丽贝卡做你的记忆', description:'她从不忘记任何东西——也许她的病是一种天赋。让她成为你的记忆。', nextScene:'ch3_r2b', effects:{ tags:['寄托者'], memory:null } },
      { id:'ch3_r2_c', label:'写下一切', description:'在纸上写下所有记得的事——然后藏进箱子里，埋在栗树下。', nextScene:'ch3_r2c', effects:{ tags:['记录者'], memory:'箱底的纸卷' } }
    ], settlement:'ch3_r2_settlement' },
    ch3_r2a: { id:'ch3_r2a', type:'narrative', chapter:3, round:2, title:'记忆发明家', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你找来一根长绳。每天在上面打一个结——结的形状不同，代表不同的事。第一个结是丽贝卡来的那天——你打了个很紧的结。','后来绳子不够用了。你的手指开始在各个角落都绑上绳子。乌尔苏拉说这房子迟早会被你的绳子捆起来。"那它就不会散架了。"你说。']}, choices:null, nextScene:'ch3_r2_settlement' },
    ch3_r2b: { id:'ch3_r2b', type:'narrative', chapter:3, round:2, title:'寄托者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你去找丽贝卡。"你能记住我吗？如果有一天我忘了我是谁——你能告诉我吗？"她看了你很久。然后她从床底下拿出骨灰盒——里面有一页纸，写着父母坟墓的位置。她从不忘记任何东西。"这是我的诅咒。""那就做我的记忆吧。"']}, choices:null, nextScene:'ch3_r2_settlement' },
    ch3_r2c: { id:'ch3_r2c', type:'narrative', chapter:3, round:2, title:'记录者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你拿出纸和笔，写下你的名字、父母的名字、哥哥的名字——你写了记得的每一件事。写满了很多页纸，卷起来塞进铁箱子，埋在栗树下。"如果有一天我忘了我自己——我会挖出这个箱子，重新变成我。"']}, choices:null, nextScene:'ch3_r2_settlement' },
    ch3_r2_settlement: { id:'ch3_r2_settlement', type:'settlement', chapter:3, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['失眠症继续在村里蔓延——但它不再可怕。因为人们找到了各自的记忆方法。遗忘仍然会来——但人们不再等死。']}, settlement:{ summary:'第二轮选择完成。你创造了对抗遗忘的方法。', nextScene:'ch3_r3_choice', nextLabel:'进入第三轮' } },

    ch3_r3_choice: { id:'ch3_r3_choice', type:'choice', chapter:3, round:3, title:'第三轮选择 · 家宅扩建', leftPage:{ speaker:'乌尔苏拉', speakerColor:'#a52020', paragraphs:['乌尔苏拉站在院子里，双手叉腰——这所房子太小了。"我们要扩建。"她从床底下取出积攒多年的金币。','"他一直以为我在存钱防老——但我在存钱等这一天。"'], transition:'你选择——' }, choices:[
      { id:'ch3_r3_a', label:'帮她一起扩建', description:'拿起锤子和锯子，和乌尔苏拉一起建一座能装下所有人的大宅。', nextScene:'ch3_r3a', effects:{ tags:['建设者'], memory:null } },
      { id:'ch3_r3_b', label:'建一间秘密实验室', description:'在扩建计划中加入一间只有你知道的暗室——炼金术需要一个安静的地方。', nextScene:'ch3_r3b', effects:{ tags:['隐秘建设者'], memory:'暗室之门' } },
      { id:'ch3_r3_c', label:'反对扩建——够住就好', description:'房子已经够大了。与其扩建，不如把多余的房间分给村里没房子的人。', nextScene:'ch3_r3c', effects:{ tags:['朴素者'], memory:null,} }
    ], settlement:'ch3_r3_settlement' },
    ch3_r3a: { id:'ch3_r3a', type:'narrative', chapter:3, round:3, title:'建设者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你拿起锤子和锯子。你们干了整整一年。房子从二十间扩到四十间——白色的墙壁在阳光下像盐一样耀眼。乌尔苏拉站在新落成的走廊里："这房子够住一百年了。"']}, choices:null, nextScene:'ch3_r3_settlement' },
    ch3_r3b: { id:'ch3_r3b', type:'narrative', chapter:3, round:3, title:'隐秘建设者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你在图纸上加了一个夹层——暗室的门覆盖着书架。你把炼金器皿搬了进去，在墙上画了星图。乌尔苏拉发现时已经晚了："至少这个洞里住的不是老鼠。"但她的嘴角动了一下——她笑了。']}, choices:null, nextScene:'ch3_r3_settlement' },
    ch3_r3c: { id:'ch3_r3c', type:'narrative', chapter:3, round:3, title:'朴素者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你反对扩建。你觉得房子已经够大了。"房间越多，遗忘越多。"乌尔苏拉沉默了。然后她放下图纸："也许你说得对。但我们至少要建一间给丽贝卡。她需要一扇能关上的门。"你们最终扩建了三间。']}, choices:null, nextScene:'ch3_r3_settlement' },
    ch3_r3_settlement: { id:'ch3_r3_settlement', type:'settlement', chapter:3, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['房子扩建好了。白色的墙壁，长长的走廊。家变大了——但不知怎么，人们之间的距离也变大了。一个更大的家意味着更多的角落，更多的角落意味着更多可以独自待着的地方。']}, settlement:{ summary:'第三轮选择完成。房子变大了——但家是什么？', nextScene:'ch3_r4_choice', nextLabel:'进入第四轮' } },

    ch3_r4_choice: { id:'ch3_r4_choice', type:'choice', chapter:3, round:4, title:'第四轮选择 · 镇长的到来', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['阿波利纳尔·摩斯科特来了——政府派来的镇长。他带来了法令、文件和一面旗帜。"从今天开始，马孔多是政府管辖的镇子。"','何塞·阿尔卡蒂奥·布恩迪亚站在镇公所门口，双手握成拳头。你不确定他是在压制愤怒——还是在压制想要把那面旗子撕下来的冲动。'], transition:'你选择——' }, choices:[
      { id:'ch3_r4_a', label:'支持父亲——抵抗政府', description:'马孔多是你们建的——不是政府的。站在父亲身边。', nextScene:'ch3_r4a', effects:{ tags:['抵抗者'], memory:null } },
      { id:'ch3_r4_b', label:'调解——找到妥协', description:'父亲和镇长各有道理。做一个中间人——让马孔多保留自由但接受秩序。', nextScene:'ch3_r4b', effects:{ tags:['调解人'], memory:null } },
      { id:'ch3_r4_c', label:'支持镇长——拥抱秩序', description:'政府带来秩序、学校和医院。站在镇长一边——即使与父亲对立。', nextScene:'ch3_r4c', effects:{ tags:['秩序拥护者'], memory:'父与子的裂痕',} }
    ], settlement:'ch3_r4_settlement' },
    ch3_r4a: { id:'ch3_r4a', type:'narrative', chapter:3, round:4, title:'抵抗者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你站到父亲身边。"马孔多不需要一面旗子——它需要的是水渠和一间学校。"镇长沉默了。他没有取下旗子——但以后他的命令在马孔多执行起来总是慢半拍。']}, choices:null, nextScene:'ch3_r4_settlement' },
    ch3_r4b: { id:'ch3_r4b', type:'narrative', chapter:3, round:4, title:'调解人', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你走到两人之间。"马孔多可以接受镇长——但条件是：每条法令都要经过村民投票。我们不是殖民地——我们是合伙人。"镇长伸出手——你父亲没有握，但也没有再挡在门口。']}, choices:null, nextScene:'ch3_r4_settlement' },
    ch3_r4c: { id:'ch3_r4c', type:'narrative', chapter:3, round:4, title:'秩序拥护者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你站在镇长一边。父亲看着你——看了很久，然后转身走进屋里，关上实验室的门。那天晚上他没有出来吃饭。你父亲三天没有和你说话。']}, choices:null, nextScene:'ch3_r4_settlement' },
    ch3_r4_settlement: { id:'ch3_r4_settlement', type:'settlement', chapter:3, round:4, title:'第四轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['镇长留下来了。马孔多的第一面国旗在镇公所门前飘了起来——但真正做决定的人，仍然是栗树下的那个男人和他的妻子。']}, settlement:{ summary:'第四轮选择完成。马孔多第一次面对外部权力——你选择了自己的立场。', nextScene:'ch3_r5_choice', nextLabel:'进入最终轮' } },

    ch3_r5_choice: { id:'ch3_r5_choice', type:'choice', chapter:3, round:5, title:'第五轮选择 · 家族的未来', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['布恩迪亚家现在有了六个成员，一所大房子，一个被绑在栗树下的老族长。你开始感到一种奇怪的不安——家太大了，人太多了。每个角落都有人在发生你不知道的事。','你忽然想起梅尔基亚德斯说过的话："人最多的时候，往往最孤独。"'], transition:'你选择——' }, choices:[
      { id:'ch3_r5_a', label:'专注于炼金术', description:'退回到实验室里，关上那扇门。让外面的人自己处理外面的事。', nextScene:'ch3_r5a', effects:{ tags:['孤独的炼金术士'], memory:null } },
      { id:'ch3_r5_b', label:'承担家族责任', description:'你是布恩迪亚——这个家需要一个清醒的人来看着它。放下炼金术。', nextScene:'ch3_r5b', effects:{ tags:['家族支柱'], memory:null } },
      { id:'ch3_r5_c', label:'离开——去看世界', description:'马孔多太小了。去看看真正的大海——不是灰白的脏水，是真正蔚蓝的海洋。', nextScene:'ch3_r5c', effects:{ tags:['出走者'], memory:'未完成的地图',} }
    ], settlement:'ch3_r5_settlement' },
    ch3_r5a: { id:'ch3_r5a', type:'narrative', chapter:3, round:5, title:'孤独的炼金术士', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你退回了实验室。关上门——外面的一切都被隔开了。乌尔苏拉偶尔敲门，送一碗热汤。你造了金鱼——一条又一条。但金鱼永远不会回应你。']}, choices:null, nextScene:'ch3_r5_settlement' },
    ch3_r5b: { id:'ch3_r5b', type:'narrative', chapter:3, round:5, title:'家族支柱', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你放下坩埚，走到院子里。"我来帮你。"你说。那天下午，你修好了走廊上所有松动的栏杆，给丽贝卡的房间装了新窗户，把父亲的实验室打扫了一遍。乌尔苏拉站在走廊尽头——你看见她擦了擦眼睛。']}, choices:null, nextScene:'ch3_r5_settlement' },
    ch3_r5c: { id:'ch3_r5c', type:'narrative', chapter:3, round:5, title:'出走者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你决定离开。画了一张世界地图——但你只知道马孔多和河对岸的沼泽。你把地图折好，放进口袋。你走了两天——然后回来了。不是因为害怕——是因为你发现：不管走多远，你都会在每一个黄昏想起那棵栗树。']}, choices:null, nextScene:'ch3_r5_settlement' },
    ch3_r5_settlement: { id:'ch3_r5_settlement', type:'settlement', chapter:3, round:5, title:'第五轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['布恩迪亚家大宅落成了。白色的墙，长长的走廊，四十多扇门。乌尔苏拉站在院子里——她老了，但她的眼睛还是年轻的。她知道这所房子会一直站着——哪怕里面的人来了又走。']}, settlement:{ summary:'最终轮选择完成。家族在扩张，而你找到了——或失去了——自己的位置。', nextScene:'chapter3_end', nextLabel:'查看章末结算' } },
    chapter3_end: { id:'chapter3_end', type:'settlement', chapter:3, round:6, title:'第三章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第三章完结。布恩迪亚家从四口变成了大家族。房子变大了——但每个人都在用自己的方式独自应对着孤独。','梅尔基亚德斯翻开下一页："明天，钢琴会响。它会把两个人拉近——也会把两个人推得更远。"']}, settlement:{ summary:'第三章完结。家族扩张了——墙变多了，距离变远了。', isChapterEnd:true, nextLabel:'进入第四章 · 自动钢琴' } }
  },
  memories: {
    '面包与泥': { id:'面包与泥', title:'面包与泥', description:'你把面包放在丽贝卡手里。"泥不是食物。这个才是。"她咬了一口——像在试探。', chapter:3 },
    '绳结记事': { id:'绳结记事', title:'绳结记事', description:'你用绳子打结来记录每一天。后来绳子不够用了——事情太多了。', chapter:3 },
    '暗室之门': { id:'暗室之门', title:'暗室之门', description:'你在新宅里建了一间暗室。乌尔苏拉说："至少这个洞里住的不是老鼠。"', chapter:3 },
    '父与子的裂痕': { id:'父与子的裂痕', title:'父与子的裂痕', description:'你站在镇长一边。父亲三天没有和你说话。', chapter:3 },
    '未完成的地图': { id:'未完成的地图', title:'未完成的地图', description:'你画了世界地图——但只知道马孔多和河对岸。你走了两天，然后回来了。', chapter:3 },
    '箱底的纸卷': { id:'箱底的纸卷', title:'箱底的纸卷', description:'你写下所有记得的事，埋在栗树下——如果忘了，就挖出来重新变成自己。', chapter:3 }
  },
  familyMembers: [
    { name:'阿波利纳尔·摩斯科特', relation:'马孔多第一任镇长', generation:0, isCurrent:false, description:'政府派来的镇长。他的女儿后来成为奥雷里亚诺的妻子。' }
  ]
});

/* ================================================================
   第四章 · 自动钢琴、皮埃特罗·克雷斯皮
   ================================================================ */
registerChapter({
  id: 'chapter4', title: '第四章 · 自动钢琴、皮埃特罗·克雷斯皮',
  initialScene: 'ch4_opening', possessedCharacter: '丽贝卡', chapterNumber: 4,
  preview: '<p>第五章 · 蕾梅黛丝与初战</p><p style="margin-top:8px;">你将附身于奥雷里亚诺上校，</p><p>在爱情的死亡与战争的诞生之间做出抉择。</p>',
  nextLabel: '进入第五章 · 蕾梅黛丝与初战',
  scenes: {
    ch4_opening: { id:'ch4_opening', type:'narrative', chapter:4, round:0, title:'第四幕开启 · 钢琴响起', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['那个音符不是被手弹出来的——是一枚硬币落进槽口，齿轮转动，铜制音筒开始旋转。第一声和弦从客厅传来。','自动钢琴在马孔多第一次奏响。皮埃特罗·克雷斯皮半夜用一枚硬币试了琴。他以为没人听见——但全家人都听见了。','这首曲子在你脑海里没有名字，它只有温度——从脚下的地板沿脚踝、膝盖升起，涌入胸腔，涌入眼眶。你不记得怎么走到客厅的——他站在钢琴旁，没有看见你。但阿玛兰妲看见了。']}, choices:null, nextScene:'ch4_r1_choice' },

    ch4_r1_choice: { id:'ch4_r1_choice', type:'choice', chapter:4, round:1, title:'第一轮选择 · 爱情的种子', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['皮埃特罗·克雷斯皮——意大利钢琴师，优雅得像一尊希腊雕像。他讲话的声音很轻，像在每句话上裹了一层天鹅绒。','丽贝卡爱上他了。阿玛兰妲也爱上他了。她们还不知道对方心里的事——但你知道。你站在走廊阴影里，看着两个女孩的心在同一天晚上裂成不同形状。'], transition:'你选择——' }, choices:[
      { id:'ch4_r1_a', label:'帮助丽贝卡表达爱意', description:'丽贝卡太安静了——她需要有人帮她开口。教她写信，接近他。', nextScene:'ch4_r1a', effects:{ tags:['爱的推手'], memory:null } },
      { id:'ch4_r1_b', label:'帮助阿玛兰妲', description:'阿玛兰妲更有勇气——但她需要有人告诉她：爱情不是占有。', nextScene:'ch4_r1b', effects:{ tags:['爱的导师'], memory:null } },
      { id:'ch4_r1_c', label:'不介入——让她们自己解决', description:'这不是你的事。两个女人爱上同一个人——谁也帮不上忙。', nextScene:'ch4_r1c', effects:{ tags:['旁观者'], memory:'走廊的阴影' } }
    ], settlement:'ch4_r1_settlement' },
    ch4_r1a: { id:'ch4_r1a', type:'narrative', chapter:4, round:1, title:'爱的推手', leftPage:{ speaker:'丽贝卡', speakerColor:'#a52020', paragraphs:['你坐到丽贝卡身边，把纸笔放在她面前。"写——把你心里想的写下来。"她写了两个字："钢琴。"然后停住了——哭了。不是因为难过——是因为她第一次把"钢琴"和另一件东西联系在了一起：爱。']}, choices:null, nextScene:'ch4_r1_settlement' },
    ch4_r1b: { id:'ch4_r1b', type:'narrative', chapter:4, round:1, title:'爱的导师', leftPage:{ speaker:'阿玛兰妲', speakerColor:'#a52020', paragraphs:['你找到阿玛兰妲。她在院子里缝一条蕾丝边——钢琴师的衬衫。"你确定你要缝的是衬衫——而不是你的心？"她停下针，眼睛里有火——不是热情，是愤怒。"为什么你也觉得我爱他？"但那件衬衫上，她缝了整整一个月的花。']}, choices:null, nextScene:'ch4_r1_settlement' },
    ch4_r1c: { id:'ch4_r1c', type:'narrative', chapter:4, round:1, title:'旁观者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你退回走廊阴影里。两个女孩在各自房间辗转反侧——一个写信（写了又撕），一个缝衬衫（每朵花都扎得格外用力）。你什么都没做。很多年后你会问：如果当时帮了其中一个——另一个人会不会不一样？你永远不知道答案。']}, choices:null, nextScene:'ch4_r1_settlement' },
    ch4_r1_settlement: { id:'ch4_r1_settlement', type:'settlement', chapter:4, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['钢琴每天夜里都会响起。皮埃特罗不知道——他在客厅弹莫扎特的时候，楼上两颗心在不同的节奏里跳动着。爱情还没说出口——但它已经在空气里了。']}, settlement:{ summary:'第一轮完成。两颗心开始为同一个人跳动。', nextScene:'ch4_r2_choice', nextLabel:'进入第二轮' } },

    ch4_r2_choice: { id:'ch4_r2_choice', type:'choice', chapter:4, round:2, title:'第二轮选择 · 嫉妒的毒药', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['皮埃特罗选择了丽贝卡。不是因为更爱她——是丽贝卡的信更安静。阿玛兰妲在他衬衫上缝了太多花——他怕那些花会把他困住。','阿玛兰妲在房间里待了三天。她坐在窗边，用针扎着手指——每下都不深，但每下都见血。"我会让这个婚礼永远办不成。"她说。她没有说谎。'], transition:'你选择——' }, choices:[
      { id:'ch4_r2_a', label:'警告丽贝卡', description:'告诉丽贝卡——阿玛兰妲不会善罢甘休。让她做好准备保护自己的爱情。', nextScene:'ch4_r2a', effects:{ tags:['保护者'], memory:null } },
      { id:'ch4_r2_b', label:'找阿玛兰妲谈话', description:'在嫉妒毁掉一切之前，坐下来和她谈谈——也许她只需要被人听见。', nextScene:'ch4_r2b', effects:{ tags:['劝解者'], memory:null } },
      { id:'ch4_r2_c', label:'静观其变', description:'你不是神——不能替每个人做决定。让她们自己选择，让后果自己到来。', nextScene:'ch4_r2c', effects:{ tags:['命运观察者'], memory:null } }
    ], settlement:'ch4_r2_settlement' },
    ch4_r2a: { id:'ch4_r2a', type:'narrative', chapter:4, round:2, title:'保护者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你敲开丽贝卡的房门告诉她。她沉默很久："我知道。从第一天就知道——每次我走近他，她的眼睛变成两把剪刀。""那你为什么不怕？""我从来没拥有过任何东西——如果连他都被剪走，我只是回到从前。习惯了。"你忽然觉得丽贝卡比阿玛兰妲更危险——不害怕失去的人什么都敢做。']}, choices:null, nextScene:'ch4_r2_settlement' },
    ch4_r2b: { id:'ch4_r2b', type:'narrative', chapter:4, round:2, title:'劝解者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你在阿玛兰妲房门外站了很久，然后推门进去。她坐在黑暗中，借着月光缝一件黑色裹尸布。"你在缝什么？""我在缝我的未来。"','你坐在她身边。过了很久，她把针放下："不是因为他。是因为——我从来都是第二名。乌尔苏拉最爱何塞·阿尔卡蒂奥，父亲只记得奥雷里亚诺。丽贝卡一来就占了他的目光。我只是想赢一次。"']}, choices:null, nextScene:'ch4_r2_settlement' },
    ch4_r2c: { id:'ch4_r2c', type:'narrative', chapter:4, round:2, title:'命运观察者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你什么都没做。坐在走廊椅子上，听着钢琴声从客厅传来——一遍又一遍。皮埃特罗在弹同一首曲子。他不知道楼上两个女人正以不同方式等待他——一个等敲门，一个等他离开。你忽然明白：爱情最残酷的不是被拒绝——是被另一个人同时以你理解的方式爱着。']}, choices:null, nextScene:'ch4_r2_settlement' },
    ch4_r2_settlement: { id:'ch4_r2_settlement', type:'settlement', chapter:4, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['钢琴声停了。皮埃特罗把最后一枚硬币取出来，合上琴盖。他不知道——今晚之后，这架钢琴会沉默很久。因为有两个女人在为一个音符编织不同含义——只有一个能被弹出来。']}, settlement:{ summary:'第二轮完成。嫉妒的种子已发芽。', nextScene:'ch4_r3_choice', nextLabel:'进入第三轮' } },

    ch4_r3_choice: { id:'ch4_r3_choice', type:'choice', chapter:4, round:3, title:'第三轮选择 · 婚礼与毒药', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['婚礼日。丽贝卡试婚纱时手抖得厉害——不是因为紧张，是因为看见了桌上那杯咖啡。阿玛兰妲端来的。"喝吧——热的。"阿玛兰妲笑着说。','丽贝卡举起杯子——乌尔苏拉从厨房冲出来，打翻了咖啡。热气颜色不对，带着甜腥味，像碾碎的花籽。阿玛兰妲转身走了。乌尔苏拉在她房门外站了很久——没敲门，也没离开。'], transition:'你选择——' }, choices:[
      { id:'ch4_r3_a', label:'与乌尔苏拉一起保护丽贝卡', description:'阿玛兰妲需要被制止。帮助乌尔苏拉确保婚礼安全进行。', nextScene:'ch4_r3a', effects:{ tags:['家族守护者'], memory:null } },
      { id:'ch4_r3_b', label:'私下警告阿玛兰妲', description:'不惊动乌尔苏拉——自己找阿玛兰妲谈。你是唯一能让她停下来的人。', nextScene:'ch4_r3b', effects:{ tags:['私密的劝诫者'], memory:null } },
      { id:'ch4_r3_c', label:'让婚礼取消', description:'也许这场婚姻本就不该发生。说服皮埃特罗离开马孔多。', nextScene:'ch4_r3c', effects:{ tags:['破坏者'], memory:'破碎的婚约',} }
    ], settlement:'ch4_r3_settlement' },
    ch4_r3a: { id:'ch4_r3a', type:'narrative', chapter:4, round:3, title:'家族守护者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你和乌尔苏拉一起盯着阿玛兰妲的房门。第二天乌尔苏拉走进她房间——没人知道说了什么，但阿玛兰妲出来时眼睛是红的。婚礼如期举行。钢琴重新响起。阿玛兰妲没有参加——她坐在房间里，继续缝那件黑色裹尸布。']}, choices:null, nextScene:'ch4_r3_settlement' },
    ch4_r3b: { id:'ch4_r3b', type:'narrative', chapter:4, round:3, title:'私密的劝诫者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你推开阿玛兰妲的房门。她站在窗前，握着一个小药瓶。"放下。"你没有回头。"你知道我会恨你一辈子吗？""知道。但我更不希望你恨自己一辈子。"她把药瓶扔出窗外——落在栗树下，碎了。里面只有干涸的花籽。她跪在地上，双手捂住脸。你只是站在那里，让她哭。']}, choices:null, nextScene:'ch4_r3_settlement' },
    ch4_r3c: { id:'ch4_r3c', type:'narrative', chapter:4, round:3, title:'破坏者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你找到皮埃特罗，告诉他一切——阿玛兰妲的威胁，丽贝卡的恐惧，那杯毒咖啡。"你不该被卷进这个家。"他沉默了很久，合上琴盖："你说得对。"他离开了马孔多。两个月后丽贝卡听说他回到了意大利。她站在天井里，看着再也不会响的钢琴，没有哭——但她把骨灰盒放在钢琴凳上，让它代替那个永远不会来的人的位子。']}, choices:null, nextScene:'ch4_r3_settlement' },
    ch4_r3_settlement: { id:'ch4_r3_settlement', type:'settlement', chapter:4, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['婚礼的钟声——或沉默——在马孔多上空回荡。钢琴在客厅静静等待。有些旋律永远不会被弹出来——不是不美，是在弹响之前，弹琴的人就离开了。']}, settlement:{ summary:'第三轮完成。你决定了婚礼的结局。', nextScene:'ch4_r4_choice', nextLabel:'进入第四轮' } },

    ch4_r4_choice: { id:'ch4_r4_choice', type:'choice', chapter:4, round:4, title:'第四轮选择 · 归来的巨人', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['一个巨人走进院子。肩膀几乎撑破门框——阳光从他背后照过来，影子投在整个天井里。何塞·阿尔卡蒂奥——那个十四岁跟吉卜赛人走了的孩子，走了十几年，现在回来了。','他看着丽贝卡。丽贝卡看着他。两人之间发生了一件事——不是目光交汇，是更深的东西。像两块磁铁在同一个空间找到彼此。乌尔苏拉手里的勺子掉在地上。'], transition:'你选择——' }, choices:[
      { id:'ch4_r4_a', label:'祝福他们', description:'丽贝卡找到归宿，何塞·阿尔卡蒂奥找到回家的理由。他们属于彼此。', nextScene:'ch4_r4a', effects:{ tags:['祝福者'], memory:null } },
      { id:'ch4_r4_b', label:'反对——这是乱伦', description:'虽非亲兄妹——但太近了。这个结合会给家族带来诅咒。', nextScene:'ch4_r4b', effects:{ tags:['道德守卫者'], memory:null } },
      { id:'ch4_r4_c', label:'沉默见证', description:'何塞·阿尔卡蒂奥从不需要许可，丽贝卡从不请求。让命运自己运行。', nextScene:'ch4_r4c', effects:{ tags:['沉默的见证人'], memory:null } }
    ], settlement:'ch4_r4_settlement' },
    ch4_r4a: { id:'ch4_r4a', type:'narrative', chapter:4, round:4, title:'祝福者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你站在天井里，看着他们并肩走过走廊——他的脚步沉重如地震，她的轻微如赤脚。"你是我这辈子第一个没有要求我停下来的人。"他说。她伸手碰了碰他的手。那天晚上钢琴响了——他用巨大的手指在上面按了一个音符。只有一个。但它比皮埃特罗一辈子弹过的所有曲子都更响。']}, choices:null, nextScene:'ch4_r4_settlement' },
    ch4_r4b: { id:'ch4_r4b', type:'narrative', chapter:4, round:4, title:'道德守卫者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你挡在两人之间。告诉他们这个结合是错误的。"你和我父亲一样——觉得这世界上有对错。"何塞·阿尔卡蒂奥跨过你的阻拦，牵起丽贝卡的手，走出院子。乌尔苏拉说："这家里从来就没有人能阻止一个布恩迪亚。"']}, choices:null, nextScene:'ch4_r4_settlement' },
    ch4_r4c: { id:'ch4_r4c', type:'narrative', chapter:4, round:4, title:'沉默的见证人', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你什么都没说。站在走廊阴影里——和往常一样——看着何塞·阿尔卡蒂奥把丽贝卡从这所房子里带走。他步伐太大，她跟不上；她步子太轻，他听不见。但谁也没有停下来。那天晚上钢琴自己响了——也许是风，也许是老鼠，也许是铜制音筒在热胀冷缩中释放了皮埃特罗留下的未完成音符。你觉得那是一声叹息。']}, choices:null, nextScene:'ch4_r4_settlement' },
    ch4_r4_settlement: { id:'ch4_r4_settlement', type:'settlement', chapter:4, round:4, title:'第四轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['何塞·阿尔卡蒂奥和丽贝卡搬了出去，在村子另一头建了自己的房子。丽贝卡把骨灰换成真正的泥土——她不再需要它了。何塞·阿尔卡蒂奥在门口种了棕榈树——长得太快了，仿佛连植物都知道他身上有一种不可阻挡的生长之力。']}, settlement:{ summary:'第四轮完成。爱以你意想不到的方式找到了自己的路。', nextScene:'ch4_r5_choice', nextLabel:'进入最终轮' } },

    ch4_r5_choice: { id:'ch4_r5_choice', type:'choice', chapter:4, round:5, title:'第五轮选择 · 钢琴的最后旋律', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['自动钢琴不再响了。没有人投币——皮埃特罗走了，丽贝卡走了，阿玛兰妲也不再缝花了。钢琴在客厅角落积灰，像一个装满了未出生音符的棺材。','乌尔苏拉站在钢琴前——不会弹琴，但用手掌擦了擦琴盖。她没有喜欢过皮埃特罗，也没有恨过他。她只是觉得：每段爱在马孔多都是被消耗殆尽后才准离开的。但钢琴还在——等一枚永远不会再来的硬币。'], transition:'你选择——' }, choices:[
      { id:'ch4_r5_a', label:'弹最后一支曲', description:'坐到钢琴前——不会弹，但按下一个键。一个音符。一声告别。', nextScene:'ch4_r5a', effects:{ tags:['送别者'], memory:'最后的音符' } },
      { id:'ch4_r5_b', label:'把钢琴送给教堂', description:'这架钢琴不该在这里积灰。让它去教堂——让更多人听到它的声音。', nextScene:'ch4_r5b', effects:{ tags:['给予者'], memory:null } },
      { id:'ch4_r5_c', label:'保持沉默', description:'有些沉默不该被打破。让钢琴继续积灰——在沉默中讲述自己的故事。', nextScene:'ch4_r5c', effects:{ tags:['沉默的守护者'], memory:'尘封的琴弦' } }
    ], settlement:'ch4_r5_settlement' },
    ch4_r5a: { id:'ch4_r5a', type:'narrative', chapter:4, round:5, title:'送别者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你坐到钢琴前——不会弹。但把手指放在一个键上，按了下去。一个音符——孤零零的，像水滴落在干涸河床上。但它是你的。是马孔多的。是给丽贝卡的，给阿玛兰妲的，给皮埃特罗的，给何塞·阿尔卡蒂奥的——给所有在这所房子里爱过的人。你合上琴盖，把槽口里的硬币取出来，放进口袋。']}, choices:null, nextScene:'ch4_r5_settlement' },
    ch4_r5b: { id:'ch4_r5b', type:'narrative', chapter:4, round:5, title:'给予者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['钢琴搬到了小教堂。神父不会弹——但每天早上，一个从圣马尔塔来的女孩用一只手指敲出儿歌旋律。孩子们围在旁边拍手。他们没听过莫扎特——但在创造新的声音：不重复皮埃特罗、不重复丽贝卡、只属于他们自己的声音。你站在教堂门口，听了很久。']}, choices:null, nextScene:'ch4_r5_settlement' },
    ch4_r5c: { id:'ch4_r5c', type:'narrative', chapter:4, round:5, title:'沉默的守护者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你没有碰那架钢琴。让它留在客厅角落——积灰，积记忆，积沉默。很多年后，当大雨把马孔多泡成沼泽，自动钢琴仍然站在那里——音筒长了绿霉，但它没有倒下。像这个家族一样——被遗忘，被弃置，被时间侵蚀——但仍然站在这里，等着永远不会回来的人。']}, choices:null, nextScene:'ch4_r5_settlement' },
    ch4_r5_settlement: { id:'ch4_r5_settlement', type:'settlement', chapter:4, round:5, title:'第五轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['钢琴沉默了。爱情在马孔多这个季节走过了它的第一轮循环——初遇、热恋、嫉妒、分离、沉默。所有旋律都有开始和结束——这架自动钢琴经历了一段完整的人生。']}, settlement:{ summary:'最终轮完成。钢琴的旋律结束了——但余音会在走廊里回荡很多年。', nextScene:'chapter4_end', nextLabel:'查看章末结算' } },
    chapter4_end: { id:'chapter4_end', type:'settlement', chapter:4, round:6, title:'第四章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第四章完结。钢琴的余音仍在这个家回荡——但下一个故事已经开始成形。在街对面的房子里，一个九岁女孩正在吃糖苹果。她不知道——窗外有一个人正在以你也许能猜到的方式看着她。他叫奥雷里亚诺。']}, settlement:{ summary:'第四章完结。爱以不同的旋律奏完了一遍——接下来是战争的鼓声。', isChapterEnd:true, nextLabel:'进入第五章 · 蕾梅黛丝与初战' } }
  },
  memories: {
    '走廊的阴影': { id:'走廊的阴影', title:'走廊的阴影', description:'你站在走廊阴影里，看着两颗心为同一个人跳动。你什么都没有做。', chapter:4 },
    '破碎的婚约': { id:'破碎的婚约', title:'破碎的婚约', description:'你说服皮埃特罗离开马孔多。钢琴从此沉默——但丽贝卡没有哭。', chapter:4 },
    '最后的音符': { id:'最后的音符', title:'最后的音符', description:'你按下了自动钢琴的最后一个键——一个音符，像水滴落在干涸河床上。', chapter:4 },
    '尘封的琴弦': { id:'尘封的琴弦', title:'尘封的琴弦', description:'你让钢琴留在客厅积灰。它没有倒下——像这个家族一样等待。', chapter:4 }
  },
  familyMembers: [
    { name:'皮埃特罗·克雷斯皮', relation:'意大利钢琴师', generation:0, isCurrent:false, description:'优雅的意大利钢琴师，带来自动钢琴。丽贝卡和阿玛兰妲同时爱上了他。' },
    { name:'阿玛兰妲', relation:'女儿', generation:2, isCurrent:false, description:'何塞·阿尔卡蒂奥和乌尔苏拉的女儿。学会嫉妒——一生都不会再学会别的。' }
  ]
});

/* ================================================================
   第五章 · 蕾梅黛丝与初战
   ================================================================ */
registerChapter({
  id: 'chapter5', title: '第五章 · 蕾梅黛丝与初战',
  initialScene: 'ch5_opening', possessedCharacter: '奥雷里亚诺·布恩迪亚上校', chapterNumber: 5,
  preview: '<p>第六章 · 第一次战争、阿尔卡蒂奥暴政</p><p style="margin-top:8px;">你将附身于奥雷里亚诺上校/阿尔卡蒂奥，</p><p>确定自己与"权力"的关系。</p>',
  nextLabel: '进入第六章 · 第一次战争',
  moods: {
    'ch5_opening': '熔金的手指停在半空 —— 窗外那个举着糖苹果的女孩，正在一口一口吃掉你的余生',
    'ch5_r2_choice': '战争的信封比子弹更轻 —— 但它在桌上放了一整夜，压得整间屋子喘不过气',
    'ch5_r3_choice': '信上只有三个字："她走了。"—— 你从此知道，世界上最重的信只需要三个字',
    'ch5_r5_choice': '八个年轻士兵端着枪 —— 其中一个手指在发抖。你感到的不是恐惧，是一种近乎悲伤的平静'
  },
  scenes: {
    ch5_opening: { id:'ch5_opening', type:'narrative', chapter:5, round:0, title:'第五幕开启 · 她在吃一颗糖苹果', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['那天下午，你正在实验室里熔一枚金币。然后你从窗户看见了蕾梅黛丝。','她站在街对面，镇长家门前，手里举着一颗糖苹果。糖壳上有一只蜜蜂，正在徒劳地寻找裂缝。她的嘴张着——不是要咬，是忘了咬。她穿着淡绿的裙子——有些长，拖在泥地上，裙摆沾了细灰。风吹过来，裙子像一株早熟的植物在她身上抖动。','你手里的钳子停住了。坩埚里的金液晃了晃，溅了一滴在你手背上——不疼。或者说，疼已经被别的东西盖住了。你只是在心里说了一个字："她。"','她是阿波利纳尔·摩斯科特的女儿。她九岁。']}, choices:null, nextScene:'ch5_r1_choice' },

    ch5_r1_choice: { id:'ch5_r1_choice', type:'choice', chapter:5, round:1, title:'第一轮选择 · 初恋的宣言', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你无法忘记那个画面——蕾梅黛丝举着糖苹果，蜜蜂在她指尖嗡嗡作响。你从来没有对任何人有过这种感觉。不是肉欲——是一种近乎宗教的确定。你确定你将在余生所有重要时刻想起这颗糖苹果。','但她也只有九岁。而她父亲是镇长——那个你帮助或反对过的人。'], transition:'你选择——' }, choices:[
      { id:'ch5_r1_a', label:'向她父亲提亲', description:'你是布恩迪亚——你知道自己想要什么。去找镇长，正式求娶蕾梅黛丝。', nextScene:'ch5_r1a', effects:{ tags:['勇敢的求婚者'], memory:null } },
      { id:'ch5_r1_b', label:'等待她长大', description:'她还太小。把你的感情埋在心底，等她长大——用时间来证明你的真心。', nextScene:'ch5_r1b', effects:{ tags:['耐心的等待者'], memory:null } },
      { id:'ch5_r1_c', label:'扼杀这份感情', description:'她只是个孩子。你告诉自己：这不是爱，是一种错觉。转身走开——趁还来得及。', nextScene:'ch5_r1c', effects:{ tags:['自我克制者'], memory:'未说出口的爱',} }
    ], settlement:'ch5_r1_settlement' },
    ch5_r1a: { id:'ch5_r1a', type:'narrative', chapter:5, round:1, title:'勇敢的求婚者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你穿上最干净的衬衫，走向镇长家。摩斯科特开了门——看见是你，愣了一下。"我想娶你的女儿。"你说。他看了你很久——久到你能听见厨房里有人在洗东西。然后他说："她九岁。"你说："我会等她。"他最终点了点头——不是因为相信你，是因为你是布恩迪亚。']}, choices:null, nextScene:'ch5_r1_settlement' },
    ch5_r1b: { id:'ch5_r1b', type:'narrative', chapter:5, round:1, title:'耐心的等待者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你什么都没说——但每天下午，你会在实验室窗口多站一会儿。蕾梅黛丝路过的时候，你没有招手，没有说话。你只是看着她走过——她的裙子拖在泥地上，她手里有时是糖苹果，有时是一朵花，有时什么都没有。你不急。你在心里说：我有时间。我有的是时间。']}, choices:null, nextScene:'ch5_r1_settlement' },
    ch5_r1c: { id:'ch5_r1c', type:'narrative', chapter:5, round:1, title:'自我克制者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你关上窗户。你回到坩埚前，把融化的金币倒进模具——金鱼。你做了一条又一条，直到手指酸得抬不起来。但每次你停下来，你就会想起糖苹果上的那只蜜蜂。有些感情不是被扑灭的——是被别的火焰暂时盖过了。可它没有熄灭。它从来没有熄灭过。']}, choices:null, nextScene:'ch5_r1_settlement' },
    ch5_r1_settlement: { id:'ch5_r1_settlement', type:'settlement', chapter:5, round:1, title:'第一轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['蕾梅黛丝还在街对面吃着她的糖苹果，不知道有一个男人已经把自己的一生和她的名字系在了一起。战争还很远——但它在河对岸的山那边，正一步一步朝马孔多走来。']}, settlement:{ summary:'第一轮完成。你第一次爱上了——对象是九岁的蕾梅黛丝。', nextScene:'ch5_r2_choice', nextLabel:'进入第二轮' } },

    ch5_r2_choice: { id:'ch5_r2_choice', type:'choice', chapter:5, round:2, title:'第二轮选择 · 战争来到马孔多', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['战争来了。不是以军队的形式——是以一封信的形式。信上写着：自由党在首都起义了，保守党正在各地搜捕"叛乱分子"。你的朋友——那个教你看星星的医生——被列在名单上。','士兵已经进入了马孔多。他们在大街上列队，枪上的刺刀在午后阳光下闪闪发光。他们把镇长的办公室改成了指挥部。有一个年轻军官正盯着布恩迪亚家的方向——他知道你的名字。'], transition:'你选择——' }, marginalia:{ text:'读到这里时我合上书去厨房倒了杯水。回来时发现自己攥着杯子的姿势像攥着一把枪。', style:'whisper' }, choices:[
      { id:'ch5_r2_a', label:'拿起武器加入自由党', description:'你不能坐视朋友被捕。从实验室里拿出武器——战斗从今天开始。', nextScene:'ch5_r2a', effects:{ tags:['革命者'], memory:null, relationshipEffects:{'乌尔苏拉·伊瓜兰':-10}, characterFlags:{'joined_war':1} }, emotionalCost:'乌尔苏拉站在门口说"别死"——她没有说"回来"。这两个词之间的空白，是你此后所有战争的总重量', alternativeNarrative:'若你选择保护家人——你不会成为上校。你不会面对行刑队。你不会知道权力藤蔓缠绕肋骨的感觉。但你会在每个黄昏坐在门廊上，听见栗树下的老人画着圆圈——画了一辈子，从未停笔。' },
      { id:'ch5_r2_b', label:'保护家人——保持中立', description:'战争是别人的事。你的责任是守住这所房子，守住乌尔苏拉和孩子们。', nextScene:'ch5_r2b', effects:{ tags:['家族堡垒'], memory:null, relationshipEffects:{'乌尔苏拉·伊瓜兰':15}, characterFlags:{'ursula_cared':1,'family_first':1} }, alternativeNarrative:'若你拿起武器——你将在战场上度过余生最漫长的夜晚。你会在硝烟中看见蕾梅黛丝举着糖苹果的背影——而你知道你再也回不到那个下午了。' },
      { id:'ch5_r2_c', label:'试图与两边谈判', description:'也许避免流血的唯一方法是对话。去找军官和自由党人——用你的影响力斡旋。', nextScene:'ch5_r2c', effects:{ tags:['和平使者'], memory:'谈判桌的空椅子', characterFlags:{'tried_peace':1} }, alternativeNarrative:'若你选择不谈判——你永远不会知道那张空椅子在阳光下放了多久。你会直接走进战争的门——更快，更痛，但也许更诚实。和平有时比战争更让人精疲力竭。' }
    ], settlement:'ch5_r2_settlement' },
    ch5_r2a: { id:'ch5_r2a', type:'narrative', chapter:5, round:2, title:'革命者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你从实验室里拿出那些你亲手熔铸的铁器——不是工具，是武器。你离开了马孔多。乌尔苏拉站在门口——她没有拦你。她只是说："别死。"你点了点头。她没有说"回来"——她只说"别死"。你不知道哪一个更难做到。']}, choices:null, nextScene:'ch5_r2_settlement' },
    ch5_r2b: { id:'ch5_r2b', type:'narrative', chapter:5, round:2, title:'家族堡垒', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你没有离开。你在院子里竖起了围栏——不是木头，是你用炼金术铸造的铁条。你把乌尔苏拉和孩子安置在最里面的房间里。每天晚上你坐在门廊上，手里握着枪——不是要攻击，是要让每一个路过这所房子的人知道：这里有人醒着。']}, choices:null, nextScene:'ch5_r2_settlement' },
    ch5_r2c: { id:'ch5_r2c', type:'narrative', chapter:5, round:2, title:'和平使者', leftPage:{ speaker:'奥雷里亚诺', speakerColor:'#1a3a4a', paragraphs:['你同意见双方的领导人——同一天，同一张桌子，不同的时间。自由党人说他们需要你的枪；保守党人说他们需要你的服从。你坐在那张空椅子上——他们都没有来。战争不需要理由，只需要借口。而你不是借口——你只是站在借口必经之路上的一个人。']}, choices:null, nextScene:'ch5_r2_settlement' },
    ch5_r2_settlement: { id:'ch5_r2_settlement', type:'settlement', chapter:5, round:2, title:'第二轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['枪声在远处响起——不是马孔多，是河对岸的另一个镇子。但枪声像打雷一样，一阵一阵地传过来。栗树下的老人抬起头——他听见了战争的第一声低语。他继续画他的圆圈。他早就知道这场战争会来——他只是在等它路过。']}, settlement:{ summary:'第二轮完成。战争敲响了马孔多的大门。', nextScene:'ch5_r3_choice', nextLabel:'进入第三轮' } },

    ch5_r3_choice: { id:'ch5_r3_choice', type:'choice', chapter:5, round:3, title:'第三轮选择 · 蕾梅黛丝之死', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你不在家。你在前线——指挥第一场战役。然后信来了。乌尔苏拉只写了三个字："她走了。"','蕾梅黛丝死了。不是因为战争——是因为意外。她从楼梯上摔下来，怀着你未出生的孩子。她死的时候十四岁。你还记得她九岁时举着糖苹果的样子——那只蜜蜂绕着糖壳飞，她的嘴忘了咬。现在那个嘴巴永远不会咬了。那些苹果永远不会被吃完了。'], transition:'你选择——' }, marginalia:{ text:'这页有水渍。不是我弄的——是上一个读者。也可能是再上一个。这页永远会有水渍。', style:'warning' }, choices:[
      { id:'ch5_r3_a', label:'回家——守在她墓前', description:'战争可以等。蕾梅黛丝不能等——你已经错过了她最后一面，至少不要错过告别。', nextScene:'ch5_r3a', effects:{ tags:['悲痛的丈夫'], memory:'糖苹果与墓石', relationshipEffects:{'乌尔苏拉·伊瓜兰':10}, characterFlags:{'returned_for_love':1} }, emotionalCost:'你骑了三天三夜的马——但墓前只有一块白色石头。你不知道该说什么。你放下的糖被蚂蚁搬走了——也许这就是答案', alternativeNarrative:'若你留在前线——你的副官会替你指挥下一场战役。你不知道蕾梅黛丝的墓在地下沉了半寸——但乌尔苏拉知道。她每天都去浇水。她用厨房的水——本来是用来煮汤的。' },
      { id:'ch5_r3_b', label:'留在前线——用战争麻痹自己', description:'回家没有意义——她不在那里了。留在战场上，让自己被硝烟吞没。', nextScene:'ch5_r3b', effects:{ tags:['逃避者'], memory:null, relationshipEffects:{'乌尔苏拉·伊瓜兰':-15}, characterFlags:{'fled_from_grief':1} }, emotionalCost:'你打了三十二场仗——但每一场你都在心里留了一小块空白。那块空白是蕾梅黛丝的形状', alternativeNarrative:'若你回去守墓——你会跪在那块白色石头前，膝下的泥土是湿的。你会闻到乌尔苏拉泼的水——它渗进了石头的纹理。你会知道：有些伤口不在皮肤上，在每一次你看见糖苹果的时候。' },
      { id:'ch5_r3_c', label:'写一封信——然后继续战斗', description:'你不能回去，但也不能沉默。写一封信给乌尔苏拉——告诉她蕾梅黛丝的名字不会被忘记。', nextScene:'ch5_r3c', effects:{ tags:['沉默的纪念者'], memory:'写给亡妻的信', relationshipEffects:{'乌尔苏拉·伊瓜兰':5}, characterFlags:{'wrote_for_dead':1} }, alternativeNarrative:'若你回去守墓——你会看见乌尔苏拉站在墓旁。她没有哭——她只是蹲下来，用手把石头上的一只蚂蚁轻轻拨开。你那天才知道：她不是在照料坟墓——她是在照料那个永远不会出生的孩子。' }
    ], settlement:'ch5_r3_settlement' },
    ch5_r3a: { id:'ch5_r3a', type:'narrative', chapter:5, round:3, title:'悲痛的丈夫', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你骑着马日夜兼程回到马孔多。乌尔苏拉在门口等你——她老了十岁。你走进院子——蕾梅黛丝的墓在栗树旁边，一块白色的石头，上面没有字——因为没有人敢写下她的名字。','你站在墓前，把手里的糖放在石头上。不是糖苹果——是普通的糖。你在前线从牙缝里省下来的。你放了很久——直到蚂蚁把它搬完。']}, choices:null, nextScene:'ch5_r3_settlement' },
    ch5_r3b: { id:'ch5_r3b', type:'narrative', chapter:5, round:3, title:'逃避者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你没有回去。你指挥了下一场战役，再下一场，再下一场。你打了胜仗——但你不记得胜利的感觉。你只记得糖苹果。只记得那只蜜蜂。只记得她从楼梯上摔下来的时候手里还攥着什么——你不知道是什么。你永远也不会知道。','这就是你惩罚自己的方式：不回去，不让泪水落下来，不让她的死成为真的。只要还在打仗，她就还没有走远。']}, choices:null, nextScene:'ch5_r3_settlement' },
    ch5_r3c: { id:'ch5_r3c', type:'narrative', chapter:5, round:3, title:'沉默的纪念者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你坐在帐篷里写了一整夜。不是战报——是给乌尔苏拉的信。你写了蕾梅黛丝穿着绿裙子站在街对面的样子。写了糖苹果上的蜜蜂。写了你从来没有告诉她的那些话——因为你以为来日方长。','天亮的时候信写完了。你把它折好，交给信使。"送到马孔多——布恩迪亚家。"你不知道乌尔苏拉读了没有——但你写下来这个举动本身，在你的心里种下了比战争更沉重的东西。']}, choices:null, nextScene:'ch5_r3_settlement' },
    ch5_r3_settlement: { id:'ch5_r3_settlement', type:'settlement', chapter:5, round:3, title:'第三轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['蕾梅黛丝走了。马孔多的栗树下多了一块白色石头。你还是上校——你的军装越来越旧，你的眼神越来越像你父亲被绑在树下之前的那个样子。战争在继续——它不关心爱情。']}, settlement:{ summary:'第三轮完成。你失去了蕾梅黛丝——选择了如何面对她的死亡。', nextScene:'ch5_r4_choice', nextLabel:'进入第四轮' } },

    ch5_r4_choice: { id:'ch5_r4_choice', type:'choice', chapter:5, round:4, title:'第四轮选择 · 权力的诱惑', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你打赢了很多仗。人们开始叫你"上校"——不是官职，是尊称。你走进一个镇子的时候，人们自动让开一条路。你开始收到礼物：一支银柄手枪，一封来自首都的邀请函，一个年轻女人的照片——她的名字不重要。','你感到权力在你体内生长——不是像树，是像藤蔓。它缠绕着你的肋骨，让你每次呼吸都能闻到自己的影响力。它很甜——比糖苹果还甜。但它也在吃掉你。你明白这一点——但你停不下来。'], transition:'你选择——' }, choices:[
      { id:'ch5_r4_a', label:'拥抱权力——成为领袖', description:'你有能力领导——这是上天给你的责任。接受它，成为你需要成为的那个人。', nextScene:'ch5_r4a', effects:{ tags:['权力的拥抱者'], memory:null } },
      { id:'ch5_r4_b', label:'拒绝——回到马孔多', description:'你不是为了权力才打仗的。把军装还给战争——回去做小金鱼。', nextScene:'ch5_r4b', effects:{ tags:['归隐者'], memory:'被拒绝的银手枪',} },
      { id:'ch5_r4_c', label:'寻找中间道路——为正义而战', description:'权力本身不是目的——用它来改变不公正。但你得小心：正义和权力很少是同一个东西。', nextScene:'ch5_r4c', effects:{ tags:['正义的骑手'], memory:null } }
    ], settlement:'ch5_r4_settlement' },
    ch5_r4a: { id:'ch5_r4a', type:'narrative', chapter:5, round:4, title:'权力的拥抱者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你接受了那把银柄手枪。你接受了那封邀请函。你成了你从未想过会成为的人——一个在战场上被称作"阁下"的人。但那天晚上你睡不着——不是因为失眠症。是因为你看着镜子里的自己，发现你的眼睛越来越像你父亲被绑在栗树下之前的那个样子。']}, choices:null, nextScene:'ch5_r4_settlement' },
    ch5_r4b: { id:'ch5_r4b', type:'narrative', chapter:5, round:4, title:'归隐者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你脱下军装，把它折好，放在行军床边上。你把银柄手枪还给了送它的人。"我不需要它。"你骑上马，朝马孔多方向走去。走了很久——久到你开始忘记仗是怎么打的。但你没有忘记栗树的气味。你没有忘记乌尔苏拉在厨房里喊"吃饭了"的声音。']}, choices:null, nextScene:'ch5_r4_settlement' },
    ch5_r4c: { id:'ch5_r4c', type:'narrative', chapter:5, round:4, title:'正义的骑手', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你选择了一个危险的平衡——用权力推动变革，但不让自己被权力改变。你写了新的法令，解放了你控制的镇子里的奴隶。你惩罚了腐败的官员。但在每一封命令的结尾，你都签上了"布恩迪亚"——不是军衔，是姓氏。你尽量让自己的签名看起来不像一个独裁者的签名。']}, choices:null, nextScene:'ch5_r4_settlement' },
    ch5_r4_settlement: { id:'ch5_r4_settlement', type:'settlement', chapter:5, round:4, title:'第四轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['战争继续着。你的人民越来越多——追随你和反对你的人都在增加。权力在你体内已经长成了一棵树——它有根了。你拔不掉它。也许你也不想拔了。']}, settlement:{ summary:'第四轮完成。权力敲了你的门——你选择开门还是关上。', nextScene:'ch5_r5_choice', nextLabel:'进入第五轮' } },

    ch5_r5_choice: { id:'ch5_r5_choice', type:'choice', chapter:5, round:5, title:'第五轮选择 · 行刑队与不朽', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你被俘了。不是被敌人——是被你曾经相信的人。他们把你绑在行刑队的墙前。你面前是八个端着枪的年轻士兵——其中有一个看起来像从前的你：眼睛清澈，手指颤抖。','你看着他们。你不怕死——不是因为勇敢，是因为你太累了。但你想起了那块冰。想起了奥雷里亚诺（如果你来自未来）或想起了你自己六岁时伸出的那根手指。你忽然笑了。士兵们面面相觑。你笑不是因为找到了解脱——是因为你终于理解了梅尔基亚德斯的话。'], transition:'你选择——' }, choices:[
      { id:'ch5_r5_a', label:'直视行刑队——拒绝蒙眼', description:'你要睁着眼睛看他们扣下扳机。让他们记住这张脸——它会出现在他们余生每一个梦里。', nextScene:'ch5_r5a', effects:{ tags:['不屈者'], memory:'行刑队前的微笑' } },
      { id:'ch5_r5_b', label:'要求最后的请求', description:'你要写最后一封信——给乌尔苏拉。不是道别，是感谢。感谢她在所有夜晚都在桌上摆了碗筷。', nextScene:'ch5_r5b', effects:{ tags:['感恩的告别者'], memory:'最后一封信' } },
      { id:'ch5_r5_c', label:'试图逃跑——哪怕失败', description:'你不是坐以待毙的人。哪怕机会渺茫——也要在墙前最后一秒朝左边扑去。', nextScene:'ch5_r5c', effects:{ tags:['至死不屈者'], memory:'墙边的弹孔',} }
    ], settlement:'ch5_r5_settlement' },
    ch5_r5a: { id:'ch5_r5a', type:'narrative', chapter:5, round:5, title:'不屈者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你拒绝了蒙眼的黑布。你直视着那八个士兵——其中一个在哭。你忽然对他说："别怕。你只是扣一下扳机——而我只需要闭上眼睛。"你没有闭上眼睛。枪响了。','很多年后，那个年轻士兵会疯了——他逢人就说他处决过布恩迪亚上校，但上校没有死——他仍然站在那面墙前，睁着眼睛，看着他。他永远被那一幕钉在了行刑队的墙前，就像你父亲被钉在了栗树下。']}, choices:null, nextScene:'ch5_r5_settlement' },
    ch5_r5b: { id:'ch5_r5b', type:'narrative', chapter:5, round:5, title:'感恩的告别者', leftPage:{ speaker:'奥雷里亚诺上校', speakerColor:'#1a3a4a', paragraphs:['你要求纸和笔。你写了："乌尔苏拉——不管今晚在桌上摆几副碗筷，都摆上我的。我不是要回来——是我欠你的那碗汤太多了。"你折好信，交给那个手指颤抖的士兵。"送到马孔多。"枪响了。信送到了——乌尔苏拉把它钉在厨房墙上。很多年后那页纸还在——上面的墨水早已褪色，但折痕犹在。']}, choices:null, nextScene:'ch5_r5_settlement' },
    ch5_r5c: { id:'ch5_r5c', type:'narrative', chapter:5, round:5, title:'至死不屈者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你在最后一秒朝左边扑去——子弹擦过你的肩膀，在墙上打出八个弹孔。你没有死。你只是摔倒了——躺在尘土里，肩膀在烧。士兵们围上来，没有人开第二枪。也许他们佩服你——也许他们只是累了。你躺在尘土里，看着天空——你想起你父亲说过一句话："万物皆有灵。"也包括死亡。死亡也有灵——它今天放过了你。']}, choices:null, nextScene:'ch5_r5_settlement' },
    ch5_r5_settlement: { id:'ch5_r5_settlement', type:'settlement', chapter:5, round:5, title:'第五轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['你活了下来——或以某种方式不朽了。许多年以后，面对行刑队的那个下午——或面对冰块的那个下午——或面对你父亲被绑在栗树下的那个下午——会变成马孔多最常被人讲述的故事。故事不在乎真相——故事只在乎是否被记住了。']}, settlement:{ summary:'第五轮完成。你面对了死亡——或死亡面对了你。', nextScene:'ch5_r6_choice', nextLabel:'进入最终轮' } },

    ch5_r6_choice: { id:'ch5_r6_choice', type:'choice', chapter:5, round:6, title:'第六轮选择 · 回家的路', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['战争还没有结束——但你的战争已经结束了。你站在马孔多的路口——往左是栗树和实验室，往右是继续出征的路。你的军装已经旧了，你的手上还残留着火药味，你的心里有一个洞——那个洞曾经装着蕾梅黛丝。','乌尔苏拉站在家门口。她看见你了。她没有跑过来——她只是站在那里，手在围裙上擦了又擦。你离她还有一百步——但你已经闻到汤的味道了。'], transition:'你选择——' }, choices:[
      { id:'ch5_r6_a', label:'走回家——脱下军装', description:'走进院子，把军装挂在门后那副盔甲旁边。坐下喝汤。战争结束了。', nextScene:'ch5_r6a', effects:{ tags:['归乡者'], memory:'盔甲旁的军装' } },
      { id:'ch5_r6_b', label:'再次出征——完成使命', description:'你还有未竟之事。告诉乌尔苏拉你还会回来——然后在转身之前不要看她。', nextScene:'ch5_r6b', effects:{ tags:['永不停歇者'], memory:null } },
      { id:'ch5_r6_c', label:'站在路口——不知何去何从', description:'你站在原地。风吹过来，带着栗树的气味。你不知道该去哪——也许你永远都不会知道。', nextScene:'ch5_r6c', effects:{ tags:['迷途者'], memory:'路口的风',} }
    ], settlement:'ch5_r6_settlement' },
    ch5_r6a: { id:'ch5_r6a', type:'narrative', chapter:5, round:6, title:'归乡者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你走进院子。乌尔苏拉没有说话——她只是把一碗汤放在桌上。你坐下来。汤很热——太热了，舌头被烫得发麻。但你喝完了整碗——因为你已经很久没有喝过这么烫的东西了。战争结束了。至少对你来说。']}, choices:null, nextScene:'ch5_r6_settlement' },
    ch5_r6b: { id:'ch5_r6b', type:'narrative', chapter:5, round:6, title:'永不停歇者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你转身。你听见乌尔苏拉在身后说："别死。"和多年前一样。你没有回头——因为如果你回头，你就再也走不了了。你翻身上马，朝下一个战场赶去。战争不会结束——但每一个不结束的战争里都有一个不知道如何停下的人。那个人就是你。']}, choices:null, nextScene:'ch5_r6_settlement' },
    ch5_r6c: { id:'ch5_r6c', type:'narrative', chapter:5, round:6, title:'迷途者', leftPage:{ speaker:'旁白', speakerColor:'#4a2a18', paragraphs:['你站在路口。左边是家——你听见汤在锅里沸腾的声音。右边是战争——你听见远方有枪声。你不知道该往哪边走——也许你永远都不会知道。但风来了——从栗树方向吹过来的风，带着你父亲画在泥土里的那些圆圈的湿气。你朝风来的方向迈了一步——然后站住了。有些路不是用来走的——是让人知道自己终究会走哪条。']}, choices:null, nextScene:'ch5_r6_settlement' },
    ch5_r6_settlement: { id:'ch5_r6_settlement', type:'settlement', chapter:5, round:6, title:'第六轮 · 结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['战争的声音远去了——不是结束，是转移到了别的地方。马孔多还在。栗树还在。乌尔苏拉还在。你也许还在，也许不在了——这取决于你选择了哪条路。但不管怎样，这所房子会记得你。会在走廊的回声里，在煤油灯的灯芯里，在每一碗太咸的汤里——记得你。']}, settlement:{ summary:'最终轮完成。你回家了——或再次上路了。无论如何，马孔多记得你。', nextScene:'chapter5_end', nextLabel:'查看章末结算' } },
    chapter5_end: { id:'chapter5_end', type:'settlement', chapter:5, round:7, title:'第五章 · 章末结算', leftPage:{ speaker:null, speakerColor:null, paragraphs:['第五章完结。从糖苹果到行刑队，从初恋到战争的循环——你走过了奥雷里亚诺·布恩迪亚上校一生中最漫长的路程。','战争是最漫长的失眠。遗忘是最彻底的死亡。你还没有忘记——所以你还活着。']}, settlement:{ summary:'第五章完结。你经历了爱的诞生与死亡、战争的开始与循环——终于站在了回家的路口。', isChapterEnd:true, nextLabel:'进入第六章 · 第一次战争',  emotionalCost:'多年以后，当你再次面对行刑队——或当你被绑在栗树下——你将会回想起这个下午。这个你合上第五章的下午。你不知道自己离香蕉公司的火车还有多远——但你已经开始听见铁轨在远方微微震颤。' } }
  },
  memories: {
    '糖苹果与墓石': { id:'糖苹果与墓石', title:'糖苹果与墓石', description:'你站在蕾梅黛丝的墓前，把从牙缝里省下的糖放在石头上。蚂蚁搬完了——但她应该看见过。', chapter:5 },
    '未说出口的爱': { id:'未说出口的爱', title:'未说出口的爱', description:'你关上窗户，回到坩埚前。但糖苹果上的蜜蜂一直嗡嗡作响——在你的余生之中。', chapter:5 },
    '谈判桌的空椅子': { id:'谈判桌的空椅子', title:'谈判桌的空椅子', description:'你设了一张谈判桌——自由党人和保守党人都没有来。战争不需要理由，只需要借口。', chapter:5 },
    '写给亡妻的信': { id:'写给亡妻的信', title:'写给亡妻的信', description:'你写了一整夜——不是战报，是给乌尔苏拉的信。你写了糖苹果上的蜜蜂。写了从来没说出口的话。', chapter:5 },
    '被拒绝的银手枪': { id:'被拒绝的银手枪', title:'被拒绝的银手枪', description:'你把银柄手枪还给了送它的人。"我不需要它。"你骑上马，朝马孔多走去。', chapter:5 },
    '行刑队前的微笑': { id:'行刑队前的微笑', title:'行刑队前的微笑', description:'你拒绝了蒙眼布。你直视士兵——有一个在哭。"别怕——你只是扣一下扳机，我只需要闭上眼睛。"', chapter:5 },
    '最后一封信': { id:'最后一封信', title:'最后一封信', description:'"乌尔苏拉——不管今晚摆几副碗筷，都摆上我的。我不是要回来——是我欠你的那碗汤太多了。"', chapter:5 },
    '墙边的弹孔': { id:'墙边的弹孔', title:'墙边的弹孔', description:'你在最后一秒朝左扑去——子弹擦过肩膀，在墙上打出八个弹孔。死亡也有灵——它今天放过了你。', chapter:5 },
    '盔甲旁的军装': { id:'盔甲旁的军装', title:'盔甲旁的军装', description:'你把军装挂在门后那副十五世纪盔甲旁边。坐下喝汤。战争结束了——至少对你来说。', chapter:5 },
    '路口的风': { id:'路口的风', title:'路口的风', description:'你站在路口，风从栗树方向吹来。有些路不是用来走的——是让人知道自己终究会走哪条。', chapter:5 }
  },
  familyMembers: [
    { name:'蕾梅黛丝·摩斯科特', relation:'妻子（已故）', generation:2, isCurrent:false, description:'镇长的小女儿。九岁时举着糖苹果的样子让奥雷里亚诺一见倾心。十四岁时从楼梯上摔下而死。' }
  ]
});
