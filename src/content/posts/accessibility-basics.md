---
title: 可访问性：不止是对比度
description: 从语义化标签到键盘可达，聊聊容易被忽视的 a11y 细节。
pubDate: 2026-05-30
category: 随笔
tags: [可访问性, 前端]
cover: green
readingTime: 5 分钟
---

## 语义化是一切的起点

很多「无障碍问题」其实不是专门做出来，而是被错误的标签制造出来的。一个 `<div onclick>` 再怎么美化，也不如原生 `<button>` 对读屏友好。

```html
<button type="button">切换主题</button>
```

## 键盘可达

- 所有交互元素都要能用 Tab 到达、Enter/Space 触发；
- 焦点要有清晰可见的轮廓，别用 `outline: none` 一刀切掉；
- 复杂组件提供 `aria-*` 与合理的焦点管理。

## 不要忘了「动」

`prefers-reduced-motion` 媒体查询能帮对动画敏感的用户关掉动效：

```css
@media (prefers-reduced-motion: reduce) {
  * { transition: none; animation: none; }
}
```

可访问性不是上线前的补丁，而是贯穿设计到实现的默认项。
