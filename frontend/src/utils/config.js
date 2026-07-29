/* ================================================================
   js/config.js — 全局常量、角色数据、关系数据库、成就定义
   ================================================================ */

/* ---- 章节元数据注册表 — 所有22个章节的标题和编号 ---- */
const CHAPTER_META = {
  'prologue':  { num: 0,  shortName: '序章',    subtitle: '羊皮卷的召唤',                        fileName: '序章' },
  'chapter1':  { num: 1,  shortName: '第一章',  subtitle: '宿命之环',                            fileName: '第一章' },
  'chapter2':  { num: 2,  shortName: '第二章',  subtitle: '失眠症',                              fileName: '第二章' },
  'chapter3':  { num: 3,  shortName: '第三章',  subtitle: '丽贝卡——家族扩张',                     fileName: '第三章' },
  'chapter4':  { num: 4,  shortName: '第四章',  subtitle: '自动钢琴、皮埃特罗·克雷斯皮',            fileName: '第四章' },
  'chapter5':  { num: 5,  shortName: '第五章',  subtitle: '蕾梅黛丝与初战',                       fileName: '第五章' },
  'chapter6':  { num: 6,  shortName: '第六章',  subtitle: '第一次战争、阿尔卡蒂奥暴政',             fileName: '第六章' },
  'chapter7':  { num: 7,  shortName: '第七章',  subtitle: '奥雷里亚诺上校的战争循环',              fileName: '第七章' },
  'chapter8':  { num: 8,  shortName: '第八章',  subtitle: '何塞·阿尔卡蒂奥归来、美人儿蕾梅黛丝',    fileName: '第八章' },
  'chapter9':  { num: 9,  shortName: '第九章',  subtitle: '狂欢节屠杀、费尔南达登场',               fileName: '第九章' },
  'chapter10': { num: 10, shortName: '第十章',  subtitle: '大罢工、三千人屠杀',                     fileName: '第十章' },
  'chapter11': { num: 11, shortName: '第十一章', subtitle: '四年大雨、衰败开始',                    fileName: '第十一章' },
  'chapter12': { num: 12, shortName: '第十二章', subtitle: '乌尔苏拉之死',                         fileName: '第十二章' },
  'chapter13': { num: 13, shortName: '第十三章', subtitle: '梅梅与马乌里肖·巴比伦',                 fileName: '第十三章' },
  'chapter14': { num: 14, shortName: '第十四章', subtitle: '香蕉公司的终结',                        fileName: '第十四章' },
  'chapter15': { num: 15, shortName: '第十五章', subtitle: '梅梅之死、私生子的出现',                 fileName: '第十五章' },
  'chapter16': { num: 16, shortName: '第十六章', subtitle: '加斯通到来、阿玛兰妲·乌尔苏拉回归',      fileName: '第十六章' },
  'chapter17': { num: 17, shortName: '第十七章', subtitle: '近亲之爱、羊皮卷破译',                  fileName: '第十七章' },
  'chapter18': { num: 18, shortName: '第十八章', subtitle: '最后一个布恩迪亚的诞生',                 fileName: '第十八章' },
  'chapter19': { num: 19, shortName: '第十九章', subtitle: '毁灭、蚂蚁、飓风',                      fileName: '第十九章' },
  'chapter20': { num: 20, shortName: '第二十章', subtitle: '百年孤独的终局',                        fileName: '第二十章' },
  'epilogue':  { num: 21, shortName: '终章',    subtitle: '羊皮卷的见证者',                        fileName: '终章' }
};

const CHAPTER_ORDER = [
  'prologue',
  'chapter1', 'chapter2', 'chapter3', 'chapter4', 'chapter5',
  'chapter6', 'chapter7', 'chapter8', 'chapter9', 'chapter10',
  'chapter11', 'chapter12', 'chapter13', 'chapter14', 'chapter15',
  'chapter16', 'chapter17', 'chapter18', 'chapter19', 'chapter20', 'epilogue'
];

/* ---- 人物性别 ---- */
const CHARACTER_GENDERS = {
  '何塞·阿尔卡蒂奥·布恩迪亚': '男', '乌尔苏拉·伊瓜兰': '女',
  '何塞·阿尔卡蒂奥': '男', '奥雷里亚诺·布恩迪亚': '男',
  '阿玛兰妲': '女', '丽贝卡': '女',
  '蕾梅黛丝·摩斯科特': '女', '阿尔卡蒂奥': '男',
  '奥雷里亚诺第二': '男', '何塞·阿尔卡蒂奥第二': '男',
  '美人儿蕾梅黛丝': '女', '费尔南达·德尔·卡皮奥': '女',
  '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）': '女',
  '阿玛兰妲·乌尔苏拉': '女', '奥雷里亚诺（私生子）': '男',
  '梅尔基亚德斯': '男', '普鲁登西奥·阿基拉尔': '男',
  '皮埃特罗·克雷斯皮': '男', '阿波利纳尔·摩斯科特': '男',
  '庇拉尔·特尔内拉': '女', '佩特拉·科特斯': '女',
  '马乌里肖·巴比伦': '男', '加斯通': '男'
};

/* ---- 人物别名 ---- */
const CHARACTER_ALIASES = {
  '奥雷里亚诺·布恩迪亚': ['奥雷里亚诺上校', '奥雷里亚诺·布恩迪亚上校', '布恩迪亚上校'],
  '何塞·阿尔卡蒂奥·布恩迪亚': ['何塞·阿尔卡蒂奥·布恩迪亚'],
  '何塞·阿尔卡蒂奥': ['何塞·阿尔卡蒂奥'],
  '奥雷里亚诺第二': ['奥雷里亚诺第二'],
  '奥雷里亚诺（私生子）': ['奥雷里亚诺', '私生子奥雷里亚诺'],
  '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）': ['梅梅', '雷纳塔·蕾梅黛丝'],
  '乌尔苏拉·伊瓜兰': ['乌尔苏拉'],
  '蕾梅黛丝·摩斯科特': ['蕾梅黛丝'],
  '美人儿蕾梅黛丝': ['美人儿蕾梅黛丝'],
  '费尔南达·德尔·卡皮奥': ['费尔南达'],
  '何塞·阿尔卡蒂奥第二': ['何塞·阿尔卡蒂奥第二'],
  '梅尔基亚德斯': ['梅尔基亚德斯'],
  '皮埃特罗·克雷斯皮': ['皮埃特罗·克雷斯皮', '皮埃特罗'],
  '佩特拉·科特斯': ['佩特拉·科特斯', '佩特拉'],
  '马乌里肖·巴比伦': ['马乌里肖·巴比伦', '马乌里肖'],
  '庇拉尔·特尔内拉': ['庇拉尔·特尔内拉'],
  '阿波利纳尔·摩斯科特': ['阿波利纳尔·摩斯科特', '摩斯科特'],
  '普鲁登西奥·阿基拉尔': ['普鲁登西奥·阿基拉尔'],
  '加斯通': ['加斯通'],
  '阿玛兰妲': ['阿玛兰妲'],
  '阿玛兰妲·乌尔苏拉': ['阿玛兰妲·乌尔苏拉'],
  '丽贝卡': ['丽贝卡'],
  '阿尔卡蒂奥': ['阿尔卡蒂奥']
};

/* ---- 人物关系数据库 ---- */
const RELATION_DB = [
  ['何塞·阿尔卡蒂奥·布恩迪亚', '乌尔苏拉·伊瓜兰', '夫妻',
    '马孔多的共同建立者。他用一头骡子和一对山羊换两块磁铁时，她双手叉腰站在门口——一生都在用自己的方式守着他。'],
  ['何塞·阿尔卡蒂奥·布恩迪亚', '梅尔基亚德斯', '至交挚友',
    '吉卜赛人带来了磁铁、放大镜与冰块，也带来了何塞一生追逐的"看不见的东西"。他为放大镜用记忆做了交换——从此忘记了父亲的脸。'],
  ['何塞·阿尔卡蒂奥·布恩迪亚', '何塞·阿尔卡蒂奥', '父子',
    '长子十四岁跟吉卜赛人出走，归来时已成纹满世界地图的巨人。他蹲在栗树下，把面包掰成两半放在被绑住的父亲手中。'],
  ['乌尔苏拉·伊瓜兰', '何塞·阿尔卡蒂奥', '母子',
    '她追着吉卜赛篷车跑了几天几夜寻找出走的长子。当儿子归来，他已是一个她几乎认不出的巨人。'],
  ['何塞·阿尔卡蒂奥·布恩迪亚', '奥雷里亚诺·布恩迪亚', '父子',
    '父亲带他去看冰块的那个下午，成了上校一生最温暖的记忆。行刑队前，他想起的是覆在他手背上的父亲的手。'],
  ['乌尔苏拉·伊瓜兰', '奥雷里亚诺·布恩迪亚', '母子',
    '她在信上只写两个字——"别死"。他打了三十二场败仗，躲过无数次暗杀——从未忘记这两个字。'],
  ['何塞·阿尔卡蒂奥·布恩迪亚', '阿玛兰妲', '父女',
    '父亲的目光总在磁铁与放大镜之间。她学会嫉妒——一生在缝制裹尸布中缝补这份缺失。'],
  ['乌尔苏拉·伊瓜兰', '阿玛兰妲', '母女',
    '阿玛兰妲下毒时，乌尔苏拉冲进厨房打翻了那杯咖啡。她一生都在替女儿缝补她造成和承受的伤口。'],
  ['何塞·阿尔卡蒂奥·布恩迪亚', '丽贝卡', '养父女',
    '丽贝卡抱着父母的骨灰盒叩门。何塞侧身让她走进来——从此家里多了一个永远在墙角吃泥土的女孩。'],
  ['乌尔苏拉·伊瓜兰', '丽贝卡', '养母女',
    '她用草药和祈祷治好了养女的吃泥症。这个陌生女孩从此有了房间、衣服和一碗热汤。'],
  ['丽贝卡', '皮埃特罗·克雷斯皮', '恋人（曾有婚约）',
    '自动钢琴第一次奏响时丽贝卡爱上了弹琴的意大利人。他选择了她——但另一个女人的嫉妒让这场婚礼永未完成。'],
  ['阿玛兰妲', '皮埃特罗·克雷斯皮', '暗恋与嫉妒',
    '她在他的衬衫上缝了整整一个月的花——但他选择了丽贝卡。她发誓这场婚礼永远不会办成。'],
  ['阿玛兰妲', '丽贝卡', '情敌姐妹',
    '两人同时爱上了同一个弹钢琴的男人。阿玛兰妲在丽贝卡的咖啡里下了毒——乌尔苏拉冲进来打翻了杯子，裂痕从此无法愈合。'],
  ['丽贝卡', '何塞·阿尔卡蒂奥', '夫妻',
    '巨人归来那天，两人目光交汇——所有关于钢琴的琴声都沉默了。他们搬出老家，在村子另一头建立了自己的世界。'],
  ['奥雷里亚诺·布恩迪亚', '蕾梅黛丝·摩斯科特', '夫妻',
    '她举着糖苹果站在街对面——九岁。他对自己说"她"。十四岁时她从楼梯上摔下——带走了他这辈子唯一温柔的部分。'],
  ['奥雷里亚诺·布恩迪亚', '阿波利纳尔·摩斯科特', '翁婿',
    '他娶了镇长的女儿。当他拿起枪加入自由党，与岳父站到了政治的对立面——两种忠诚从未在同一张桌上坐下。'],
  ['奥雷里亚诺·布恩迪亚', '庇拉尔·特尔内拉', '占卜关系',
    '纸牌女人对六岁的他说："这孩子会死很多次。"她算对了——他躲过了无数次暗杀和行刑队。'],
  ['何塞·阿尔卡蒂奥', '庇拉尔·特尔内拉', '露水情人',
    '她用纸牌引诱了沉默如石的少年。他们的儿子阿尔卡蒂奥——布恩迪亚第三代由此开始。'],
  ['何塞·阿尔卡蒂奥', '阿尔卡蒂奥', '父子',
    '巨人多数时间在海上。阿尔卡蒂奥从未真正认识父亲——当他在马孔多成为暴君时，父亲只是远方传说。'],
  ['奥雷里亚诺·布恩迪亚', '阿尔卡蒂奥', '叔侄',
    '上校参战时将镇子交给侄子。侄子穿上军装变成暴君——上校收到消息时只说"权力不是用来报仇的"。'],
  ['阿尔卡蒂奥', '奥雷里亚诺第二', '父子',
    '双胞胎之一继承了布恩迪亚家的狂欢渴望——一顿能吃下一头牛。父亲被处决前从不知道儿子会成为这样的人。'],
  ['阿尔卡蒂奥', '何塞·阿尔卡蒂奥第二', '父子',
    '双胞胎中的另一个阴沉愤怒——亲眼目睹三千人大屠杀后，一生在试图让世界承认那场杀戮。'],
  ['阿尔卡蒂奥', '美人儿蕾梅黛丝', '父女',
    '她从不穿衣服。晾床单时风把她吹上了天空——父亲在坟墓里，永远不知道自己生下了马孔多最美的存在。'],
  ['奥雷里亚诺第二', '费尔南达·德尔·卡皮奥', '夫妻',
    '狂欢节上将她扛在肩头看世界全景。婚后她用祷告和窗帘把家捆成教堂——他逃到情妇那里，不是恨她，是无法在她的规矩里呼吸。'],
  ['奥雷里亚诺第二', '佩特拉·科特斯', '情人（真爱）',
    '佩特拉是他真正爱着的女人。四年大雨冲走所有财富，只有她陪他坐在屋顶上——手牵手，在雨声中不说什么。'],
  ['奥雷里亚诺第二', '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', '父女',
    '他从未在规矩和钢琴课之间找到表达爱的方式——只是在每次出海后偷偷在她枕头下放一块糖。'],
  ['费尔南达·德尔·卡皮奥', '梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', '母女',
    '她为女儿规划了贵族婚姻与体面。但女儿爱上满手机油的学徒——她叫来警察，枪声打断了黄蝴蝶的翅膀。'],
  ['梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', '马乌里肖·巴比伦', '恋人',
    '黄蝴蝶总是跟着他。他们在后院棕榈树下幽会——直到子弹打断他的脊椎。他再没站起来——她将他的照片藏在内衬里，直到死。'],
  ['费尔南达·德尔·卡皮奥', '马乌里肖·巴比伦', '仇敌',
    '她叫来的警察开枪打中了学徒的脊椎。她用钱将他送去遥远医院——条件是永远不回来。黄蝴蝶从此离开了马孔多。'],
  ['奥雷里亚诺第二', '阿玛兰妲·乌尔苏拉', '父女',
    '女儿从布鲁塞尔归来时父亲已去世。她推开那扇门——看见腐烂的房子，和一个正在读羊皮卷的年轻人。'],
  ['费尔南达·德尔·卡皮奥', '阿玛兰妲·乌尔苏拉', '母女',
    '小女儿不像母亲。从欧洲回来后第一件事——把母亲拉了半辈子的窗帘全部扯下。'],
  ['阿玛兰妲·乌尔苏拉', '加斯通', '夫妻',
    '她带着欧洲丈夫回到马孔多——他不属于这里。他看着她一天天被房子和读羊皮卷的年轻人拉走，最后订了单程票——只给他自己。'],
  ['梅梅（雷纳塔·蕾梅黛丝·布恩迪亚）', '奥雷里亚诺（私生子）', '母子（永未相见）',
    '婴儿被放在篮子里送到家门口。梅梅在修道院度过余生——永远不知道儿子在走廊里独自长大，破解了全部羊皮卷。'],
  ['马乌里肖·巴比伦', '奥雷里亚诺（私生子）', '父子（永未相见）',
    '父亲在遥远医院病床上再没站起来——不知道儿子被取名为奥雷里亚诺，被锁在布恩迪亚家，被说成"捡来的"。'],
  ['费尔南达·德尔·卡皮奥', '奥雷里亚诺（私生子）', '养祖母/囚禁者',
    '她把婴儿藏在房子里——不让他出去，不让他上学，不让他知道自己是谁。他在被锁的房子里长大，然后发现了时间不会流逝的房间。'],
  ['阿玛兰妲·乌尔苏拉', '奥雷里亚诺（私生子）', '恋人（近亲）',
    '两个布恩迪亚在腐烂的马孔多相爱——在羊皮卷的注视下重复家族最古老的模式。他们的孩子是最后一个布恩迪亚——被蚂蚁带走。'],
  ['何塞·阿尔卡蒂奥·布恩迪亚', '普鲁登西奥·阿基拉尔', '仇敌',
    '斗鸡场上普鲁登西奥羞辱了乌尔苏拉。何塞用长矛刺穿他的喉咙——死者的灵魂从此在栗树下徘徊。'],
  ['奥雷里亚诺·布恩迪亚', '梅尔基亚德斯', '精神导师与继承者',
    '梅尔基亚德斯写下布恩迪亚家的一切——上校的曾孙最终破解了羊皮卷。他走后那间房间不再有灰尘——时间永远停留。'],
  ['何塞·阿尔卡蒂奥第二', '奥雷里亚诺（私生子）', '引路人',
    '最后记得三千人大屠杀的人把钥匙交给了梅梅的儿子——"你会知道的。"羊皮卷从见证者传到破解者手上。'],
  ['奥雷里亚诺第二', '何塞·阿尔卡蒂奥第二', '孪生兄弟',
    '双胞胎一模一样——连乌尔苏拉都分不清。一个选择笑声和盛宴，另一个选择愤怒与记忆。死后被装错棺材——命运最后的玩笑。'],
  ['乌尔苏拉·伊瓜兰', '费尔南达·德尔·卡皮奥', '隔代婆媳',
    '失明的乌尔苏拉仍然看穿了试图用规矩统治布恩迪亚家的女人。两人从未交谈——但每次擦肩都互相了解一切。'],
  ['乌尔苏拉·伊瓜兰', '美人儿蕾梅黛丝', '曾祖孙',
    '失明后用手摸到曾孙女的脸——手指停在那张完美脸上很久："你不属于这个世界。"后来风把她吹走了——她没有惊讶。']
];

/* ---- 角色名解析 ---- */
function resolveCharacterName(input) {
  if (familyTreeRegistry[input]) return input;
  for (const [formal, aliases] of Object.entries(CHARACTER_ALIASES)) {
    if (aliases.some(a => a === input || input.includes(a) || a.includes(input))) return formal;
  }
  return input;
}

/* ---- 关系查询 ---- */
function findRelation(name1, name2) {
  const a = resolveCharacterName(name1);
  const b = resolveCharacterName(name2);
  for (const [ra, rb, label, event] of RELATION_DB) {
    if ((ra === a && rb === b) || (ra === b && rb === a)) {
      return [label, event];
    }
  }
  return null;
}

function findRelationPath(name1, name2) {
  const a = resolveCharacterName(name1);
  const b = resolveCharacterName(name2);
  if (a === b) return null;
  const graph = {};
  for (const [ra, rb, label] of RELATION_DB) {
    if (!graph[ra]) graph[ra] = [];
    if (!graph[rb]) graph[rb] = [];
    graph[ra].push({ to: rb, label });
    graph[rb].push({ to: ra, label });
  }
  if (!graph[a] || !graph[b]) return null;
  const visited = new Set([a]);
  const queue = [[a, []]];
  while (queue.length > 0) {
    const [current, edges] = queue.shift();
    if (current === b) return edges;
    for (const { to, label } of (graph[current] || [])) {
      if (!visited.has(to)) {
        visited.add(to);
        queue.push([to, [...edges, { from: current, to, label }]]);
      }
    }
  }
  return null;
}

/* ---- 成就定义 ---- */
const ACHIEVEMENTS = [
  { id:'ach_first_choice', icon:'◆', name:'最初的抉择', desc:'在第一章中做出第一个选择。',
    cond: s => s.choiceLog.length >= 1 },
  { id:'ach_ch1_done', icon:'❧', name:'宿命之环', desc:'完成第一章「宿命之环」，迈入马孔多的故事。',
    cond: s => s.isChapterCompleted(1) },
  { id:'ach_insomnia', icon:'◑', name:'失眠症患者', desc:'完成第二章——遗忘比失眠更可怕。',
    cond: s => s.isChapterCompleted(2) },
  { id:'ach_magnets', icon:'↭', name:'磁铁与执着', desc:'在第一章中选择拖着磁铁走进丛林寻找黄金。',
    cond: s => s.tags.includes('执着勘探者') },
  { id:'ach_family_man', icon:'◉', name:'家庭的守望者', desc:'在关键选择中把家人放在第一位。',
    cond: s => s.tags.includes('家庭的守望者') || s.tags.includes('家族支柱') },
  { id:'ach_memory_keeper', icon:'◆', name:'记忆收藏家', desc:'累计解锁5枚记忆碎片。',
    cond: s => s.memories.length >= 5 },
  { id:'ach_memory_master', icon:'◈', name:'记忆大师', desc:'累计解锁10枚记忆碎片。',
    cond: s => s.memories.length >= 10 },
  { id:'ach_war', icon:'✦', name:'战争的回声', desc:'完成第五章——经历奥雷里亚诺上校的战争与爱情。',
    cond: s => s.isChapterCompleted(5) },
  { id:'ach_rain', icon:'∴', name:'四年大雨', desc:'完成第十一章——在马孔多的泥泞中重新站立。',
    cond: s => s.isChapterCompleted(11) },
  { id:'ach_massacre', icon:'†', name:'不灭的记忆', desc:'完成第十章——亲眼见证三千人大屠杀，并选择不遗忘。',
    cond: s => s.isChapterCompleted(10) },
  { id:'ach_ursula', icon:'◉', name:'乌尔苏拉之眼', desc:'完成第十二章——在失明中看清了整个家族的百年。',
    cond: s => s.isChapterCompleted(12) },
  { id:'ach_butterfly', icon:'❦', name:'黄蝴蝶', desc:'完成第十三章——目送蝴蝶永远离开马孔多。',
    cond: s => s.isChapterCompleted(13) },
  { id:'ach_love', icon:'❧', name:'禁忌之爱', desc:'完成第十七章——直面羊皮卷上关于你自己的句子。',
    cond: s => s.isChapterCompleted(17) },
  { id:'ach_ant', icon:'⁂', name:'蚂蚁的行军', desc:'完成第十九章——见证最后一个布恩迪亚被蚂蚁带走。',
    cond: s => s.isChapterCompleted(19) },
  { id:'ach_full_circle', icon:'↻', name:'百年闭环', desc:'完成全部二十章——见证马孔多从诞生到被飓风抹去。',
    cond: s => s.isChapterCompleted(20) },
  { id:'ach_all_tags', icon:'✦', name:'标签收集者', desc:'累计获得15个以上的标签。',
    cond: s => s.tags.length >= 15 },
  { id:'ach_three_eras', icon:'◈', name:'三种视角', desc:'分别通过序章的三个时代入口进入过马孔多。',
    cond: s => (s._eraVisited || []).length >= 3 },
  /* 可玩性增强：新成就 */
  { id:'ach_clue_finder', icon:'◈', name:'线索猎人', desc:'使用一条线索碎片解锁了隐藏选项。',
    cond: s => (s._secretOptionChosen || false) },
  { id:'ach_bond_master', icon:'↭', name:'羁绊之人', desc:'与任意角色的关系值达到至交（≥85）。',
    cond: s => Object.values(s.relationships || {}).some(v => v >= 85) },
  { id:'ach_explorer', icon:'◎', name:'马孔多的探索者', desc:'在羊皮卷的边缘发现隐藏的文字——累计阅读5条边缘批注。',
    cond: s => (s._marginaliaRead || 0) >= 5 },
  { id:'ach_second_playthrough', icon:'↻', name:'轮回之人', desc:'完成第二次通关——你再次回到了马孔多。',
    cond: s => (s.playthroughCount || 0) >= 2 },
  { id:'ach_marginalia_reader', icon:'¶', name:'边缘的读者', desc:'累计阅读过10条边缘文字。',
    cond: s => (s._marginaliaRead || 0) >= 10 },
  /* v2.0 烙印统计型成就 */
  { id:'ach_consecutive_witness', icon:'◎', name:'连续的见证者', desc:'连续3章以上保持见证者烙印——你在命运中找到了节奏。',
    cond: s => (s.getImprintStats ? s.getImprintStats().maxConsecutive >= 3 : false) },
  { id:'ach_consecutive_rebel', icon:'◆', name:'不熄的反抗', desc:'连续3章以上保持抗争者烙印——你从未向命运低头。',
    cond: s => {
      if (!s.fateImprint) return false;
      const entries = Object.entries(s.fateImprint);
      let max = 0, cur = 1;
      for (let i = 1; i < entries.length; i++) {
        if (entries[i][1] === 'rebel' && entries[i-1][1] === 'rebel') { cur++; } else { max = Math.max(max, cur); cur = 1; }
      }
      return Math.max(max, cur) >= 3;
    }},
  { id:'ach_pendulum', icon:'↻', name:'命运的摆锤', desc:'烙印档位翻转5次以上——你在命运的两端之间反复摇摆。',
    cond: s => (s.getImprintStats ? s.getImprintStats().pendulumSwings >= 5 : false) },
  { id:'ach_shapeless', icon:'○', name:'无定形之人', desc:'无任何档位过半——梅尔基亚德斯写不了你，因为你从不静止。',
    cond: s => {
      const stats = s.getImprintStats ? s.getImprintStats() : null;
      if (!stats || stats.total < 5) return false;
      return stats.rebelPct < 50 && stats.followerPct < 50 && stats.witnessPct < 50;
    }},
  { id:'ach_clue_collector_10', icon:'◈', name:'线索收集者', desc:'收集10条以上隐藏线索。',
    cond: s => (s.clueFragments || []).length >= 10 },
  { id:'ach_clue_collector_all', icon:'◈', name:'全知之眼', desc:'集齐全部24条隐藏线索——你找到了梅尔基亚德斯藏在羊皮卷里的一切。',
    cond: s => (s.clueFragments || []).length >= 24 },
  { id:'ach_all_endings', icon:'✦', name:'宿命的全貌', desc:'触发过全部8种结局——你读完了羊皮卷的每一页。',
    cond: s => {
      if (!s._endingsSeen) return false;
      const required = ['coauthor','prophet','lover','hurricane','rebel','balanced','bystander','witness'];
      return required.every(e => s._endingsSeen.includes(e));
    }},
  { id:'ach_quadrant_shift', icon:'◎', name:'象限行者', desc:'在单次游玩中经历了至少3个不同象限。',
    cond: s => {
      if (!s.fateImprint || !s.bondImprint) return false;
      const quadrants = new Set();
      const fateEntries = Object.entries(s.fateImprint);
      fateEntries.forEach(([ch, fLevel]) => {
        const bLevel = s.bondImprint[ch] || 'estranged';
        const fVal = fLevel === 'witness' ? 6 : fLevel === 'follower' ? 3 : 0;
        const bVal = bLevel === 'soul_of_family' ? 6 : bLevel === 'bonded' ? 3 : 0;
        quadrants.add(getQuadrantLabel(fVal, bVal).id);
      });
      return quadrants.size >= 3;
    }},
  { id:'ach_soul_of_family', icon:'◉', name:'家族的魂', desc:'累计5章以上保持"家族的魂"羁绊烙印。',
    cond: s => Object.values(s.bondImprint || {}).filter(b => b === 'soul_of_family').length >= 5 }
];

/* ---- 结局定义注册表（v2.0: 7种结局 — 4象限×3烙印模式+全线索） ---- */
const ENDING_DEFS = {
  coauthor: {
    id: 'coauthor',
    title: '合著者',
    color: 'var(--gold-light)',
    initialScene: 'epilogue_coauthor',
    summary: '你理解了命运的必然，但在羊皮卷每一页边缘都写了注释。梅尔基亚德斯合上书时对你点了点头——"你不仅是读者。你是合著者。"'
  },
  prophet: {
    id: 'prophet',
    title: '孤独智者',
    color: '#8a9ab0',
    initialScene: 'epilogue_prophet',
    summary: '你看了全部，理解了全部，但从未属于其中任何一页。你站在飓风边缘，看着马孔多被抹去——像一个读完书却无法合上的人。'
  },
  lover: {
    id: 'lover',
    title: '为爱赴死',
    color: '#c06050',
    initialScene: 'epilogue_lover',
    summary: '你没能改变结局，但你让某些人活得更久、死得更暖。乌尔苏拉在最后一页抬起头——"你回来了？汤还热着。"'
  },
  hurricane: {
    id: 'hurricane',
    title: '飓风中的人',
    color: '#6a5040',
    initialScene: 'epilogue_hurricane',
    summary: '你和命运互相撕扯，最后谁都没赢。飓风带走了一切——包括你的名字。但你的脚印留在了马孔多的泥土里。'
  },
  rebel: {
    id: 'rebel',
    title: '反抗者烙印',
    color: 'var(--gold)',
    initialScene: 'epilogue_rebel',
    summary: '羊皮卷有一页是空白的——"这一页是我撕掉的。"梅尔基亚德斯看着那页空白——然后笑了。"我写不了你。"'
  },
  rebel_all_clues: {
    id: 'rebel_all_clues', title: '反抗者 · 全知', color: 'var(--gold)',
    initialScene: 'epilogue_rebel',
    summary: '你撕掉了羊皮卷的一页——也找到了所有的碎片。梅尔基亚德斯看着那页空白和你手中的全部线索，沉默了许久。"我写不了你——但你已经不需要我了。"'
  },
  balanced: {
    id: 'balanced',
    title: '均衡烙印',
    color: 'var(--gold-dim)',
    initialScene: 'epilogue_balanced',
    summary: '你的轮廓在羊皮卷上是模糊的——梅尔基亚德斯说："我写不了你。你不是任何一个固定的形状——你在每一页之间流动。"'
  },
  bystander: {
    id: 'bystander',
    title: '宿命旁观者',
    color: 'var(--gold-dim)',
    initialScene: 'epilogue_bystander',
    summary: '你只是一个在时间里走过的人。蚂蚁带走最后一个布恩迪亚时你站在门外——"我见证过，仅此而已。"'
  },
  witness: {
    id: 'witness',
    title: '见证者',
    color: 'var(--gold-light)',
    initialScene: 'epilogue_witness',
    summary: '你见证了全部——羊皮卷在你眼前一页页翻过。梅尔基亚德斯合上书："你读完了。现在合上它吧——回到你自己的故事里去。"'
  },
  // 全线索变体
  coauthor_all_clues: {
    id: 'coauthor_all_clues', title: '合著者 · 全知', color: 'var(--gold-light)',
    initialScene: 'epilogue_coauthor',
    summary: '你找到了我藏的所有东西。现在——找你自己。梅尔基亚德斯站起身，把鹅毛笔递给你。"剩下的你自己写。"'
  },
  prophet_all_clues: {
    id: 'prophet_all_clues', title: '孤独智者 · 全知', color: '#8a9ab0',
    initialScene: 'epilogue_prophet',
    summary: '你找到了所有线索——但线索越多，你越明白：理解一切的人注定独自一人。'
  },
  lover_all_clues: {
    id: 'lover_all_clues', title: '为爱赴死 · 全知', color: '#c06050',
    initialScene: 'epilogue_lover',
    summary: '你收集了每一片线索——不是为了力量，是为了让那些你爱的人被记住。'
  },
  hurricane_all_clues: {
    id: 'hurricane_all_clues', title: '飓风中的人 · 全知', color: '#6a5040',
    initialScene: 'epilogue_hurricane',
    summary: '飓风带走了马孔多——但你没有。你带着所有的线索，所有的记忆——成为了另一个世界的种子。'
  },
  witness_all_clues: {
    id: 'witness_all_clues', title: '见证者 · 全知', color: 'var(--gold-light)',
    initialScene: 'epilogue_witness',
    summary: '你见证了全部——也找到了全部。梅尔基亚德斯说："你找到了我藏的所有东西。现在——找你自己。"'
  },
  balanced_all_clues: {
    id: 'balanced_all_clues', title: '均衡 · 全知', color: 'var(--gold-dim)',
    initialScene: 'epilogue_balanced',
    summary: '你不是任何一个形状——你收集了每一片线索，却拒绝成为任何一种人。'
  },
  bystander_all_clues: {
    id: 'bystander_all_clues', title: '旁观者 · 全知', color: 'var(--gold-dim)',
    initialScene: 'epilogue_bystander',
    summary: '你旁观了百年——也收集了百年。梅尔基亚德斯看着你："我以为你会做些什么。但你只是看着——也许这就是你该做的事。"'
  }
};

/** 根据当前游戏状态决定终章结局类型（v2.1：基于烙印统计，非瞬时值） */
function determineEnding(state) {
  // 按 imprint 统计判定结局
  const stats = state.getImprintStats ? state.getImprintStats() : computeImprintStats(state.fateImprint || {}, state.bondImprint || {});
  const totalChapters = stats.total || 0;

  // 集齐全部 24 个线索 → 特殊台词
  const allClues = (state.clueFragments || []).length >= 24;

  // 反抗者烙印 ≥ 60% → 反抗者结局
  if (stats.rebelPct >= 60) {
    return allClues ? 'rebel_all_clues' : 'rebel';
  }

  // 无档位过半 → 均衡烙印
  if (stats.rebelPct < 50 && stats.followerPct < 50 && stats.witnessPct < 50 && totalChapters >= 3) {
    return allClues ? 'balanced_all_clues' : 'balanced';
  }

  // 基于烙印统计判定宿命/羁绊主导方向（而非第20章瞬时值）
  const dominantFate = stats.dominantImprint; // 'rebel' | 'follower' | 'witness'

  // 羁绊主导烙印
  const bondImprint = state.bondImprint || {};
  const bondEntries = Object.values(bondImprint);
  let soulCount = 0, estrangedCount = 0, bondedCount = 0;
  bondEntries.forEach(b => {
    if (b === 'soul_of_family') soulCount++;
    else if (b === 'estranged') estrangedCount++;
    else bondedCount++;
  });
  const dominantBond = soulCount >= estrangedCount && soulCount >= bondedCount ? 'soul_of_family'
    : estrangedCount >= soulCount && estrangedCount >= bondedCount ? 'estranged'
    : 'bonded';

  // 高宿命(见证者主导) + 高羁绊(家族魂主导) → 合著者
  if (dominantFate === 'witness' && dominantBond === 'soul_of_family') {
    return allClues ? 'coauthor_all_clues' : 'coauthor';
  }
  // 高宿命 + 低羁绊 → 孤独智者
  if (dominantFate === 'witness' && dominantBond === 'estranged') {
    return allClues ? 'prophet_all_clues' : 'prophet';
  }
  // 低宿命(抗争者主导) + 高羁绊 → 为爱赴死
  if (dominantFate === 'rebel' && dominantBond === 'soul_of_family') {
    return allClues ? 'lover_all_clues' : 'lover';
  }
  // 低宿命 + 低羁绊 → 飓风中的人
  if (dominantFate === 'rebel' && dominantBond === 'estranged') {
    return allClues ? 'hurricane_all_clues' : 'hurricane';
  }

  // 混合情况 — 按偏向判定
  if (dominantFate === 'witness') {
    return allClues ? 'coauthor_all_clues' : 'coauthor';
  }
  if (dominantBond === 'soul_of_family') {
    return allClues ? 'lover_all_clues' : 'lover';
  }
  if (dominantFate === 'rebel') {
    return allClues ? 'hurricane_all_clues' : 'hurricane';
  }
  if (dominantBond === 'estranged') {
    return allClues ? 'prophet_all_clues' : 'prophet';
  }

  // 默认：见证者占比较高 → 见证者结局
  if (stats.witnessPct >= 33) return allClues ? 'witness_all_clues' : 'witness';

  return allClues ? 'bystander_all_clues' : 'bystander';
}

/* ---- v2.0 双轴 × 三层宿命 常量 ---- */

/** 单章最大值 */
const MAX_FATE = 6;
const MAX_BOND = 6;

/** 羁绊三档 */
const BOND_LEVELS = {
  estranged:  { min: 0, max: 2, label: '疏离者', desc: '与家族若即若离，独自面对命运' },
  bonded:     { min: 3, max: 4, label: '羁绊者', desc: '与他人相连，在关系中找到意义' },
  soulFamily: { min: 5, max: 6, label: '家族的魂', desc: '成为家族的心脏——每一次跳动都牵动所有人' }
};

/** 烙印判定比例 */
const IMPRINT_THRESHOLDS = {
  rebel:    { maxRatio: 1/3, label: '抗争者', color: '#a05040' },
  follower: { minRatio: 1/3, maxRatio: 2/3, label: '追随者', color: '#c4910a' },
  witness:  { minRatio: 2/3, label: '见证者', color: 'var(--gold-light)' }
};

/** 动量规则：上章烙印 → 下章起始值 = 最大值 × 系数 */
const MOMENTUM_RULES = {
  witness:  { factor: 2/3, desc: '见证者——你带着上一章的洞察进入新的一页' },
  follower: { factor: 1/3, desc: '追随者——有些东西残留了下来，有些已经消散' },
  rebel:    { factor: 0,   desc: '抗争者——你撕掉了上一页，从空白开始' }
};

/** 线索道具注册表（24个线索，按章节分布） */
const CLUE_DEFS = {
  // 序章
  'sanskrit_first_line':   { id: 'sanskrit_first_line',   name: '梵文的第一行',   desc: '羊皮卷上第一个梵文句子——你看不懂，但它让你想起了什么。', chapter: 0, unlocksIn: ['epilogue'] },
  // Ch1
  'magnet_hum':            { id: 'magnet_hum',            name: '磁铁的嗡鸣',     desc: '磁铁在你手中发出低沉的嗡鸣——不是声音，是一种你从未感受过的振动。', chapter: 1, unlocksIn: ['chapter5'] },
  'melquiades_mirror':     { id: 'melquiades_mirror',     name: '梅尔基亚德斯的镜子', desc: '一面铜镜——镜面模糊，但你能看见自己的眼睛里有一行倒写的字。', chapter: 1, unlocksIn: ['chapter17'] },
  // Ch2
  'forgotten_label':       { id: 'forgotten_label',       name: '遗忘的标签',     desc: '栗树上的一张标签——墨水正在褪色，但你还能辨认出上面写着"栗树"。', chapter: 2, unlocksIn: ['chapter11'] },
  // Ch3
  'taste_of_mud':          { id: 'taste_of_mud',          name: '泥土的味道',     desc: '一小撮干涸的泥土——丽贝卡吃的那种。不是饥饿，是渴望。', chapter: 3, unlocksIn: ['chapter8'] },
  // Ch4
  'unsent_score':          { id: 'unsent_score',          name: '未寄出的乐谱',   desc: '一张手写乐谱——皮埃特罗写的，但没有署名，也没有寄出。', chapter: 4, unlocksIn: ['chapter13'] },
  // Ch5
  'candied_shell':         { id: 'candied_shell',         name: '凝固的糖壳',     desc: '糖苹果的碎壳——蕾梅黛丝站在街对面的那个下午凝固成的琥珀。', chapter: 5, unlocksIn: ['chapter15'] },
  'bullet_holes_wall':     { id: 'bullet_holes_wall',     name: '墙上的弹孔',     desc: '行刑队墙上的一排弹孔——每一个都是一个人最后的姿势。', chapter: 5, unlocksIn: ['chapter10'] },
  // Ch6
  'gold_thread_pocket':    { id: 'gold_thread_pocket',    name: '口袋上的金线字', desc: '军装口袋上绣着"布恩迪亚"——金线已经磨得发白。', chapter: 6, unlocksIn: ['chapter10'] },
  // Ch7
  'goldfish_cycle':        { id: 'goldfish_cycle',        name: '金鱼的循环',     desc: '一条小金鱼——你知道做好之后就会被熔掉，重新开始。不是徒劳——是仪式。', chapter: 7, unlocksIn: ['chapter17'] },
  // Ch8
  'weight_of_wind':        { id: 'weight_of_wind',        name: '风的重量',       desc: '晾床单的绳子还在晃——风带走了什么，你不知道。', chapter: 8, unlocksIn: ['chapter19'] },
  // Ch9
  'carnival_mask':         { id: 'carnival_mask',         name: '狂欢节的面具',   desc: '一个半截面具——狂欢节的血溅在上面，变成了干涸的褐色斑点。', chapter: 9, unlocksIn: ['chapter10'] },
  // Ch10
  'machinegun_position':   { id: 'machinegun_position',   name: '三挺机枪的位置', desc: '你记住了机枪的位置——它们在火车站台两侧，和一棵香蕉树后面。', chapter: 10, unlocksIn: ['chapter19'] },
  'train_direction':       { id: 'train_direction',       name: '两百节车厢的方向', desc: '火车往海边开了。两百节车厢——里面装的是人。', chapter: 10, unlocksIn: ['chapter14'] },
  // Ch11
  'water_stained_parchment':{id: 'water_stained_parchment',name: '水渍羊皮纸',    desc: '被雨水浸透的羊皮纸——字迹模糊了，但你能感觉到纸上残留的温度。', chapter: 11, unlocksIn: ['chapter17'] },
  // Ch12
  'last_stitch':           { id: 'last_stitch',           name: '最后一针',       desc: '缝纫机上的最后一根针——乌尔苏拉缝了一辈子，这一针她没来得及缝完。', chapter: 12, unlocksIn: ['epilogue'] },
  // Ch13
  'butterfly_wing':        { id: 'butterfly_wing',        name: '蝴蝶的翅膀',     desc: '一片黄蝴蝶的翅膀——它落在地上时还在轻轻颤动。', chapter: 13, unlocksIn: ['chapter15'] },
  // Ch14
  'banana_company_seal':   { id: 'banana_company_seal',   name: '香蕉公司的印章', desc: '一枚铁质印章——上面的字已经锈了，但"联合果品公司"还隐约可辨。', chapter: 14, unlocksIn: ['chapter19'] },
  // Ch15
  'bastard_name':          { id: 'bastard_name',          name: '私生子的名字',   desc: '一张小纸条——上面写着一个名字。墨水很新——是最近写的。', chapter: 15, unlocksIn: ['chapter17'] },
  // Ch16
  'return_ticket':         { id: 'return_ticket',         name: '回程的船票',     desc: '一张从布鲁塞尔到马孔多的船票——票根还在，但人已经到了。', chapter: 16, unlocksIn: ['chapter17'] },
  // Ch17
  'melquiades_handwriting':{ id: 'melquiades_handwriting',name: '梅尔基亚德斯的笔迹', desc: '一页羊皮卷残片——上面是老人的笔迹。你在某个句子里认出了自己的名字。', chapter: 17, unlocksIn: ['epilogue'] },
  // Ch18
  'baby_blanket':          { id: 'baby_blanket',          name: '婴儿的襁褓',     desc: '一块绣着布恩迪亚家徽的襁褓——还没有用过。', chapter: 18, unlocksIn: ['epilogue'] },
  // Ch19
  'ant_trail':             { id: 'ant_trail',             name: '蚂蚁的行军路线', desc: '你蹲下来——蚂蚁排成一列，正在搬运什么东西。你不敢看。', chapter: 19, unlocksIn: ['epilogue'] },
  // Ch20
  'circle_on_tree':        { id: 'circle_on_tree',        name: '刻在树上的圆',   desc: '栗树树干上刻着一个完美的圆——不知是谁刻的，不知是什么时候刻的。', chapter: 20, unlocksIn: ['epilogue'] }
};

/** 结局条件定义（v2.0：按 imprint 统计判定） */
const ENDING_CONDITIONS = {
  coauthor:  { quadrant: 'guardian', desc: '高 fate + 高 bond —— 你理解了命运的必然，但在每一页边缘都写了注释' },
  prophet:   { quadrant: 'prophet',  desc: '高 fate + 低 bond —— 你看了全部，理解了全部，但从未属于其中任何一页' },
  lover:     { quadrant: 'follower', desc: '低 fate + 高 bond —— 你没能改变结局，但你让某些人活得更久、死得更暖' },
  hurricane: { quadrant: 'rebel',    desc: '低 fate + 低 bond —— 你和命运互相撕扯，最后谁都没赢' },
  rebel:     { condition: 'rebelPct >= 60', desc: '抗争者烙印占大多数 —— 羊皮卷有一页是空白的' },
  balanced:  { condition: 'noDominant',      desc: '无档位过半 —— 你的轮廓在羊皮卷上是模糊的' }
};

/* ---- 附身角色情绪状态注册表（数据驱动，章节数据可扩展） ---- */
const CHAPTER_MOODS = {};
// 用法：章节数据中通过 registerChapter 注册时自动合并
// 结构：{ chapterId: { sceneId: '情绪文案', ... } }
// 也可以在 chapters-data 中通过 moods 字段直接定义

/** 获取当前场景的情绪状态文案 */
function getCurrentMood(chapterId, sceneId) {
  const chapterMoods = CHAPTER_MOODS[chapterId];
  if (!chapterMoods) return null;
  return chapterMoods[sceneId] || null;
}

/** 注册章节情绪状态（由 registerChapter 内部调用） */
function registerChapterMoods(chapterId, moods) {
  if (!moods || Object.keys(moods).length === 0) return;
  if (!CHAPTER_MOODS[chapterId]) {
    CHAPTER_MOODS[chapterId] = {};
  }
  Object.assign(CHAPTER_MOODS[chapterId], moods);
}
