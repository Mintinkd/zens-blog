---
title: 前端性能优化的 12 个落地实践
description: 从关键渲染路径到资源加载，给出可量化的优化清单。
pubDate: 2026-07-09
category: 前端
tags: [性能, 前端, JavaScript]
cover: purple
readingTime: 10 分钟
---

## 先量再优化

性能优化最忌拍脑袋。先用 Lighthouse 或 WebPageTest 拿到基线，找出真正的瓶颈：

> 没有度量的优化，只是感觉良好。

## 关键渲染路径

- 把首屏 CSS 内联，非首屏样式延迟加载；
- JS 默认加 `defer`，长任务拆成小块；
- 图片用现代格式（WebP/AVIF）并带尺寸避免布局抖动。

```html
<img src="hero.avif" width="1200" height="600" alt="首页主视觉" loading="lazy" />
```

## 资源加载策略

1. 路由级代码分割，首屏只加载必要 JS；
2. 字体用 `font-display: swap`，避免阻塞文字；
3. 静态资源加长效缓存，配合内容哈希做失效。

## 运行时性能

- 滚动与缩放事件节流 / `requestAnimationFrame`；
- 大列表虚拟滚动；
- 用 `content-visibility: auto` 跳过屏外渲染。

这 12 条不是银弹，但落到每个页面，都能换来可感知的流畅度提升。
