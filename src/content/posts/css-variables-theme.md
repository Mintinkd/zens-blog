---
title: 用 CSS 变量实现一套可切换的明暗主题
description: 从设计令牌到运行时切换，完整记录主题系统的落地过程。
pubDate: 2026-08-12
category: 前端
tags: [CSS, 设计系统, 可访问性]
cover: blue
readingTime: 8 分钟
---

## 为什么需要主题系统

早期项目里，颜色往往是散落在各处的硬编码值。一旦要支持深色模式，就不得不为每一处写两套样式，维护成本呈指数级上升。

主题系统的本质，是把「语义」和「取值」解耦：**组件只认 `--text-1`、`--brand`，不关心它今天到底是黑色还是白色**。

> 好的设计令牌，应该让换肤这件事从「重写样式」变成「换一组变量」。

## 设计令牌与变量

把颜色、圆角、间距都收敛到 `:root` 下的 CSS 变量：

```css
:root {
  --bg: #f5f6f8;
  --text-1: #18191c;
  --brand: #0052d9;
  --r-card: 12px;
}
```

深色模式只需要给 `[data-theme="dark"]` 覆盖同一组变量名，组件代码一行都不用改。

## 运行时切换

切换逻辑非常轻量——修改根节点的属性，并记住用户偏好：

```js
const next = current === 'dark' ? 'light' : 'dark';
document.documentElement.setAttribute('data-theme', next);
localStorage.setItem('theme', next);
```

为避免刷新瞬间的白屏闪烁，需要在 `<head>` 顶部内联一段脚本，在 CSS 应用前就定好主题。

## 可访问性考量

- 深色模式不要纯黑配纯白，留出对比缓冲更护眼；
- 尊重系统的 `prefers-color-scheme` 作为默认；
- 切换按钮要带 `aria-label`，让读屏用户也能操作。

主题系统一旦搭好，后续新增页面几乎零成本——这也是它能「自己长大」的原因。
