# ⭐ 小星星英语乐园 · Twinkle English

面向儿童的**英语启蒙学习网站**：学单词 + 练口语 + 5 首经典英文儿歌。
借鉴"沉浸式诗境动画"理念——让用户**看见它、听见它、读懂它**。

纯前端静态网站，零构建依赖，完全离线可用。

## 📁 目录结构

```
kids-english/
├── index.html          # 单页应用外壳（首页·学单词·练口语·唱儿歌）
├── css/style.css       # 明快糖果风样式 + 全部 SVG 场景动画
├── js/
│   ├── data.js         # 内容数据：5首儿歌（歌词/词汇/解析/测验）、6主题48单词、4组口语情景
│   ├── tts.js          # 浏览器英文人声朗读 + WebAudio 旋律播放
│   ├── scenes.js       # 5个糖果风 SVG 动画场景（逐句歌词触发动画）
│   └── app.js          # 路由与全部交互逻辑
└── assets/             # Seedream/Seedance 素材替换接口（见各目录 README）
    ├── img/            # 生成插画放这里
    └── video/          # 生成动画短片放这里（放好后"看动画"自动切换为视频播放）
```

## 🚀 本地运行

```bash
cd kids-english
python -m http.server 8000
```

浏览器打开 <http://localhost:8000> 即可。

> 也可以直接双击 `index.html` 打开——所有功能（含人声朗读）均可离线使用；
> 仅「🎤 跟读录音」需要通过 localhost 或 https 访问（浏览器安全策略）。

## 🧩 功能模块

### 🔤 学单词
6 大主题 × 8 个启蒙单词（动物/水果/颜色/数字/身体/家庭）：
**一页一个单词的翻卡模式**——翻页自动朗读发音，支持「🔤 拼读」逐个字母念、💬 例句朗读；
可用按钮、键盘 ←/→ 方向键或触屏左右滑动翻页，底部 emoji 条可快捷跳转；
学完一个主题可玩「听音选图」计分小游戏。

### 🎤 练口语
4 组情景对话（打招呼/自我介绍/礼貌用语/日常问答）：
🔊 示范朗读 → 🎤 录音跟读 → 自动回放对比；Chrome/Edge 下还有**语音识别相似度打分**。

### 🎵 唱儿歌（核心模块）
23 首经典英文儿歌，每首三个学习环节：

| 环节 | 内容 |
|---|---|
| 📖 学一学 | 双语歌词（点句朗读）、儿歌背景解析、核心词汇卡、🎹 听旋律（17首） |
| 🎬 看动画 | SVG 场景动画 + **双模式**：🎵 唱歌模式（默认，WebAudio 旋律伴奏、卡拉OK式逐句高亮跟唱）/ 📖 朗读模式（英文人声逐句吟诵）；播放/停止/慢速/点句跳转；17/23 首可唱，其余 6 首（One Little Finger / Walking Walking / Five Little Ducks / Ten in the Bed / Open Shut Them / Days of the Week）暂用朗读模式 |
| 🏆 测一测 | 每首 5 道选择题（词义/背景/理解），即时判分 + 解析，星级评价并保存最佳成绩 |

儿歌清单（前 5 首为推荐学习顺序）：Hello Song · One Little Finger · Head Shoulders Knees and Toes · Walking Walking · If You're Happy · Make a Circle · The Alphabet Song · Clean Up! · The Bath Song · Are You Hungry? · I See Something Pink · Five Little Ducks · Ten in the Bed · Open Shut Them · Put on Your Shoes · Days of the Week · Go Away! · Baby Shark · Twinkle Twinkle Little Star · Old MacDonald Had a Farm · The Wheels on the Bus · Row Row Row Your Boat · Baa Baa Black Sheep

> 版权说明：传统歌曲（Head Shoulders、字母歌、五只小鸭、Ten in the Bed 等）采用公有领域标准歌词；Hello! / Clean Up! / Make a Circle 等为同主题的**原创改编版**歌词，可放心公开使用。

## 🎨 素材方案说明（重要）

本环境暂无 Seedream（生图）/ Seedance（生视频）技能，当前素材为：

- **插画**：手工绘制的糖果风 SVG 场景（`scenes.js`），CSS 动画随歌词逐句触发；
- **人声吟诵**：浏览器 SpeechSynthesis 英文语音，逐句同步字幕高亮；
- **旋律**：WebAudio 合成，共 17 首——小星星/黑绵羊/字母歌/小船/农场 5 首凭可靠记忆编配；**头肩膀膝盖脚/拍手歌/巴士/鲨鱼宝宝 4 首旋律经联网核实**（参考 Paul Hardy's Songs Tunebook，CC BY-NC-SA；piano-keyboard-guide.com）；问好歌/收拾歌等 8 首为配套站内原创歌词的**原创简单编配**；

网站已预留 `assets/img/`、`assets/video/` 替换接口：**安装好 Seedream/Seedance 插件后**，
按目录内 README 的命名与提示词生成素材放入，"看动画"将自动切换为播放生成的带人声动画短片。
详见 `assets/img/README.md` 与 `assets/video/README.md`。

## 🌐 浏览器建议

- 推荐 **Chrome / Edge**（英文语音质量最好，且支持语音识别打分）；
- 首次使用请打开系统音量；跟读功能需允许麦克风权限；
- Firefox 无语音识别，录音回放仍可用。
