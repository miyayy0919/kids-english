# 图片素材目录（Seedream 生成素材放这里）

网站会自动检测本目录，按以下文件名放置即可替换内置插画：

| 文件名 | 用途 |
|---|---|
| `home-hero.png` | （预留）首页横幅插画，建议 1600×660 |
| `twinkle.png` | 《一闪一闪小星星》儿歌封面，建议 1280×800 |
| `farm.png` | 《老麦克唐纳有个农场》儿歌封面，建议 1280×800 |
| `bus.png` | 《巴士上的车轮》儿歌封面，建议 1280×800 |
| `boat.png` | 《划呀划小船》儿歌封面，建议 1280×800 |
| `sheep.png` | 《咩咩黑绵羊》儿歌封面，建议 1280×800 |

> 说明：当前版本儿歌封面直接由内置 SVG 场景渲染；若放置了上述图片，
> 可在 `js/app.js` 的歌曲卡片渲染中改用 `assets/img/<id>.png` 作为封面（接口已预留 `ASSETS.img(id)`）。

## Seedream 生图提示词建议（保持风格统一）

统一风格前缀：
```
Bright candy-style flat illustration for a children's English learning website,
vibrant saturated colors (lemon yellow, coral red, sky blue, mint green, grape purple),
soft rounded shapes, thick sticker-like outlines, cheerful and playful, clean cream background
```

各儿歌主题：
- **twinkle**: deep indigo night sky, big smiling crescent moon, one large golden star shining above rolling hills, tiny cottage with a lit window
- **farm**: red barn with colorful bunting, a happy white cow with black patches and a yellow duck by a pond, green grass, bright sun
- **bus**: a cheerful yellow school bus with round wheels driving through a candy-colored pastel town, blue sky, fluffy clouds
- **boat**: a little red boat with a white sail floating on a turquoise stream, warm sun, orange fish jumping, lily pads
- **sheep**: a fluffy black-faced sheep on a bright green meadow, three sacks of golden wool on a sandy lane, spring flowers
