/* ==========================================================
   小星星英语乐园 · 内容数据
   学单词 / 练口语 / 唱儿歌（5首公有领域经典英文儿歌）
   ========================================================== */

/* ---------- 学单词：主题词库 ---------- */
const WORD_THEMES = [
  {
    id: 'animals', name: '动物乐园', emoji: '🐾',
    words: [
      { en: 'cat',  ipa: '/kæt/',      cn: '小猫',  emoji: '🐱', ex: 'I have a cat.',       exCn: '我有一只小猫。' },
      { en: 'dog',  ipa: '/dɒɡ/',      cn: '小狗',  emoji: '🐶', ex: 'The dog is big.',     exCn: '这只狗很大。' },
      { en: 'bird', ipa: '/bɜːd/',     cn: '小鸟',  emoji: '🐦', ex: 'The bird can fly.',   exCn: '小鸟会飞。' },
      { en: 'fish', ipa: '/fɪʃ/',      cn: '小鱼',  emoji: '🐟', ex: 'The fish can swim.',  exCn: '小鱼会游泳。' },
      { en: 'duck', ipa: '/dʌk/',      cn: '鸭子',  emoji: '🦆', ex: 'Quack! Says the duck.', exCn: '鸭子嘎嘎叫。' },
      { en: 'pig',  ipa: '/pɪɡ/',      cn: '小猪',  emoji: '🐷', ex: 'The pig is pink.',    exCn: '小猪是粉色的。' },
      { en: 'cow',  ipa: '/kaʊ/',      cn: '奶牛',  emoji: '🐮', ex: 'The cow says moo.',   exCn: '奶牛哞哞叫。' },
      { en: 'rabbit', ipa: '/ˈræbɪt/', cn: '兔子',  emoji: '🐰', ex: 'The rabbit hops.',    exCn: '兔子蹦蹦跳。' }
    ]
  },
  {
    id: 'fruits', name: '水果缤纷', emoji: '🍎',
    words: [
      { en: 'apple',      ipa: '/ˈæpl/',        cn: '苹果', emoji: '🍎', ex: 'An apple a day.',     exCn: '一天一个苹果。' },
      { en: 'banana',     ipa: '/bəˈnɑːnə/',    cn: '香蕉', emoji: '🍌', ex: 'The banana is yellow.', exCn: '香蕉是黄色的。' },
      { en: 'orange',     ipa: '/ˈɒrɪndʒ/',     cn: '橙子', emoji: '🍊', ex: 'I like oranges.',     exCn: '我喜欢橙子。' },
      { en: 'grape',      ipa: '/ɡreɪp/',       cn: '葡萄', emoji: '🍇', ex: 'Grapes are sweet.',   exCn: '葡萄很甜。' },
      { en: 'watermelon', ipa: '/ˈwɔːtəmelən/', cn: '西瓜', emoji: '🍉', ex: 'Big green watermelon.', exCn: '大绿西瓜。' },
      { en: 'strawberry', ipa: '/ˈstrɔːbəri/',  cn: '草莓', emoji: '🍓', ex: 'Red strawberries.',   exCn: '红红的草莓。' },
      { en: 'peach',      ipa: '/piːtʃ/',       cn: '桃子', emoji: '🍑', ex: 'A juicy peach.',      exCn: '多汁的桃子。' },
      { en: 'pear',       ipa: '/peə/',         cn: '梨',   emoji: '🍐', ex: 'This pear is big.',   exCn: '这个梨很大。' }
    ]
  },
  {
    id: 'colors', name: '彩色世界', emoji: '🎨',
    words: [
      { en: 'red',    ipa: '/red/',    cn: '红色', emoji: '🔴', ex: 'The sun is red.',   exCn: '太阳红红的。' },
      { en: 'blue',   ipa: '/bluː/',   cn: '蓝色', emoji: '🔵', ex: 'The sky is blue.',  exCn: '天空是蓝色的。' },
      { en: 'yellow', ipa: '/ˈjeləʊ/', cn: '黄色', emoji: '🟡', ex: 'A yellow star.',    exCn: '一颗黄色的星星。' },
      { en: 'green',  ipa: '/ɡriːn/',  cn: '绿色', emoji: '🟢', ex: 'The grass is green.', exCn: '草是绿色的。' },
      { en: 'purple', ipa: '/ˈpɜːpl/', cn: '紫色', emoji: '🟣', ex: 'A purple flower.',  exCn: '一朵紫色的花。' },
      { en: 'orange', ipa: '/ˈɒrɪndʒ/',cn: '橙色', emoji: '🟠', ex: 'An orange ball.',   exCn: '一个橙色的球。' },
      { en: 'black',  ipa: '/blæk/',   cn: '黑色', emoji: '⚫', ex: 'A black sheep.',    exCn: '一只黑绵羊。' },
      { en: 'white',  ipa: '/waɪt/',   cn: '白色', emoji: '⚪', ex: 'White clouds.',     exCn: '白色的云朵。' }
    ]
  },
  {
    id: 'numbers', name: '数字王国', emoji: '🔢',
    words: [
      { en: 'one',   ipa: '/wʌn/',   cn: '一', emoji: '1️⃣', ex: 'One little star.',   exCn: '一颗小星星。' },
      { en: 'two',   ipa: '/tuː/',   cn: '二', emoji: '2️⃣', ex: 'Two big eyes.',      exCn: '两只大眼睛。' },
      { en: 'three', ipa: '/θriː/',  cn: '三', emoji: '3️⃣', ex: 'Three bags full.',   exCn: '装满的三袋。' },
      { en: 'four',  ipa: '/fɔː/',   cn: '四', emoji: '4️⃣', ex: 'Four wheels.',       exCn: '四个车轮。' },
      { en: 'five',  ipa: '/faɪv/',  cn: '五', emoji: '5️⃣', ex: 'Five little ducks.', exCn: '五只小鸭子。' },
      { en: 'six',   ipa: '/sɪks/',  cn: '六', emoji: '6️⃣', ex: 'Six pink pigs.',     exCn: '六只粉小猪。' },
      { en: 'seven', ipa: '/ˈsevn/', cn: '七', emoji: '7️⃣', ex: 'Seven stars.',       exCn: '七颗星星。' },
      { en: 'eight', ipa: '/eɪt/',   cn: '八', emoji: '8️⃣', ex: 'Eight legs?',        exCn: '八条腿？' }
    ]
  },
  {
    id: 'body', name: '身体奥秘', emoji: '👀',
    words: [
      { en: 'eye',   ipa: '/aɪ/',   cn: '眼睛', emoji: '👁️', ex: 'I see with my eyes.', exCn: '我用眼睛看。' },
      { en: 'ear',   ipa: '/ɪə/',   cn: '耳朵', emoji: '👂', ex: 'I hear with my ears.', exCn: '我用耳朵听。' },
      { en: 'nose',  ipa: '/nəʊz/', cn: '鼻子', emoji: '👃', ex: 'Touch your nose.',    exCn: '摸摸你的鼻子。' },
      { en: 'mouth', ipa: '/maʊθ/', cn: '嘴巴', emoji: '👄', ex: 'Open your mouth.',    exCn: '张开你的嘴巴。' },
      { en: 'hand',  ipa: '/hænd/', cn: '手',   emoji: '✋', ex: 'Clap your hands.',    exCn: '拍拍你的手。' },
      { en: 'foot',  ipa: '/fʊt/',  cn: '脚',   emoji: '🦶', ex: 'Stamp your feet.',    exCn: '跺跺你的脚。' },
      { en: 'arm',   ipa: '/ɑːm/',  cn: '手臂', emoji: '💪', ex: 'Wave your arm.',      exCn: '挥挥你的手臂。' },
      { en: 'leg',   ipa: '/leɡ/',  cn: '腿',   emoji: '🦵', ex: 'Jump with your legs.', exCn: '用腿跳一跳。' }
    ]
  },
  {
    id: 'family', name: '温暖家庭', emoji: '👨‍👩‍👧',
    words: [
      { en: 'daddy',   ipa: '/ˈdædi/',    cn: '爸爸', emoji: '👨', ex: 'I love daddy.',    exCn: '我爱爸爸。' },
      { en: 'mummy',   ipa: '/ˈmʌmi/',    cn: '妈妈', emoji: '👩', ex: 'Mummy is kind.',    exCn: '妈妈很温柔。' },
      { en: 'grandpa', ipa: '/ˈɡrænpɑː/', cn: '爷爷', emoji: '👴', ex: 'Grandpa is here.',  exCn: '爷爷在这里。' },
      { en: 'grandma', ipa: '/ˈɡrænmɑː/', cn: '奶奶', emoji: '👵', ex: 'Grandma cooks well.', exCn: '奶奶做饭很香。' },
      { en: 'brother', ipa: '/ˈbrʌðə/',   cn: '哥哥/弟弟', emoji: '👦', ex: 'He is my brother.', exCn: '他是我的哥哥。' },
      { en: 'sister',  ipa: '/ˈsɪstə/',   cn: '姐姐/妹妹', emoji: '👧', ex: 'She is my sister.', exCn: '她是我的姐姐。' },
      { en: 'baby',    ipa: '/ˈbeɪbi/',   cn: '宝宝', emoji: '👶', ex: 'The baby sleeps.',  exCn: '宝宝睡觉了。' },
      { en: 'family',  ipa: '/ˈfæməli/',  cn: '家庭', emoji: '👨‍👩‍👧‍👦', ex: 'We are a family.',  exCn: '我们是一家人。' }
    ]
  }
];

/* ---------- 练口语：日常情景对话 ---------- */
const SPEAK_SCENES = [
  {
    id: 'greet', name: '快乐打招呼', emoji: '👋',
    desc: '学会用英语向别人问好、告别，做个有礼貌的小天使。',
    tip: '打招呼时看着对方的眼睛，面带微笑，声音响亮。"Hello" 开头的 h 要轻轻送气。',
    lines: [
      { en: 'Hello!',              cn: '你好！' },
      { en: 'Hi!',                 cn: '嗨！' },
      { en: 'Good morning!',       cn: '早上好！' },
      { en: 'How are you?',        cn: '你好吗？' },
      { en: "I'm fine, thank you!", cn: '我很好，谢谢！' },
      { en: 'Goodbye! See you!',   cn: '再见！下次见！' }
    ]
  },
  {
    id: 'self', name: '自我介绍', emoji: '🌟',
    desc: '向新朋友介绍自己的名字、年龄和爱好。',
    tip: '"My name is..." 后面接自己的名字；回答年龄用 "I\'m + 数字 + years old"。',
    lines: [
      { en: "What's your name?",   cn: '你叫什么名字？' },
      { en: 'My name is Lily.',    cn: '我叫莉莉。' },
      { en: 'How old are you?',    cn: '你几岁了？' },
      { en: "I'm five years old.", cn: '我五岁了。' },
      { en: 'I like apples.',      cn: '我喜欢苹果。' },
      { en: 'Nice to meet you!',   cn: '很高兴认识你！' }
    ]
  },
  {
    id: 'polite', name: '礼貌用语', emoji: '🎩',
    desc: '谢谢、对不起、请——让礼貌用语常挂嘴边。',
    tip: '"Thank you" 重音在 you；"sorry" 中的 o 发短音 /ɒ/，嘴巴张大一点。',
    lines: [
      { en: 'Thank you!',          cn: '谢谢你！' },
      { en: "You're welcome.",     cn: '不客气。' },
      { en: "I'm sorry.",          cn: '对不起。' },
      { en: "That's OK.",          cn: '没关系。' },
      { en: 'Excuse me.',          cn: '打扰一下。' },
      { en: 'Please.',             cn: '请。' }
    ]
  },
  {
    id: 'daily', name: '日常问答', emoji: '🏠',
    desc: '请求帮忙、寻找东西、邀请朋友一起玩。',
    tip: '"Can you...?" 开头的请求句，句尾语调上扬；回答可以说 Sure! 或 OK!。',
    lines: [
      { en: 'Can you help me?',    cn: '你能帮我吗？' },
      { en: 'Sure!',               cn: '当然可以！' },
      { en: 'Where is the cat?',   cn: '小猫在哪里？' },
      { en: "It's here!",          cn: '在这里！' },
      { en: "Let's play together!", cn: '我们一起玩吧！' },
      { en: 'Great idea!',         cn: '好主意！' }
    ]
  }
];

/* ---------- 唱儿歌：5首经典英文儿歌 ---------- */
const RHYMES = [
  {
    id: 'twinkle',
    title: 'Twinkle Twinkle Little Star',
    cnTitle: '一闪一闪小星星',
    emoji: '⭐',
    melody: 'twinkle',
    desc: '夜空中最亮的启蒙：叠词、比喻和疑问句，唱出孩子对世界的好奇。',
    learn: [
      '叠词节奏：Twinkle, twinkle 反复出现，练习轻快的节奏感',
      '比喻句：Like a diamond in the sky（像天上的钻石）',
      '疑问句：How I wonder what you are! 表达好奇心'
    ],
    analysis: [
      '这首儿歌的歌词出自英国诗人简·泰勒（Jane Taylor）1806年出版的童诗集《Rhymes for the Nursery》中的诗作《The Star》。旋律来自18世纪的法国民谣《啊！妈妈，我要告诉你》（Ah! vous dirai-je, maman），音乐神童莫扎特曾用这个旋律创作了著名的钢琴变奏曲。',
      '全歌以孩子仰望星空的视角展开：星星一闪一闪（twinkle），高高挂在世界之上（up above the world so high），像钻石一样明亮（like a diamond in the sky）。叠词和押韵让句子朗朗上口，是英语语音启蒙的绝佳材料。'
    ],
    vocab: [
      { w: 'twinkle', ipa: '/ˈtwɪŋkl/', cn: '一闪一闪，闪烁' },
      { w: 'star',    ipa: '/stɑː/',    cn: '星星' },
      { w: 'wonder',  ipa: '/ˈwʌndə/',  cn: '想知道' },
      { w: 'above',   ipa: '/əˈbʌv/',   cn: '在……上方' },
      { w: 'diamond', ipa: '/ˈdaɪmənd/',cn: '钻石' },
      { w: 'sky',     ipa: '/skaɪ/',    cn: '天空' }
    ],
    lines: [
      { en: 'Twinkle, twinkle, little star,', cn: '一闪一闪小星星' },
      { en: 'How I wonder what you are!',     cn: '好想知道你是什么呀！' },
      { en: 'Up above the world so high,',    cn: '高高挂在世界之上' },
      { en: 'Like a diamond in the sky.',     cn: '好像天上的大钻石' },
      { en: 'Twinkle, twinkle, little star,', cn: '一闪一闪小星星' },
      { en: 'How I wonder what you are!',     cn: '好想知道你是什么呀！' }
    ],
    quiz: [
      { q: '歌里的小星星在天空中像什么？', opts: ['钻石', '皮球', '苹果', '纽扣'], a: 0,
        why: '歌词 "Like a diamond in the sky" 把星星比作天上的钻石。' },
      { q: '"Twinkle" 是什么意思？', opts: ['一闪一闪地发光', '快速奔跑', '大声唱歌', '慢慢长大'], a: 0,
        why: 'Twinkle 指星光一闪一闪地闪烁，歌里连说两次，节奏轻快。' },
      { q: '这首儿歌的旋律与哪位音乐家的钢琴变奏曲相同？', opts: ['莫扎特', '贝多芬', '肖邦', '巴赫'], a: 0,
        why: '旋律来自法国民谣《啊！妈妈，我要告诉你》，莫扎特为它写过12段变奏曲。' },
      { q: '歌词最初来自英国诗人简·泰勒的诗作，它的题目是？', opts: ['《The Star》', '《The Sun》', '《The Moon》', '《The Sea》'], a: 0,
        why: '1806年简·泰勒的诗歌《The Star》就是这首儿歌歌词的出处。' },
      { q: '"Up above the world so high" 中 above 的意思是？', opts: ['在……上方', '在……下面', '在……旁边', '穿过'], a: 0,
        why: 'above 表示"在……上方"，星星高高地挂在世界之上。' }
    ]
  },
  {
    id: 'farm',
    title: 'Old MacDonald Had a Farm',
    cnTitle: '老麦克唐纳有个农场',
    emoji: '🚜',
    melody: null,
    desc: '经典"替换歌"：换一种动物就多学一个单词和叫声，越唱越长本领。',
    learn: [
      '替换句式：And on his farm he had a ___（可替换动物单词）',
      '拟声词：moo（牛）、quack（鸭）等动物叫声',
      '欢快衬词：E-I-E-I-O 让整首歌好唱又好记'
    ],
    analysis: [
      '这是一首流传两百多年的美国传统民谣，早在20世纪初就有录音版本。歌曲的结构是经典的"累积替换式"：只要把动物名字和叫声换掉，就能一直唱下去——cow（奶牛）哞哞叫、duck（鸭子）嘎嘎叫、pig（小猪）哼哼叫。',
      '歌里的 E-I-E-I-O 是欢快的衬词，没有实际意思，却让整首歌充满节奏感。孩子们一边模仿动物叫声，一边自然学会动物单词，是最经典的"玩中学"启蒙儿歌。'
    ],
    vocab: [
      { w: 'farm',       ipa: '/fɑːm/',  cn: '农场' },
      { w: 'cow',        ipa: '/kaʊ/',   cn: '奶牛' },
      { w: 'duck',       ipa: '/dʌk/',   cn: '鸭子' },
      { w: 'everywhere', ipa: '/ˈevriweə/', cn: '到处' },
      { w: 'moo',        ipa: '/muː/',   cn: '哞（牛叫声）' },
      { w: 'quack',      ipa: '/kwæk/',  cn: '嘎嘎（鸭叫声）' }
    ],
    lines: [
      { en: 'Old MacDonald had a farm, E-I-E-I-O!',              cn: '老麦克唐纳有个农场，咿呀咿呀呦！' },
      { en: 'And on his farm he had a cow, E-I-E-I-O!',          cn: '农场里有头小奶牛，咿呀咿呀呦！' },
      { en: 'With a "moo-moo" here and a "moo-moo" there,',      cn: '这里哞哞，那里哞哞' },
      { en: 'Here a "moo", there a "moo", everywhere a "moo-moo"!', cn: '这边哞，那边哞，到处哞哞叫！' },
      { en: 'Old MacDonald had a farm, E-I-E-I-O!',              cn: '老麦克唐纳有个农场，咿呀咿呀呦！' },
      { en: 'Old MacDonald had a farm, E-I-E-I-O!',              cn: '老麦克唐纳有个农场，咿呀咿呀呦！' },
      { en: 'And on his farm he had a duck, E-I-E-I-O!',         cn: '农场里有只小鸭子，咿呀咿呀呦！' },
      { en: 'With a "quack-quack" here and a "quack-quack" there,', cn: '这里嘎嘎，那里嘎嘎' },
      { en: 'Here a "quack", there a "quack", everywhere a "quack-quack"!', cn: '这边嘎，那边嘎，到处嘎嘎叫！' },
      { en: 'Old MacDonald had a farm, E-I-E-I-O!',              cn: '老麦克唐纳有个农场，咿呀咿呀呦！' }
    ],
    quiz: [
      { q: 'Old MacDonald 拥有一个什么？', opts: ['农场', '面包店', '玩具店', '动物园'], a: 0,
        why: '歌词第一句 "Old MacDonald had a farm"——他有一个农场。' },
      { q: '哪种动物的叫声是 "moo"？', opts: ['奶牛', '鸭子', '小狗', '小猫'], a: 0,
        why: '歌里奶牛出场时唱 "With a moo-moo here"，moo 是牛叫声。' },
      { q: '鸭子出场时，歌里唱的叫声是？', opts: ['Quack', 'Moo', 'Woof', 'Meow'], a: 0,
        why: 'quack 是鸭子的嘎嘎声：quack-quack here and there。' },
      { q: '"E-I-E-I-O" 在歌里起什么作用？', opts: ['欢快的衬词，让歌曲更好唱好记', '农场主的名字', '一种乐器', '动物的名字'], a: 0,
        why: 'E-I-E-I-O 是衬词（nonsense words），让歌充满节奏感，孩子最爱跟着喊。' },
      { q: '这首儿歌帮我们练习哪种学习方法？', opts: ['替换动物名称，一边玩一边记单词', '背数学口诀', '记月份名称', '画地图'], a: 0,
        why: '只要替换 "he had a ___" 里的动物和叫声，就能唱出新段落。' }
    ]
  },
  {
    id: 'bus',
    title: 'The Wheels on the Bus',
    cnTitle: '巴士上的车轮',
    emoji: '🚌',
    melody: null,
    desc: '拟声词大集合：车轮转、雨刮嗖嗖、喇叭嘀嘀，边唱边做动作记单词。',
    learn: [
      '拟声词：round and round（转呀转）、swish（嗖嗖）、beep（嘀嘀）',
      '句型：The ___ on the bus go/gets ___（替换部件和动作）',
      'TPR 动作：转手腕、划雨刮、按喇叭，边唱边做'
    ],
    analysis: [
      '这首歌由美国作家维娜·希尔斯（Verna Hills）于1939年发表，旋律套用经典儿歌《Here We Go Round the Mulberry Bush》（桑树丛）。歌词把巴士上的部件一一"拟人化"：车轮转呀转、雨刮器嗖嗖、喇叭嘀嘀、车门开了又关。',
      '这首歌是"全身反应教学"（TPR）的代表儿歌：唱到车轮转手腕，唱到雨刮摆手臂，唱到喇叭按鼻子。声音词（onomatopoeia）+ 动作 + 重复句式，让单词牢牢住进小脑袋。'
    ],
    vocab: [
      { w: 'wheel', ipa: '/wiːl/', cn: '车轮' },
      { w: 'round', ipa: '/raʊnd/', cn: '转圈；圆的' },
      { w: 'wiper', ipa: '/ˈwaɪpə/', cn: '雨刮器' },
      { w: 'horn',  ipa: '/hɔːn/', cn: '喇叭' },
      { w: 'town',  ipa: '/taʊn/', cn: '城镇' },
      { w: 'all through', ipa: '/ɔːl θruː/', cn: '贯穿，一路' }
    ],
    lines: [
      { en: 'The wheels on the bus go round and round,',  cn: '巴士的车轮转呀转' },
      { en: 'Round and round, round and round.',          cn: '转呀转，转呀转' },
      { en: 'The wheels on the bus go round and round,',  cn: '巴士的车轮转呀转' },
      { en: 'All through the town.',                      cn: '一路穿过小城' },
      { en: 'The wipers on the bus go "Swish! Swish! Swish!",', cn: '雨刮器嗖嗖嗖' },
      { en: '"Swish! Swish! Swish!"',                     cn: '嗖！嗖！嗖！' },
      { en: 'The wipers on the bus go "Swish! Swish! Swish!",', cn: '雨刮器嗖嗖嗖' },
      { en: 'All through the town.',                      cn: '一路穿过小城' },
      { en: 'The horn on the bus goes "Beep! Beep! Beep!",', cn: '喇叭嘀嘀嘀' },
      { en: '"Beep! Beep! Beep!"',                        cn: '嘀！嘀！嘀！' },
      { en: 'The horn on the bus goes "Beep! Beep! Beep!",', cn: '喇叭嘀嘀嘀' },
      { en: 'All through the town.',                      cn: '一路穿过小城' }
    ],
    quiz: [
      { q: '"wheels" 指巴士的哪个部分？', opts: ['车轮', '车窗', '座位', '车顶'], a: 0,
        why: 'wheel 是车轮，歌里它 go round and round 转个不停。' },
      { q: '车轮在歌里做什么动作？', opts: ['round and round 转呀转', 'up and down 上下跳', 'left and right 左右摇', 'stop 停下来'], a: 0,
        why: '"The wheels on the bus go round and round"——车轮转呀转。' },
      { q: '"Swish! Swish! Swish!" 是什么的声音？', opts: ['雨刮器 wipers', '喇叭 horn', '车轮 wheels', '门铃 bell'], a: 0,
        why: 'swish 模拟雨刮器摆动的嗖嗖声，下雨天最忙的就是它。' },
      { q: '喇叭 horn 的声音是？', opts: ['Beep! Beep!', 'Moo! Moo!', 'Quack! Quack!', 'Ding! Dong!'], a: 0,
        why: 'beep beep 是汽车喇叭的嘀嘀声，提醒路人注意啦。' },
      { q: '这首歌最棒的学习方法是？', opts: ['一边唱一边做动作，全身记住单词', '抄写一百遍', '睡觉时听', '只看不唱'], a: 0,
        why: '转手腕、划雨刮、按喇叭——TPR 全身反应法让身体帮大脑记单词。' }
    ]
  },
  {
    id: 'boat',
    title: 'Row Row Row Your Boat',
    cnTitle: '划呀划小船',
    emoji: '⛵',
    melody: 'row',
    desc: '像水花一样欢快的轮唱歌：三个 row 练发音，一句 "Life is but a dream" 藏着诗意。',
    learn: [
      '发音练习：row 连说三次，练 /r/ 的圆唇音',
      '副词：gently（轻轻地）、merrily（快乐地）',
      '诗意句子：Life is but a dream（人生就像一场梦）'
    ],
    analysis: [
      '这首歌最早出版于1852年的美国，是全世界最著名的"轮唱"（round）歌曲：第一组先唱，唱到第二句时第二组从头加入，两个声部层层叠叠，像溪水上的回声。',
      '歌词短小却处处是宝：Row 连续三次，正好练习 /r/ 音；gently down the stream 描绘小船轻轻顺流而下；merrily 重复四次像溅起的水花；最后一句 Life is but a dream 充满诗意——人生就像一场温柔的梦。'
    ],
    vocab: [
      { w: 'row',     ipa: '/rəʊ/',    cn: '划船' },
      { w: 'boat',    ipa: '/bəʊt/',   cn: '小船' },
      { w: 'gently',  ipa: '/ˈdʒentli/', cn: '轻轻地' },
      { w: 'stream',  ipa: '/striːm/', cn: '小溪' },
      { w: 'merrily', ipa: '/ˈmerɪli/',cn: '快乐地' },
      { w: 'dream',   ipa: '/driːm/',  cn: '梦' }
    ],
    lines: [
      { en: 'Row, row, row your boat,',                 cn: '划、划、划你的小船' },
      { en: 'Gently down the stream.',                  cn: '轻轻地顺流而下' },
      { en: 'Merrily, merrily, merrily, merrily,',      cn: '开心呀，开心呀' },
      { en: 'Life is but a dream!',                     cn: '人生就像一场梦！' }
    ],
    quiz: [
      { q: '"row" 在歌里的意思是？', opts: ['划船', '跑步', '游泳', '唱歌'], a: 0,
        why: 'Row, row, row your boat——连续三个 row，就是"划船"。' },
      { q: '小船顺着什么往下划？', opts: ['小溪 stream', '马路', '雪山', '沙漠'], a: 0,
        why: '歌词 "Gently down the stream"——沿着小溪轻轻往下游划。' },
      { q: '"merrily" 的意思是？', opts: ['快乐地、高兴地', '慢慢地', '安静地', '生气地'], a: 0,
        why: 'merrily 是"快乐地"，歌里连唱四次，像水花一样欢快。' },
      { q: '"Life is but a dream" 可以理解为？', opts: ['人生就像一场梦', '生活很无聊', '我讨厌做梦', '梦都是假的'], a: 0,
        why: '这是全歌最有诗意的一句：人生如梦，要开心度过每一天。' },
      { q: '这首歌最常见的演唱形式是？', opts: ['轮唱：一组先唱，另一组随后加入', '独唱', '大合唱', '清唱剧'], a: 0,
        why: '它是经典的 round（轮唱）歌曲，两个声部此起彼伏像溪水回声。' }
    ]
  },
  {
    id: 'sheep',
    title: 'Baa Baa Black Sheep',
    cnTitle: '咩咩黑绵羊',
    emoji: '🐑',
    melody: 'twinkle',
    desc: '英国最古老的童谣之一：一问一答学对话，三袋羊毛学数数。',
    learn: [
      '问答句式：Have you any wool? — Yes sir, yes sir!',
      '数数启蒙：one / two / three 三袋羊毛',
      '同旋律彩蛋：它和《小星星》是同一个旋律！'
    ],
    analysis: [
      '这是英国最古老的童谣之一，1731年就有文字记录，至今传唱了近三百年。有趣的是，它的旋律和《Twinkle Twinkle Little Star》《字母歌 ABC》完全相同——唱会一首等于会了三首！',
      '歌曲以一问一答展开：有人问黑绵羊"你有羊毛吗？"，羊儿回答"有呀有呀，整整三大袋"，分别送给主人（master）、夫人（dame）和小男孩。孩子在一问一答中学会对话句式，在一、二、三里学会数数。'
    ],
    vocab: [
      { w: 'sheep',  ipa: '/ʃiːp/',  cn: '绵羊' },
      { w: 'black',  ipa: '/blæk/',  cn: '黑色的' },
      { w: 'wool',   ipa: '/wʊl/',   cn: '羊毛' },
      { w: 'bag',    ipa: '/bæɡ/',   cn: '袋子' },
      { w: 'master', ipa: '/ˈmɑːstə/', cn: '主人' },
      { w: 'lane',   ipa: '/leɪn/',  cn: '小巷' }
    ],
    lines: [
      { en: 'Baa, baa, black sheep, have you any wool?',        cn: '咩咩咩，黑绵羊，你有羊毛吗？' },
      { en: 'Yes sir, yes sir, three bags full.',               cn: '有呀有呀，整整三大袋' },
      { en: 'One for the master, and one for the dame,',        cn: '一袋给主人，一袋给夫人' },
      { en: 'And one for the little boy who lives down the lane.', cn: '还有一袋送给小巷尽头的小男孩' }
    ],
    quiz: [
      { q: '"Baa" 是哪种动物的叫声？', opts: ['绵羊', '山羊', '奶牛', '小猫'], a: 0,
        why: 'Baa 是绵羊的咩咩声，歌里的主角是一只黑绵羊。' },
      { q: 'black sheep 是什么颜色的羊？', opts: ['黑色', '白色', '棕色', '粉色'], a: 0,
        why: 'black 是黑色，black sheep 就是一身黑毛的绵羊。' },
      { q: '黑绵羊一共有几袋羊毛？', opts: ['三袋 three', '一袋 one', '两袋 two', '十袋 ten'], a: 0,
        why: '歌词 "three bags full"——整整三大袋，顺便学了数数。' },
      { q: '"wool" 的意思是？', opts: ['羊毛', '水', '木头', '面包'], a: 0,
        why: 'wool 是羊毛，绵羊的毛可以做成温暖的毛衣。' },
      { q: '三袋羊毛分别送给了谁？', opts: ['主人、夫人和小巷尽头的小男孩', '老师和医生', '爸爸和妈妈', '国王和女王'], a: 0,
        why: '一袋给 master（主人），一袋给 dame（夫人），一袋给 down the lane 的小男孩。' }
    ]
  }
];

/* ---------- 儿歌旋律（WebAudio 播放）----------
   notes: [音名, 拍数]；tempo: 每分钟拍数 */
const MELODIES = {
  twinkle: {
    tempo: 96,
    notes: [
      ['C4',1],['C4',1],['G4',1],['G4',1],['A4',1],['A4',1],['G4',2],
      ['F4',1],['F4',1],['E4',1],['E4',1],['D4',1],['D4',1],['C4',2],
      ['G4',1],['G4',1],['F4',1],['F4',1],['E4',1],['E4',1],['D4',2],
      ['G4',1],['G4',1],['F4',1],['F4',1],['E4',1],['E4',1],['D4',2],
      ['C4',1],['C4',1],['G4',1],['G4',1],['A4',1],['A4',1],['G4',2],
      ['F4',1],['F4',1],['E4',1],['E4',1],['D4',1],['D4',1],['C4',2]
    ]
  },
  row: {
    tempo: 108,
    notes: [
      ['C4',0.5],['C4',0.5],['C4',0.5],['D4',0.5],['E4',1.5],
      ['E4',0.5],['D4',0.5],['E4',0.5],['F4',0.5],['G4',2],
      ['C5',0.34],['C5',0.34],['C5',0.34],['G4',0.34],['G4',0.34],['G4',0.34],['E4',0.34],['E4',0.34],['E4',0.34],
      ['G4',0.5],['F4',0.5],['E4',0.5],['D4',0.5],['C4',2]
    ]
  }
};
/* Baa Baa Black Sheep 与小星星同旋律 */
MELODIES.sheep = MELODIES.twinkle;
