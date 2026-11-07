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

/* ---------- 唱儿歌：23首经典英文儿歌（前5首为推荐学习顺序） ---------- */
const RHYMES = [
  {
    id: 'hello',
    title: 'Hello Song',
    cnTitle: '问好歌',
    emoji: '👋',
    melody: 'hello',
    tag: '推荐先学',
    desc: '启蒙第一歌：挥手、微笑、拍拍手，用最欢乐的方式说"你好"。',
    learn: [
      '打招呼用语 Hello',
      '动作词 wave · smile · clap · jump',
      '句型 Say hello to...（向……问好）'
    ],
    analysis: [
      '问候是英语启蒙的第一课。这首歌把打招呼变成全身动作：挥手（wave）、微笑（smile）、拍手（clap）、跳一跳（jump），边唱边做，孩子很快就能在见面时自然地说出 Hello！'
    ],
    vocab: [
      { w: 'hello', ipa: '/həˈləʊ/', cn: '你好' },
      { w: 'wave',  ipa: '/weɪv/',  cn: '挥手' },
      { w: 'smile', ipa: '/smaɪl/', cn: '微笑' },
      { w: 'clap',  ipa: '/klæp/',  cn: '拍手' },
      { w: 'jump',  ipa: '/dʒʌmp/', cn: '跳' },
      { w: 'friend', ipa: '/frend/', cn: '朋友' }
    ],
    lines: [
      { en: 'Hello, hello, wave and smile!', cn: '你好你好，挥挥手，笑一笑！' },
      { en: 'Hello, hello, wave and smile!', cn: '你好你好，挥挥手，笑一笑！' },
      { en: 'Clap your hands and jump with me,', cn: '拍拍手，和我一起跳一跳，' },
      { en: 'Say hello to friends we see!', cn: '见到朋友问声好！' }
    ],
    quiz: [
      { q: '见到朋友时应该说什么？', opts: ['Hello!', 'Goodbye!', 'Go away!', 'Sleep!'], a: 0,
        why: 'Hello 是最基本的问候语，见面时大声说出来。' },
      { q: '"wave" 是什么动作？', opts: ['挥手', '跺脚', '点头', '转圈'], a: 0,
        why: 'wave 是挥手打招呼的动作。' },
      { q: '歌里让我们拍什么？', opts: ['手 hands', '脚', '头', '肩膀'], a: 0,
        why: 'Clap your hands——拍拍你的手。' },
      { q: '"smile" 的意思是？', opts: ['微笑', '大哭', '生气', '睡觉'], a: 0,
        why: 'smile 就是面带微笑。' },
      { q: '"Say hello to friends we see" 是让我们做什么？', opts: ['向见到的朋友问好', '和朋友再见', '躲开朋友', '叫醒朋友'], a: 0,
        why: '这句的意思是：向我们见到的朋友问好。' }
    ]
  },
  {
    id: 'finger',
    title: 'One Little Finger',
    cnTitle: '一根小手指',
    emoji: '☝️',
    melody: null,
    tag: '推荐先学',
    desc: '一根小手指点一点：指天花板、指地板，最后放在鼻子上！',
    learn: [
      '身体部位 finger · nose',
      '方位词 ceiling（上）· floor（下）',
      '动作短语 point to（指向）'
    ],
    analysis: [
      '这首经典手指谣是认识身体部位的第一课。玩法：伸出食指跟着节奏点一点，唱到 ceiling 时举高高、唱到 floor 时放低低、唱到 nose 时点在鼻尖上——方位词和身体词一起学。'
    ],
    vocab: [
      { w: 'finger',  ipa: '/ˈfɪŋɡə/',  cn: '手指' },
      { w: 'tap',     ipa: '/tæp/',     cn: '轻点' },
      { w: 'point',   ipa: '/pɔɪnt/',   cn: '指' },
      { w: 'ceiling', ipa: '/ˈsiːlɪŋ/', cn: '天花板' },
      { w: 'floor',   ipa: '/flɔː/',    cn: '地板' },
      { w: 'nose',    ipa: '/nəʊz/',    cn: '鼻子' }
    ],
    lines: [
      { en: 'One little finger, one little finger,', cn: '一根小手指，一根小手指，' },
      { en: 'Tap, tap, tap!', cn: '点点点！' },
      { en: 'Point to the ceiling, point to the floor,', cn: '指指天花板，指指地板，' },
      { en: 'Put it on your nose!', cn: '把它放在鼻子上！' }
    ],
    quiz: [
      { q: '"One little finger" 指的是什么？', opts: ['一根小手指', '一根脚趾', '一把尺子', '一支铅笔'], a: 0,
        why: 'finger 是手指，one little finger 就是一根小手指。' },
      { q: '歌里手指最后放在哪里？', opts: ['鼻子 nose', '耳朵', '肚子', '膝盖'], a: 0,
        why: 'Put it on your nose——把它放在鼻子上。' },
      { q: '"ceiling" 是房间的哪个部分？', opts: ['天花板', '地板', '窗户', '门'], a: 0,
        why: 'ceiling 在头顶上，floor 在脚下。' },
      { q: '"tap tap tap" 是什么动作？', opts: ['轻轻点一点', '大声唱歌', '快快跑', '用力踩'], a: 0,
        why: 'tap 是用手指轻轻点。' },
      { q: '这首歌主要帮我们学习什么？', opts: ['身体部位和方位词', '数字加减', '颜色名称', '动物叫声'], a: 0,
        why: '手指、鼻子、天花板、地板——身体词和上下方位一起学。' }
    ]
  },
  {
    id: 'body',
    title: 'Head Shoulders Knees and Toes',
    cnTitle: '头肩膀膝盖脚趾',
    emoji: '🧒',
    melody: 'body',
    tag: '推荐先学',
    desc: '最经典的身体部位歌，越唱越快，边指边唱浑身动起来！',
    learn: [
      '8 个身体部位词',
      '越唱越快的节奏挑战',
      '双手同步指认身体部位'
    ],
    analysis: [
      '这首传统儿歌风靡全球一百多年。玩法：唱到哪个词就用双手指哪个部位，唱熟后越唱越快，孩子在手忙脚乱的大笑中把全部身体词记得牢牢的——这就是最经典的 TPR 全身反应学习法。'
    ],
    vocab: [
      { w: 'head',     ipa: '/hed/',     cn: '头' },
      { w: 'shoulder', ipa: '/ˈʃəʊldə/', cn: '肩膀' },
      { w: 'knee',     ipa: '/niː/',     cn: '膝盖' },
      { w: 'toe',      ipa: '/təʊ/',     cn: '脚趾' },
      { w: 'eye',      ipa: '/aɪ/',      cn: '眼睛' },
      { w: 'mouth',    ipa: '/maʊθ/',    cn: '嘴巴' }
    ],
    lines: [
      { en: 'Head, shoulders, knees and toes, knees and toes,', cn: '头、肩膀、膝盖和脚趾，膝盖和脚趾，' },
      { en: 'Head, shoulders, knees and toes, knees and toes,', cn: '头、肩膀、膝盖和脚趾，膝盖和脚趾，' },
      { en: 'And eyes and ears and mouth and nose,', cn: '还有眼睛、耳朵、嘴巴和鼻子，' },
      { en: 'Head, shoulders, knees and toes, knees and toes.', cn: '头、肩膀、膝盖和脚趾，膝盖和脚趾。' }
    ],
    quiz: [
      { q: '歌里没有提到哪个身体部位？', opts: ['手 hand', '膝盖', '脚趾', '鼻子'], a: 0,
        why: '歌里唱了头、肩、膝、趾、眼、耳、嘴、鼻，唯独没有手。' },
      { q: '"knees" 指哪里？', opts: ['膝盖', '手肘', '脚踝', '后背'], a: 0,
        why: 'knee 是膝盖，弯腿时碰到的关节。' },
      { q: '"toes" 是什么？', opts: ['脚趾', '手指', '头发', '耳朵'], a: 0,
        why: 'toe 是脚趾，finger 才是手指。' },
      { q: '这首歌的经典玩法是？', opts: ['唱到哪个词就指哪个部位', '闭上眼睛唱', '躺着一动不动', '拍桌子'], a: 0,
        why: '边唱边指，越唱越快，才是这首歌的正确打开方式。' },
      { q: '按歌词顺序，第一个提到的部位是？', opts: ['头 head', '肩膀', '膝盖', '脚趾'], a: 0,
        why: '开口第一个词就是 Head！' }
    ]
  },
  {
    id: 'walking',
    title: 'Walking Walking',
    cnTitle: '走一走',
    emoji: '🚶',
    melody: null,
    tag: '推荐先学',
    desc: '走、跳、跑、停——一首歌让客厅变成律动操场！',
    learn: [
      '动作词 walk · hop · run · stop',
      '课堂指令 Now we stop!（现在停下）',
      '定格游戏练反应'
    ],
    analysis: [
      '这首传统律动歌把走、跳、跑、停四个动作串成循环。玩法：全家站起来跟着歌词做动作，唱到 "Now we stop!" 立刻定格不许动——停得越快越好玩，顺便学会课堂里最重要的指令 stop。'
    ],
    vocab: [
      { w: 'walk', ipa: '/wɔːk/', cn: '走' },
      { w: 'hop',  ipa: '/hɒp/',  cn: '单脚跳' },
      { w: 'run',  ipa: '/rʌn/',  cn: '跑' },
      { w: 'stop', ipa: '/stɒp/', cn: '停' },
      { w: 'now',  ipa: '/naʊ/',  cn: '现在' },
      { w: 'we',   ipa: '/wiː/',  cn: '我们' }
    ],
    lines: [
      { en: 'Walking, walking, walking, walking,', cn: '走一走，走一走，' },
      { en: 'Hop, hop, hop! Hop, hop, hop!', cn: '跳一跳，跳一跳！' },
      { en: 'Running, running, running, running,', cn: '跑一跑，跑一跑，' },
      { en: 'Now we stop! Now we stop!', cn: '现在停下！现在停下！' }
    ],
    quiz: [
      { q: '歌里没有出现哪个动作？', opts: ['睡觉 sleep', '走', '跳', '跑'], a: 0,
        why: '歌里唱了 walking、hop、running、stop，没有睡觉。' },
      { q: '"hop" 的意思是？', opts: ['单脚跳', '走路', '坐下', '拍手'], a: 0,
        why: 'hop 是像小兔子一样单脚蹦跳。' },
      { q: '唱到哪句要立刻一动不动？', opts: ['Now we stop!', 'Now we sing!', 'Now we run!', 'Now we hop!'], a: 0,
        why: 'stop 就是停下，定格不动最有趣。' },
      { q: '"walking" 是什么意思？', opts: ['正在走', '正在睡', '正在吃', '正在笑'], a: 0,
        why: 'walking 是 walk 的现在分词，表示正在走路。' },
      { q: '玩这首歌的正确姿势是？', opts: ['站起来边唱边做动作', '躺床上听', '只张嘴不出声', '捂住耳朵'], a: 0,
        why: '全身律动起来，动作词才记得快。' }
    ]
  },
  {
    id: 'happy',
    title: "If You're Happy",
    cnTitle: '如果你开心',
    emoji: '😄',
    melody: 'happy',
    tag: '推荐先学',
    desc: '如果开心你就拍拍手！情绪表达 + 全身动作的经典拍手歌。',
    learn: [
      '情绪词 happy（开心的）',
      '句型 If you\'re..., ...（如果你……）',
      '替换玩法：stamp 跺脚 · shout 喊一喊'
    ],
    analysis: [
      '这首流传百年的拍手歌是情绪表达的第一课。经典玩法是把 clap your hands 换成 stamp your feet（跺跺脚）、shout hooray（喊一声万岁），一段换一个动作，唱完情绪词和动作词都牢牢记住了。'
    ],
    vocab: [
      { w: 'happy', ipa: '/ˈhæpi/', cn: '开心的' },
      { w: 'know',  ipa: '/nəʊ/',   cn: '知道' },
      { w: 'clap',  ipa: '/klæp/',  cn: '拍手' },
      { w: 'face',  ipa: '/feɪs/',  cn: '脸' },
      { w: 'show',  ipa: '/ʃəʊ/',   cn: '表现出来' },
      { w: 'surely', ipa: '/ˈʃʊəli/', cn: '一定' }
    ],
    lines: [
      { en: "If you're happy and you know it, clap your hands!", cn: '如果你开心，就拍拍手！' },
      { en: "If you're happy and you know it, clap your hands!", cn: '如果你开心，就拍拍手！' },
      { en: "If you're happy and you know it, then your face will surely show it,", cn: '如果你开心，脸上一定看得出来，' },
      { en: "If you're happy and you know it, clap your hands!", cn: '如果你开心，就拍拍手！' }
    ],
    quiz: [
      { q: '歌里开心的时候要做什么？', opts: ['拍拍手', '睡觉', '大哭', '跑走'], a: 0,
        why: 'If you\'re happy and you know it, clap your hands! 开心就拍手。' },
      { q: '"happy" 的意思是？', opts: ['开心的', '伤心的', '生气的', '困的'], a: 0,
        why: 'happy 是开心、快乐。' },
      { q: '经典的第二段常把拍手换成什么？', opts: ['跺跺脚 stamp your feet', '闭上眼睛', '坐下', '喝水'], a: 0,
        why: 'stamp your feet 跺跺脚，是第二段的经典动作。' },
      { q: '"clap your hands" 是？', opts: ['拍手', '握手', '洗手', '举手'], a: 0,
        why: 'clap 是拍，clap your hands 就是拍拍手。' },
      { q: '歌词说开心时哪里会"看得出来"？', opts: ['脸 face', '鞋子', '书包', '窗户'], a: 0,
        why: 'then your face will surely show it——脸上一定看得出来。' }
    ]
  },
  {
    id: 'circle',
    title: 'Make a Circle',
    cnTitle: '画个圆圈',
    emoji: '⭕',
    melody: 'circle',
    desc: '大圆圈小圆圈，全家手拉手转呀转，一堂"形状+大小"音乐课。',
    learn: [
      '形状词 circle（圆圈）',
      '反义词 big ↔ small',
      '集体指令 Everybody...（大家……）'
    ],
    analysis: [
      '形状启蒙加集体游戏二合一：小朋友手拉手围成圈，唱到 big 时慢慢往后退把圈撑得大大的，唱到 small 时挤到中间缩成小小一团，最后一起坐下来。一首歌唱完，big、small 和 circle 全部掌握。'
    ],
    vocab: [
      { w: 'circle',     ipa: '/ˈsɜːkl/',   cn: '圆圈' },
      { w: 'big',        ipa: '/bɪɡ/',      cn: '大的' },
      { w: 'small',      ipa: '/smɔːl/',    cn: '小的' },
      { w: 'round',      ipa: '/raʊnd/',    cn: '圆的' },
      { w: 'everybody',  ipa: '/ˈevribɒdi/', cn: '每个人' },
      { w: 'together',   ipa: '/təˈɡeðə/',  cn: '一起' }
    ],
    lines: [
      { en: 'Come along and make a circle, round and round!', cn: '来来来，围个大圆圈，转呀转！' },
      { en: 'Make it big, big, big!', cn: '圈变大，大！大！大！' },
      { en: 'Make it small, small, small!', cn: '圈变小，小！小！小！' },
      { en: 'Everybody sit right down!', cn: '大家一起坐下来！' }
    ],
    quiz: [
      { q: '这首歌画的形状是什么？', opts: ['圆圈 circle', '正方形', '三角形', '星星'], a: 0,
        why: 'Make a circle——画一个大圆圈。' },
      { q: '"big" 的反义词是？', opts: ['small', 'tall', 'long', 'new'], a: 0,
        why: 'big 大 ↔ small 小，正好是歌里的一对反义词。' },
      { q: '唱到 "Make it small" 时大家应该？', opts: ['把圈变小挤在一起', '跑出房间', '闭上眼睛', '站到椅子上'], a: 0,
        why: 'small 就要缩小圈圈，大家挤到中间。' },
      { q: '"round and round" 形容怎么转？', opts: ['一圈又一圈', '上下跳', '左右摆', '前后倒'], a: 0,
        why: 'round and round 就是不停地转圈。' },
      { q: '"everybody" 是什么意思？', opts: ['每个人', '一个人', '两个人', '没有人'], a: 0,
        why: 'everybody 就是所有人、大家。' }
    ]
  },
  {
    id: 'alphabet',
    title: 'The Alphabet Song',
    cnTitle: '字母歌',
    emoji: '🔤',
    melody: 'twinkle',
    desc: '26 个字母的经典唱法——它和小星星是同一个旋律！',
    learn: [
      '26 个字母的顺序',
      '旋律与小星星完全相同',
      '自然拼读（Phonics）第一步'
    ],
    analysis: [
      '字母歌用的正是《小星星》的旋律（都来自同一首法国民谣），唱会一首等于会两首！26 个字母按顺序分成六个乐句，先跟着唱熟顺序，再逐步认读每个字母的形状，这是自然拼读的第一步。'
    ],
    vocab: [
      { w: 'letter',   ipa: '/ˈletə/',   cn: '字母' },
      { w: 'alphabet', ipa: '/ˈælfəbet/', cn: '字母表' },
      { w: 'know',     ipa: '/nəʊ/',     cn: '知道' },
      { w: 'sing',     ipa: '/sɪŋ/',     cn: '唱' },
      { w: 'next',     ipa: '/nekst/',   cn: '下一个' },
      { w: 'song',     ipa: '/sɒŋ/',     cn: '歌曲' }
    ],
    lines: [
      { en: 'A B C D E F G,', cn: 'A B C D E F G，' },
      { en: 'H I J K L M N O P,', cn: 'H I J K L M N O P，' },
      { en: 'Q R S, T U V,', cn: 'Q R S，T U V，' },
      { en: 'W X, and Y and Z,', cn: 'W X，还有 Y 和 Z，' },
      { en: 'Now I know my ABCs,', cn: '现在我会念字母啦，' },
      { en: "Next time won't you sing with me?", cn: '下次和我一起唱好吗？' }
    ],
    quiz: [
      { q: '字母歌的旋律和哪首歌相同？', opts: ['小星星', '生日歌', '划小船', '两只老虎'], a: 0,
        why: '它们都来自同一首法国民谣，旋律一模一样。' },
      { q: '英文字母表一共有多少个字母？', opts: ['26 个', '20 个', '30 个', '52 个'], a: 0,
        why: '26 个字母，从 A 到 Z。' },
      { q: '按歌的顺序，字母 G 后面是哪个？', opts: ['H', 'F', 'J', 'I'], a: 0,
        why: 'A B C D E F G H——G 后面是 H。' },
      { q: '"Now I know my ABCs" 的意思是？', opts: ['现在我会念字母啦', '现在我想睡觉', '我认识小猫', '我们去公园'], a: 0,
        why: 'know my ABCs 就是认识、会念字母表。' },
      { q: '学字母主要是为了给什么打基础？', opts: ['自然拼读 Phonics', '数学加法', '画画', '跑步'], a: 0,
        why: '认识字母后才能学习字母音，进入自然拼读。' }
    ]
  },
  {
    id: 'clean',
    title: 'Clean Up!',
    cnTitle: '收拾歌',
    emoji: '🧹',
    melody: 'clean',
    desc: '玩具回家歌：唱着唱着房间就干净了，收纳好习惯悄悄养成。',
    learn: [
      '日常指令 Clean up!（收拾）',
      '归类玩法：toys 进 box、books 上 shelf',
      '表扬用语 Well done!（真棒）'
    ],
    analysis: [
      '把收拾玩具变成一首歌，是最聪明的习惯养成法。玩法：唱一句收一样——toys 放进 box、books 摆上 shelf，唱完正好收完。孩子学会的不只是单词，还有"玩完要收好"的日常好习惯。'
    ],
    vocab: [
      { w: 'clean', ipa: '/kliːn/',   cn: '干净的；打扫' },
      { w: 'toy',   ipa: '/tɔɪ/',     cn: '玩具' },
      { w: 'box',   ipa: '/bɒks/',    cn: '箱子' },
      { w: 'shelf', ipa: '/ʃelf/',    cn: '架子' },
      { w: 'room',  ipa: '/ruːm/',    cn: '房间' },
      { w: 'tidy',  ipa: '/ˈtaɪdi/',  cn: '整洁的' }
    ],
    lines: [
      { en: "Clean up, clean up, everybody, let's clean up!", cn: '收拾啦，收拾啦，大家一起来收拾！' },
      { en: 'Toys go in the box, one by one,', cn: '玩具回箱子，一个接一个，' },
      { en: 'Books go on the shelf, one by one,', cn: '图书上架，一本接一本，' },
      { en: 'Now our room is clean — well done!', cn: '房间变干净啦——真棒！' }
    ],
    quiz: [
      { q: '这首歌是让我们做什么？', opts: ['收拾玩具', '吃点心', '睡觉', '看电视'], a: 0,
        why: 'Clean up 就是收拾、整理。' },
      { q: '歌里 toys 应该放回哪里？', opts: ['箱子 box', '床上', '桌子上', '口袋里'], a: 0,
        why: 'Toys go in the box——玩具回箱子。' },
      { q: '"clean" 的意思是？', opts: ['干净', '很吵', '很大', '很饿'], a: 0,
        why: 'clean 是干净，收拾完房间就 clean 了。' },
      { q: '收拾完房间，歌里怎么夸我们？', opts: ['Well done! 真棒', 'Go away!', 'Sleep now!', 'Run fast!'], a: 0,
        why: 'Well done 是常用的表扬语。' },
      { q: '"one by one" 是什么意思？', opts: ['一个接一个', '全部一起', '一个都没有', '两个两个'], a: 0,
        why: 'one by one 就是挨个儿来，一件一件收。' }
    ]
  },
  {
    id: 'bath',
    title: 'The Bath Song',
    cnTitle: '洗澡歌',
    emoji: '🛁',
    melody: 'bath',
    desc: '哗啦哗啦洗澡歌：泡泡、搓搓、冲冲，爱上洗澡不怕水。',
    learn: [
      '洗漱词 bath · wash',
      '身体部位复习',
      '地道表达 from head to toe（从头到脚）'
    ],
    analysis: [
      '洗澡是最生活化的英语课堂：泡沫是 bubble、水温是 warm、搓一搓是 scrub。这首歌把整个洗澡流程唱出来，唱到哪个部位就搓哪里，还顺便学会一个地道表达——from head to toe，从头到脚。'
    ],
    vocab: [
      { w: 'bath',   ipa: '/bɑːθ/',   cn: '洗澡' },
      { w: 'wash',   ipa: '/wɒʃ/',    cn: '洗' },
      { w: 'bubble', ipa: '/ˈbʌbl/',  cn: '泡泡' },
      { w: 'hair',   ipa: '/heə/',    cn: '头发' },
      { w: 'toe',    ipa: '/təʊ/',    cn: '脚趾' },
      { w: 'clean',  ipa: '/kliːn/',  cn: '干净的' }
    ],
    lines: [
      { en: 'Bath time, bath time, splish splash!', cn: '洗澡啦，洗澡啦，哗啦哗啦！' },
      { en: 'Wash your hair and wash your toes,', cn: '洗洗头发，洗洗脚趾，' },
      { en: 'Bubbles up and bubbles down,', cn: '泡泡飘上去，泡泡落下来，' },
      { en: "Now we're clean from head to toe!", cn: '从头到脚都干净啦！' }
    ],
    quiz: [
      { q: '"bath time" 是什么时间？', opts: ['洗澡时间', '睡觉时间', '吃饭时间', '游戏时间'], a: 0,
        why: 'bath 是洗澡，bath time 就是洗澡时间。' },
      { q: '"bubbles" 是什么？', opts: ['泡泡', '毛巾', '肥皂盒', '水龙头'], a: 0,
        why: 'bubble 是洗澡时搓出来的泡泡。' },
      { q: '"from head to toe" 的意思是？', opts: ['从头到脚', '只有一个头', '脚在最上面', '从头跳到脚'], a: 0,
        why: '从头顶 head 到脚趾 toe，表示全身。' },
      { q: '歌里 wash 了哪些地方？', opts: ['头发和脚趾', '只有手', '只有脸', '牙齿和耳朵'], a: 0,
        why: 'Wash your hair and wash your toes。' },
      { q: '"splish splash" 模拟什么声音？', opts: ['水声哗啦哗啦', '敲门声', '打雷声', '铃声'], a: 0,
        why: 'splish splash 是水花四溅的声音。' }
    ]
  },
  {
    id: 'hungry',
    title: 'Are You Hungry?',
    cnTitle: '你饿吗',
    emoji: '🍎',
    melody: 'hungry',
    desc: '你饿吗？我饿了！一问一答 + 食物单词，点心时间先唱它。',
    learn: [
      '问句 Are you hungry?',
      '回答 Yes, I am!',
      '礼貌用语 ...please（请给我……）'
    ],
    analysis: [
      '一问一答是口语启蒙的黄金句型。玩法：拿真实的水果玩问答游戏——孩子问 Are you hungry?，家长答 Yes, I am! An apple, please! 再交换角色。yum yum（好吃）和 glug glug（咕咚咕咚）两个拟声词孩子最爱模仿。'
    ],
    vocab: [
      { w: 'hungry',  ipa: '/ˈhʌŋɡri/', cn: '饿的' },
      { w: 'thirsty', ipa: '/ˈθɜːsti/', cn: '渴的' },
      { w: 'apple',   ipa: '/ˈæpl/',    cn: '苹果' },
      { w: 'water',   ipa: '/ˈwɔːtə/',  cn: '水' },
      { w: 'please',  ipa: '/pliːz/',   cn: '请' },
      { w: 'yummy',   ipa: '/ˈjʌmi/',   cn: '好吃的' }
    ],
    lines: [
      { en: 'Are you hungry? Yes, I am!', cn: '你饿了吗？是的，我饿了！' },
      { en: 'An apple, please — yum, yum, yum!', cn: '请给我一个苹果——真好吃！' },
      { en: 'Are you thirsty? Yes, I am!', cn: '你渴了吗？是的，我渴了！' },
      { en: 'Some water, please — glug, glug, glug!', cn: '请给我一点水——咕噜咕噜！' }
    ],
    quiz: [
      { q: '"Are you hungry?" 是什么意思？', opts: ['你饿了吗', '你困了吗', '你会唱歌吗', '你走了吗'], a: 0,
        why: 'hungry 是饿，这句就是问"你饿了吗"。' },
      { q: '肯定回答应该怎么说？', opts: ['Yes, I am!', 'No way!', 'Go away!', 'See you!'], a: 0,
        why: 'Yes, I am! 是标准肯定回答。' },
      { q: '"thirsty" 的意思是？', opts: ['渴的', '饿的', '累的', '开心的'], a: 0,
        why: 'thirsty 是口渴，hungry 才是肚子饿。' },
      { q: '歌里请别人给东西时用了哪个礼貌词？', opts: ['please 请', 'sorry', 'go', 'run'], a: 0,
        why: 'An apple, please——加上 please 才有礼貌。' },
      { q: '"glug glug glug" 是什么的声音？', opts: ['喝水的咕咚声', '汽车喇叭', '小鸟叫', '打雷'], a: 0,
        why: 'glug glug 是大口喝水的声音。' }
    ]
  },
  {
    id: 'pink',
    title: 'I See Something Pink',
    cnTitle: '我看见粉色',
    emoji: '🐷',
    melody: 'pink',
    desc: '颜色侦探歌：我看见粉色的东西，它藏在哪里？',
    learn: [
      '颜色词 pink',
      '句型 I see something...（我看见……的东西）',
      '寻宝玩法：替换颜色接着找'
    ],
    analysis: [
      '把颜色学习变成寻宝游戏：先唱出目标颜色，再在家里找同色的东西，每找到一个就换一段新歌词——red 的苹果、blue 的杯子、green 的叶子。句型 I see something... 一通百通，看到什么颜色都能唱。'
    ],
    vocab: [
      { w: 'pink',  ipa: '/pɪŋk/',   cn: '粉色' },
      { w: 'see',   ipa: '/siː/',    cn: '看见' },
      { w: 'find',  ipa: '/faɪnd/',  cn: '找到' },
      { w: 'color', ipa: '/ˈkʌlə/',  cn: '颜色' },
      { w: 'pig',   ipa: '/pɪɡ/',    cn: '小猪' },
      { w: 'look',  ipa: '/lʊk/',    cn: '看' }
    ],
    lines: [
      { en: 'Pink, pink, I see something pink!', cn: '粉色，粉色，我看见粉色的东西！' },
      { en: 'Pink, pink, I see something pink!', cn: '粉色，粉色，我看见粉色的东西！' },
      { en: 'Find it, find it — what is it?', cn: '找一找，找一找——它是什么？' },
      { en: "It's a little pig — pink, pink, pink!", cn: '是一只小猪——粉粉粉！' }
    ],
    quiz: [
      { q: '歌里要找什么颜色？', opts: ['粉色 pink', '蓝色', '绿色', '黑色'], a: 0,
        why: 'I see something pink——我看见粉色的东西。' },
      { q: '最后发现粉色的东西是什么？', opts: ['小猪', '大象', '青蛙', '乌鸦'], a: 0,
        why: "It's a little pig——是一只粉色小猪。" },
      { q: '"I see something pink" 的意思是？', opts: ['我看见粉色的东西', '我听见粉色', '我吃了个粉色的东西', '我丢了一个粉色'], a: 0,
        why: 'see 是看见，something pink 是粉色的东西。' },
      { q: '玩颜色寻宝时可以怎么改歌词？', opts: ['换成别的颜色接着找', '不能改任何词', '只能晚上唱', '必须倒着唱'], a: 0,
        why: '把 pink 换成 red、blue 等颜色，就能一直玩下去。' },
      { q: '"find" 的意思是？', opts: ['找到', '藏起来', '吃掉', '扔掉'], a: 0,
        why: 'find it 就是把它找出来。' }
    ]
  },
  {
    id: 'ducks',
    title: 'Five Little Ducks',
    cnTitle: '五只小鸭子',
    emoji: '🦆',
    melody: null,
    desc: '五只小鸭翻山去，数数 + 鸭子叫，越唱越少真着急！',
    learn: [
      '数字 5 → 1 倒数',
      '拟声词 quack（嘎嘎）',
      '短语 came back（回来了）'
    ],
    analysis: [
      '经典倒数歌：五只小鸭一只只走丢，最后又全部回到妈妈身边。玩法：伸出手指数鸭子，唱到 four 就收起一根手指，第二段把 five 换成 four 接着唱，一首歌练完 5 到 1 的倒数。'
    ],
    vocab: [
      { w: 'duck',    ipa: '/dʌk/',    cn: '鸭子' },
      { w: 'five',    ipa: '/faɪv/',   cn: '五' },
      { w: 'hill',    ipa: '/hɪl/',    cn: '小山' },
      { w: 'far away', ipa: '/fɑː əˈweɪ/', cn: '遥远' },
      { w: 'mother',  ipa: '/ˈmʌðə/',  cn: '妈妈' },
      { w: 'back',    ipa: '/bæk/',    cn: '回来' }
    ],
    lines: [
      { en: 'Five little ducks went out one day,', cn: '五只小鸭子有一天出去玩，' },
      { en: 'Over the hills and far away,', cn: '翻过小山丘，走到好远好远，' },
      { en: 'Mother duck said, "Quack, quack, quack,"', cn: '鸭妈妈喊：嘎，嘎，嘎，' },
      { en: 'But only four little ducks came back.', cn: '可是只有四只小鸭回了家。' }
    ],
    quiz: [
      { q: '一开始有几只小鸭子出去玩？', opts: ['五只', '三只', '八只', '十只'], a: 0,
        why: 'Five little ducks——五只小鸭子。' },
      { q: '鸭妈妈的叫声用英语怎么写？', opts: ['Quack quack', 'Moo moo', 'Woof woof', 'Meow'], a: 0,
        why: 'quack 是鸭子嘎嘎叫的拟声词。' },
      { q: '第一段结束时回来了几只？', opts: ['四只', '五只', '两只', '一只'], a: 0,
        why: 'But only four little ducks came back——只剩四只回来。' },
      { q: '"over the hills" 是说小鸭子？', opts: ['翻过小山', '掉进河里', '躲进洞里', '飞上天'], a: 0,
        why: 'hill 是小山，over the hills 就是翻过山丘。' },
      { q: '这首歌最适合边唱边做什么？', opts: ['掰手指数数', '闭眼睛', '捂耳朵', '踮脚尖'], a: 0,
        why: '五根手指代表五只鸭子，越唱越少正好倒数。' }
    ]
  },
  {
    id: 'bed',
    title: 'Ten in the Bed',
    cnTitle: '十个在床上',
    emoji: '🛏️',
    melody: null,
    desc: '床上挤了十个小朋友，翻呀翻呀掉下床，倒数大作战！',
    learn: [
      '数字 10 → 1 倒数',
      '短语 roll over（翻身）',
      '睡前仪式 Good night!'
    ],
    analysis: [
      '睡前倒数神曲：从十唱到一，每翻一次身就"掉"下去一个。玩法：竖起十根手指当床上挤着的小朋友，唱一段弯下一根。唱到最后一个小朋友可以说 Good night，特别适合当睡前仪式。'
    ],
    vocab: [
      { w: 'bed',      ipa: '/bed/',     cn: '床' },
      { w: 'ten',      ipa: '/ten/',     cn: '十' },
      { w: 'roll over', ipa: '/rəʊl ˈəʊvə/', cn: '翻身' },
      { w: 'fall out', ipa: '/fɔːl aʊt/', cn: '掉出去' },
      { w: 'little',   ipa: '/ˈlɪtl/',   cn: '小的' },
      { w: 'nine',     ipa: '/naɪn/',    cn: '九' }
    ],
    lines: [
      { en: 'There were ten in the bed, and the little one said,', cn: '床上躺着十个，最小的那个说：' },
      { en: '"Roll over, roll over!"', cn: '"翻身啦，翻身啦！"' },
      { en: 'So they all rolled over, and one fell out.', cn: '大家翻了个身，一个掉下床。' },
      { en: 'Now there are nine in the bed!', cn: '现在床上剩九个啦！' }
    ],
    quiz: [
      { q: '一开始床上有几个小朋友？', opts: ['十个', '五个', '两个', '二十个'], a: 0,
        why: 'Ten in the bed——床上十个。' },
      { q: '小朋友喊的口令是什么？', opts: ['Roll over! 翻身', 'Stand up!', 'Sit down!', 'Wake up!'], a: 0,
        why: 'roll over 就是翻身。' },
      { q: '每段结束后掉下去几个？', opts: ['一个', '两个', '五个', '十个'], a: 0,
        why: 'one fell out——每次掉一个，从十倒数到一。' },
      { q: '"fell out" 是什么意思？', opts: ['掉出去', '睡着了', '坐好了', '爬高了'], a: 0,
        why: 'fall out 是从床上滚出去。' },
      { q: '这首歌特别适合在什么时候唱？', opts: ['睡前', '跑步时', '吃饭时', '洗澡时'], a: 0,
        why: '越唱人越少、越唱越安静，是天然的哄睡歌。' }
    ]
  },
  {
    id: 'open',
    title: 'Open Shut Them',
    cnTitle: '打开合上',
    emoji: '👐',
    melody: null,
    desc: '张开手、合上手、拍一拍、放腿上——小手游戏的万能开场。',
    learn: [
      '反义词 open ↔ shut',
      '身体部位 lap（腿上）',
      '课堂常规：一首歌从热身到坐好'
    ],
    analysis: [
      '传统小手谣，也是课堂上最常用的收心儿歌。玩法：说 open 时张开双手，说 shut 时快速握拳，说 clap 时拍两下，说 lap 时把手放在腿上坐端正——从手部热身到安静坐好，一首歌全搞定。'
    ],
    vocab: [
      { w: 'open',  ipa: '/ˈəʊpən/', cn: '打开' },
      { w: 'shut',  ipa: '/ʃʌt/',    cn: '合上' },
      { w: 'clap',  ipa: '/klæp/',   cn: '拍手' },
      { w: 'little', ipa: '/ˈlɪtl/', cn: '小小的' },
      { w: 'lap',   ipa: '/læp/',    cn: '腿上' },
      { w: 'hand',  ipa: '/hænd/',   cn: '手' }
    ],
    lines: [
      { en: 'Open, shut them, open, shut them,', cn: '张开手，合上手，' },
      { en: 'Give a little clap!', cn: '轻轻拍一拍！' },
      { en: 'Open, shut them, open, shut them,', cn: '张开手，合上手，' },
      { en: 'Put them in your lap!', cn: '小手放腿上！' }
    ],
    quiz: [
      { q: '"open" 的反义词是歌里的哪个词？', opts: ['shut', 'clap', 'lap', 'little'], a: 0,
        why: 'open 打开 ↔ shut 合上，正好一对反义词。' },
      { q: '最后小手要放在哪里？', opts: ['腿上 lap', '头上', '口袋里', '肩膀上'], a: 0,
        why: 'Put them in your lap——把手放腿上。' },
      { q: '"give a little clap" 是什么动作？', opts: ['轻轻拍拍手', '大声喊', '跺跺脚', '摇摇头'], a: 0,
        why: 'clap 是拍手，little 表示轻轻地。' },
      { q: '这首歌玩的是身体哪个部位的游戏？', opts: ['手', '脚', '耳朵', '肚子'], a: 0,
        why: 'open 和 shut 张合的都是小手。' },
      { q: '老师常用这首歌让小朋友做什么？', opts: ['安静坐好', '跑出教室', '大声哭', '睡觉'], a: 0,
        why: '唱完把手放腿上，就是坐好准备上课的信号。' }
    ]
  },
  {
    id: 'shoes',
    title: 'Put on Your Shoes',
    cnTitle: '穿上鞋子',
    emoji: '👟',
    melody: 'shoes',
    desc: '出门准备歌：穿鞋、拉拉链、背书包——唱完正好出门！',
    learn: [
      '动词短语 put on · zip up · grab',
      '出门四步流程',
      '告别语 bye-bye'
    ],
    analysis: [
      '把出门流程变成歌：穿鞋、拉拉链、背书包、开门，唱完孩子也准备好了。玩法：真的边唱边做，put on、zip up、grab 三个动词短语在真实动作中自然习得，比死记硬背快十倍。'
    ],
    vocab: [
      { w: 'shoes',   ipa: '/ʃuːz/',    cn: '鞋子' },
      { w: 'put on',  ipa: '/pʊt ɒn/',  cn: '穿上' },
      { w: 'zip',     ipa: '/zɪp/',     cn: '拉链' },
      { w: 'coat',    ipa: '/kəʊt/',    cn: '外套' },
      { w: 'bag',     ipa: '/bæɡ/',     cn: '书包' },
      { w: 'door',    ipa: '/dɔː/',     cn: '门' }
    ],
    lines: [
      { en: 'Put on your shoes, one, two!', cn: '穿上小鞋子，一，二！' },
      { en: 'Zip up your coat, too!', cn: '外套拉链拉拉好！' },
      { en: 'Grab your bag and wave bye-bye,', cn: '背起书包挥挥手，说再见，' },
      { en: 'Out the door we go!', cn: '推开门，出发喽！' }
    ],
    quiz: [
      { q: '"put on your shoes" 是什么意思？', opts: ['穿上你的鞋子', '脱下鞋子', '洗鞋子', '扔鞋子'], a: 0,
        why: 'put on 是穿上，脱下是 take off。' },
      { q: 'coat 上的 zip 是用来做什么的？', opts: ['拉上外套', '喝水', '写字', '打电话'], a: 0,
        why: 'zip 是拉链，zip up 就是拉上。' },
      { q: '出门前背的是什么？', opts: ['书包 bag', '椅子', '枕头', '西瓜'], a: 0,
        why: 'Grab your bag——背上书包。' },
      { q: '歌里数到几就出发？', opts: ['三', '十', '五', '八'], a: 0,
        why: 'One, two——数到二，其实加上 go 正好三拍。' },
      { q: '"Out the door we go" 的意思是？', opts: ['我们出门啦', '我们回家了', '我们睡觉了', '门打不开'], a: 0,
        why: 'out the door 出门去，we go 我们走。' }
    ]
  },
  {
    id: 'week',
    title: 'Days of the Week',
    cnTitle: '星期歌',
    emoji: '📅',
    melody: null,
    desc: '星期一到星期日，七天排排队，天天唱一遍，日子说得出！',
    learn: [
      '七个星期词的顺序',
      '句型 Which day is it today?（今天星期几）',
      '每日晨圈仪式：唱到今天拍拍手'
    ],
    analysis: [
      '星期是抽象概念，最好的学法是每天唱一遍：早晨起床唱到今天是星期几就停下来拍拍手。七天按顺序分成两行，第三句点明"七天等于一星期"，最后一句变成日常问句 Which day is it today?'
    ],
    vocab: [
      { w: 'Sunday',  ipa: '/ˈsʌndeɪ/',  cn: '星期日' },
      { w: 'Monday',  ipa: '/ˈmʌndeɪ/',  cn: '星期一' },
      { w: 'week',    ipa: '/wiːk/',     cn: '星期' },
      { w: 'day',     ipa: '/deɪ/',      cn: '天' },
      { w: 'today',   ipa: '/təˈdeɪ/',   cn: '今天' },
      { w: 'seven',   ipa: '/ˈsevn/',    cn: '七' }
    ],
    lines: [
      { en: 'Sunday, Monday, Tuesday,', cn: '星期日，星期一，星期二，' },
      { en: 'Wednesday, Thursday, Friday, Saturday!', cn: '星期三，星期四，星期五，星期六！' },
      { en: 'Seven days make a week,', cn: '七天组成一个星期，' },
      { en: 'Which day is it today?', cn: '今天星期几？' }
    ],
    quiz: [
      { q: '一个星期有几天？', opts: ['七天', '五天', '十天', '三十天'], a: 0,
        why: 'Seven days make a week——七天一星期。' },
      { q: '"today" 的意思是？', opts: ['今天', '明天', '昨天', '每天'], a: 0,
        why: 'today 是今天，tomorrow 才是明天。' },
      { q: '按歌的顺序，Monday 后面是哪一天？', opts: ['Tuesday', 'Sunday', 'Friday', 'Saturday'], a: 0,
        why: 'Sunday, Monday, Tuesday——顺序不能乱。' },
      { q: '"Which day is it today?" 在问什么？', opts: ['今天星期几', '几点了', '你是谁', '去哪里'], a: 0,
        why: '这是询问星期的标准问句。' },
      { q: '这首歌最适合什么时候唱？', opts: ['每天早上', '只在生日', '只在过年', '每五年一次'], a: 0,
        why: '天天唱一遍，七天顺序自然记住。' }
    ]
  },
  {
    id: 'goaway',
    title: 'Go Away!',
    cnTitle: '走开',
    emoji: '👻',
    melody: 'goaway',
    desc: '勇气小歌：走开走开，我才不怕你！黑夜影子全赶跑。',
    learn: [
      '短语 go away（走开）',
      '情绪词 scared 害怕 · brave 勇敢',
      '勇气口号游戏：边唱边做推出去的手势'
    ],
    analysis: [
      '情绪教育小帮手：怕黑、怕影子是小朋友常见的恐惧。这首歌把"赶走恐惧"变成有力量的口号 Go away!，边唱边双手用力往外推。唱完别忘了抱一抱，夸夸勇敢的小歌唱家。'
    ],
    vocab: [
      { w: 'go away', ipa: '/ɡəʊ əˈweɪ/', cn: '走开' },
      { w: 'shadow',  ipa: '/ˈʃædəʊ/',   cn: '影子' },
      { w: 'scared',  ipa: '/skeəd/',    cn: '害怕的' },
      { w: 'brave',   ipa: '/breɪv/',    cn: '勇敢的' },
      { w: 'say',     ipa: '/seɪ/',      cn: '说' },
      { w: 'little',  ipa: '/ˈlɪtl/',    cn: '小的' }
    ],
    lines: [
      { en: 'Go away, go away, spooky little shadow,', cn: '走开，走开，吓人的小影子，' },
      { en: 'Go away, go away, I am not scared!', cn: '走开，走开，我才不害怕！' },
      { en: 'I am brave and I will say,', cn: '我很勇敢，我要大声说：' },
      { en: 'Go away, go away!', cn: '走开！走开！' }
    ],
    quiz: [
      { q: '"Go away!" 是什么意思？', opts: ['走开', '你好', '晚安', '谢谢'], a: 0,
        why: 'go away 就是走开、离开。' },
      { q: '歌里的小朋友害怕什么？', opts: ['影子', '冰淇淋', '小猫咪', '气球'], a: 0,
        why: 'spooky little shadow——吓人的小影子。' },
      { q: '"brave" 的意思是？', opts: ['勇敢的', '害怕的', '困的', '饿的'], a: 0,
        why: 'I am brave——我很勇敢。' },
      { q: '唱 Go away 时可以做什么手势？', opts: ['双手往外推', '捂住眼睛', '蹲下抱头', '拍拍肚子'], a: 0,
        why: '用力推出去的动作让口号更有力量。' },
      { q: '歌里说害怕时应该怎么办？', opts: ['勇敢说出来并赶走恐惧', '躲进被子里哭', '再也不出门', '把灯全关掉'], a: 0,
        why: '大声说 Go away，恐惧就被赶跑啦。' }
    ]
  },
  {
    id: 'shark',
    title: 'Baby Shark',
    cnTitle: '鲨鱼宝宝',
    emoji: '🦈',
    melody: 'shark',
    desc: '全世界小朋友都会唱的鲨鱼一家：嘟嘟嘟嘟，一开口就停不下来！',
    learn: [
      '家庭称谓 baby · mommy · daddy',
      '节拍拟声词 doo doo doo',
      '手部动作：小手一开一合扮鲨鱼嘴'
    ],
    analysis: [
      '这首从露营地唱遍全世界的神曲，魔力在于超简单的旋律和"嘟嘟嘟"的魔性节拍。经典玩法是把 baby 换成 mommy（鲨鱼妈妈）、daddy（鲨鱼爸爸）、grandma（鲨鱼奶奶）接着唱，一双小手一开一合扮鲨鱼嘴，全家都变成鲨鱼！'
    ],
    vocab: [
      { w: 'shark',  ipa: '/ʃɑːk/',   cn: '鲨鱼' },
      { w: 'baby',   ipa: '/ˈbeɪbi/', cn: '宝宝' },
      { w: 'mommy',  ipa: '/ˈmʌmi/',  cn: '妈妈' },
      { w: 'daddy',  ipa: '/ˈdædi/',  cn: '爸爸' },
      { w: 'swim',   ipa: '/swɪm/',   cn: '游泳' },
      { w: 'family', ipa: '/ˈfæməli/', cn: '一家人' }
    ],
    lines: [
      { en: 'Baby shark, doo doo doo doo doo doo,', cn: '鲨鱼宝宝，嘟嘟嘟嘟嘟嘟，' },
      { en: 'Baby shark, doo doo doo doo doo doo,', cn: '鲨鱼宝宝，嘟嘟嘟嘟嘟嘟，' },
      { en: 'Baby shark, doo doo doo doo doo doo,', cn: '鲨鱼宝宝，嘟嘟嘟嘟嘟嘟，' },
      { en: 'Baby shark!', cn: '鲨鱼宝宝！' }
    ],
    quiz: [
      { q: '这首歌的主角是谁？', opts: ['鲨鱼宝宝', '小猫咪', '大象', '恐龙'], a: 0,
        why: 'Baby shark——鲨鱼宝宝。' },
      { q: '"doo doo doo" 是什么？', opts: ['歌曲的节拍拟声词', '鲨鱼说的话', '一种食物', '一个地方'], a: 0,
        why: 'doo doo doo 是哼唱的节拍，不是真的词义。' },
      { q: '"baby shark" 的妈妈用英语怎么说？', opts: ['Mommy shark', 'Sister shark', 'Baby baby', 'Teacher shark'], a: 0,
        why: '第二段把 baby 换成 mommy 就是鲨鱼妈妈。' },
      { q: '鲨鱼生活在哪里？', opts: ['海里', '天上', '沙漠', '树上'], a: 0,
        why: '鲨鱼是大海里的鱼。' },
      { q: '这首歌的经典手部动作是什么？', opts: ['小手一开一合扮鲨鱼嘴', '捂住耳朵', '拍头顶', '叉腰'], a: 0,
        why: '手掌一开一合，就像鲨鱼的大嘴巴。' }
    ]
  },
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
    melody: 'farm',
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
    melody: 'bus',
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

/* Old MacDonald Had a Farm（简谱近似编配，C大调）
   A="Old MacDonald had a farm"  EIO="E-I-E-I-O"
   MOO="With a moo-moo here and a moo-moo there"
   HERE="Here a moo, there a moo, everywhere a moo-moo" */
const FARM_A    = [['C4',.5],['C4',.5],['C4',.5],['G4',.5],['A4',.5],['A4',.5],['G4',1.5]];
const FARM_EIO  = [['E4',.5],['E4',.5],['C4',.5],['C4',.5],['D4',.5],['D4',.5],['C4',1.5]];
const FARM_MOO  = [['C4',.5],['C4',.5],['E4',.5],['E4',.5],['C4',.5],['C4',.5],['C4',.5],['E4',.5],['E4',.5],['C4',1.5]];
const FARM_HERE = [['E4',.5],['E4',.5],['E4',.5],['E4',.5],['E4',.5],['E4',.5],['E4',.5],['E4',.5],['E4',.5],['E4',.5],['E4',.5],['E4',1.5]];
const FARM_VERSE = [].concat(FARM_A, FARM_EIO, FARM_A, FARM_EIO, FARM_MOO, FARM_HERE, FARM_A, FARM_EIO);
MELODIES.farm = { tempo: 116, notes: FARM_VERSE.concat(FARM_VERSE) };

/* ---- 联网核实的传统旋律（参考 Paul Hardy's Songs Tunebook、piano-keyboard-guide） ---- */

/* Head, Shoulders, Knees and Toes（C大调） */
MELODIES.body = { tempo: 118, notes: [
  ['G4',2],['A4',.5],['G4',.5],['F#4',.5],['G4',.5],['E4',1],['G4',.5],['G4',.5],['G4',2],
  ['G4',2],['A4',.5],['G4',.5],['F#4',.5],['G4',.5],['D4',1],['G4',.5],['G4',.5],['G4',.5],['F4',.5],['E4',.5],['D4',.5],
  ['C4',1],['E4',1],['G4',1],['C5',1],['D5',.5],['C5',.5],['B4',.5],['C5',.5],['A4',2],
  ['B4',2],['B4',.5],['G4',.5],['A4',.5],['B4',.5],['C5',1],['C4',.5],['C4',.5],['C4',2]
] };

/* If You're Happy and You Know It（C大调，四乐句） */
MELODIES.happy = { tempo: 105, notes: [
  ['G4',.5],['G4',.5],['C5',.5],['C5',.5],['C5',.5],['C5',.5],['C5',.5],['C5',.5],['B4',.5],['C5',.5],['D5',2.5],
  ['G4',.5],['G4',.5],['D5',.5],['D5',.5],['D5',.5],['D5',.5],['D5',.5],['D5',.5],['C5',.5],['D5',.5],['E5',2.5],
  ['E5',.5],['E5',.5],['F5',.5],['F5',.5],['F5',.5],['F5',.5],['A4',.5],['A4',.5],['F5',.5],['F5',.5],['E5',.5],['E5',.5],['E5',.5],['D5',.5],['C5',.5],['C5',.5],['E5',.5],['E5',.5],
  ['D5',.5],['D5',.5],['D5',.5],['C5',.5],['B4',.5],['B4',.5],['A4',.5],['B4',.5],['C5',3]
] };

/* The Wheels on the Bus（= Mulberry Bush 传统旋律，G大调 6/8，三段诗节） */
MELODIES.bus = { tempo: 120, notes: (function () {
  const verse = [].concat(
    [['G4',.5],['G4',.5],['G4',.5],['G4',1],['B4',.5]],
    [['D5',1],['B4',.5],['G4',1],['G4',.5]],
    [['A4',1],['A4',.5],['A4',1],['G4',.5]],
    [['F#4',1],['E4',.5],['D4',1.5]],
    [['G4',.5],['G4',.5],['G4',.5],['G4',1],['B4',.5]],
    [['D5',1],['B4',.5],['G4',1],['B4',.5]],
    [['A4',1],['A4',.5],['D4',.5],['E4',.5],['F#4',.5]],
    [['G4',1.5],['G4',1.5]]
  );
  return verse.concat(verse, verse);
})() };

/* Baby Shark（G大调） */
MELODIES.shark = { tempo: 132, notes: [
  ['D4',.5],['E4',.5],['G4',1],['G4',.5],['G4',.5],['G4',.5],['G4',.5],['G4',.5],['G4',1.5],
  ['D4',.5],['E4',.5],['G4',1],['G4',.5],['G4',.5],['G4',.5],['G4',.5],['G4',.5],['G4',1.5],
  ['D4',.5],['E4',.5],['G4',1],['G4',.5],['G4',.5],['G4',.5],['G4',.5],['G4',.5],['G4',1.5],
  ['D4',.5],['E4',.5],['G4',2]
] };

/* ---- 原创编配（配套站内原创改编歌词的简单吟唱旋律） ---- */
MELODIES.hello = { tempo: 100, notes: [
  ['G4',.5],['G4',.5],['E4',.5],['E4',.5],['G4',.5],['G4',.5],['E4',1.5],
  ['G4',.5],['G4',.5],['E4',.5],['E4',.5],['G4',.5],['G4',.5],['E4',1.5],
  ['C5',.5],['C5',.5],['G4',.5],['G4',.5],['A4',.5],['A4',.5],['G4',1.5],
  ['E4',.5],['E4',.5],['G4',.5],['G4',.5],['A4',.5],['G4',.5],['E4',.5],['C4',1]
] };
MELODIES.circle = { tempo: 108, notes: [
  ['C4',.5],['C4',.5],['D4',.5],['D4',.5],['E4',.5],['E4',.5],['F4',.5],['G4',.5],['E4',.5],['D4',.5],['C4',1.5],
  ['C4',.5],['C4',.5],['G4',1],['G4',1],['G4',1.5],
  ['E4',.5],['E4',.5],['C4',.5],['C4',.5],['C4',1.5],
  ['G4',.5],['G4',.5],['F4',.5],['E4',.5],['D4',.5],['C4',.5],['C4',1.5]
] };
MELODIES.clean = { tempo: 116, notes: [
  ['C4',.5],['C4',.5],['G4',.5],['G4',.5],['D4',.5],['D4',.5],['D4',.5],['D4',.5],['E4',.5],['D4',.5],['C4',1.5],
  ['E4',.5],['E4',.5],['E4',.5],['E4',.5],['G4',1],['E4',.5],['D4',.5],['C4',1.5],
  ['E4',.5],['E4',.5],['E4',.5],['E4',.5],['G4',1],['E4',.5],['D4',.5],['C4',1.5],
  ['G4',.5],['G4',.5],['G4',.5],['E4',.5],['E4',1],['D4',.5],['C4',1.5]
] };
MELODIES.bath = { tempo: 112, notes: [
  ['C4',.5],['C4',.5],['E4',.5],['E4',.5],['G4',.5],['G4',1.5],
  ['G4',.5],['G4',.5],['F4',.5],['F4',.5],['E4',.5],['E4',.5],['C4',1.5],
  ['C4',.5],['E4',.5],['G4',1],['E4',.5],['G4',.5],['E4',.5],['C4',1.5],
  ['G4',.5],['G4',.5],['G4',.5],['G4',.5],['E4',.5],['E4',.5],['C4',1.5]
] };
MELODIES.hungry = { tempo: 108, notes: [
  ['E4',.5],['E4',.5],['G4',.5],['G4',1],['E4',.5],['D4',.5],['C4',1.5],
  ['C4',.5],['C4',.5],['E4',1],['G4',1],['G4',.5],['E4',.5],['C4',1.5],
  ['E4',.5],['E4',.5],['G4',.5],['G4',1],['E4',.5],['D4',.5],['C4',1.5],
  ['C4',.5],['C4',.5],['E4',1],['G4',1],['G4',.5],['E4',.5],['C4',1.5]
] };
MELODIES.pink = { tempo: 112, notes: [
  ['E4',.5],['E4',.5],['C4',.5],['C4',.5],['E4',.5],['E4',.5],['G4',1.5],
  ['E4',.5],['E4',.5],['C4',.5],['C4',.5],['E4',.5],['E4',.5],['G4',1.5],
  ['G4',.5],['G4',.5],['G4',.5],['G4',.5],['E4',.5],['D4',.5],['E4',1],
  ['C4',.5],['C4',.5],['E4',.5],['E4',.5],['G4',1],['G4',.5],['E4',.5],['C4',1.5]
] };
MELODIES.shoes = { tempo: 112, notes: [
  ['C4',.5],['C4',.5],['E4',.5],['G4',1],['E4',.5],['D4',1],
  ['C4',.5],['C4',.5],['E4',.5],['G4',1],['E4',1.5],
  ['G4',.5],['G4',.5],['G4',.5],['E4',.5],['E4',.5],['G4',.5],['G4',1],
  ['G4',.5],['G4',.5],['E4',.5],['D4',.5],['C4',1.5]
] };
MELODIES.goaway = { tempo: 104, notes: [
  ['C4',.5],['C4',.5],['E4',1],['C4',.5],['C4',.5],['E4',1],['G4',.5],['G4',.5],['G4',.5],['G4',.5],['E4',.5],['E4',1],
  ['C4',.5],['C4',.5],['E4',1],['C4',.5],['C4',.5],['E4',1],['A4',.5],['G4',.5],['E4',.5],['C4',1.5],
  ['E4',.5],['E4',.5],['G4',1],['E4',.5],['E4',.5],['D4',.5],['C4',1],
  ['G4',.5],['G4',.5],['E4',.5],['G4',.5],['G4',.5],['C4',1.5]
] };

/* 唱歌模式：每句歌词对应的旋律起始音符序号（与 RHYMES[].lines 一一对应）
   —— 用于卡拉OK式逐句高亮：到该句音乐的开始时间点亮字幕与场景动画 */
const RHYME_MELODY_LINES = {
  twinkle: [0, 7, 14, 21, 28, 35],   /* 小星星：6句 × 7音 */
  alphabet: [0, 7, 14, 21, 28, 35],  /* 字母歌与小星星同旋律 */
  sheep:   [0, 7, 14, 28],           /* 黑绵羊：第3、4句各占两个乐句 */
  row:     [0, 5, 10, 19],           /* 小船：5+5+9+5 个音 */
  farm:    [0, 14, 28, 38, 50, 64, 78, 92, 102, 114],
  body:    [0, 9, 21, 30],           /* 头肩膀膝盖脚 */
  happy:   [0, 11, 22, 40],          /* 拍手歌 */
  bus:     [0, 9, 16, 25, 32, 41, 48, 57, 64, 73, 80, 89],  /* 巴士：3段 × 4句 */
  shark:   [0, 9, 18, 27],           /* 鲨鱼宝宝 */
  hello:   [0, 7, 14, 21],
  circle:  [0, 11, 16, 21],
  clean:   [0, 11, 19, 27],
  bath:    [0, 6, 13, 20],
  hungry:  [0, 7, 14, 21],
  pink:    [0, 7, 14, 21],
  shoes:   [0, 6, 11, 18],
  goaway:  [0, 12, 22, 29]
  /* 暂无旋律（默认朗读模式）：One Little Finger / Walking Walking /
     Five Little Ducks / Ten in the Bed / Open Shut Them / Days of the Week */
};
