---
title: 理解 CSS Grid 的自动布局与换行
description: 掌握 grid-auto-flow 与 minmax，让响应式栅格不再靠猜。
pubDate: 2026-07-28
category: 前端
tags: [CSS, 前端]
cover: green
readingTime: 6 分钟
---

## 从固定列数到自适应

最常见的误用，是把列数写死：

```css
.grid { grid-template-columns: repeat(3, 1fr); }
```

这在宽屏没问题，窄屏却会挤成一团。真正的响应式应该用 `minmax` + `auto-fill`：

```css
.grid {
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
```

浏览器会按容器宽度自动决定放几列，空间不够就换行。

## grid-auto-flow 控制流向

默认情况下，Grid 按行填充。若要优先纵向排布，可改为：

```css
.grid { grid-auto-flow: column; }
```

配合 `grid-auto-columns` 设定隐式列宽，就能做出横向滚动的卡片轨道。

## 几个实战要点

- 用 `1fr` 让列等分剩余空间；
- 给卡片设 `min-width: 0`，避免内容把栅格撑破；
- 媒体查询只用来微调间距与断点，别用来重写整套布局。

掌握了自动布局，绝大多数列表页都能用一套规则通吃桌面与移动端。
