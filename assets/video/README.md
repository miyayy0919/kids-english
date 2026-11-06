# 视频素材目录（Seedance 生成的动画短片放这里）

网站「看动画」模块会自动检测本目录：

- 放置 `<儿歌id>.mp4` 后，打开对应儿歌的「🎬 看动画」将**自动切换为播放生成的动画短片**（优先于内置 SVG+TTS 播放器）；
- 未放置视频时，使用内置的 SVG 场景动画 + 浏览器英文人声逐句吟诵（保证任何时刻完整可用）；
- 播放器右下角提供「使用内置动画播放器」按钮，可随时切回逐句跟读模式。

## 文件命名

| 文件名 | 儿歌 |
|---|---|
| `twinkle.mp4` | 一闪一闪小星星 Twinkle Twinkle Little Star |
| `farm.mp4` | 老麦克唐纳有个农场 Old MacDonald Had a Farm |
| `bus.mp4` | 巴士上的车轮 The Wheels on the Bus |
| `boat.mp4` | 划呀划小船 Row Row Row Your Boat |
| `sheep.mp4` | 咩咩黑绵羊 Baa Baa Black Sheep |

建议：16:9 横屏、1080p、时长 30–60 秒。

## Seedance 生视频提示词建议

统一风格 + 人声吟诵要求，示例（以小星星为例）：
```
Bright candy-style 2D animation, vibrant saturated colors, soft rounded shapes.
Scene: deep indigo night sky over rolling hills, a big golden star twinkles,
rises higher and glows like a diamond; a small cottage window lights up.
A warm child-friendly English voice slowly recites the nursery rhyme line by line:
"Twinkle, twinkle, little star, how I wonder what you are..."
Gentle pacing, subtitles not needed, 16:9, 40 seconds.
```

歌词全文见 `js/data.js` 中对应儿歌的 `lines` 字段（每句英文 + 中文翻译）。
