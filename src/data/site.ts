// 站点级配置：被导航、页脚、页面共用。
// 改站名 / 作者 / 导航 / 社交，只需动这里。

export const SITE = {
  name: '林深小筑',
  title: '林深小筑 · 个人博客',
  description: '一个关于代码、设计与思考的个人博客。',
  author: {
    name: '林深',
    role: '前端工程师 / 设计师 · 自由职业',
    initial: '林',
    bio: '用代码和设计，构建更易维护的世界。',
  },
};

export const NAV = [
  { label: '首页', href: '/' },
  { label: '文章', href: '/posts' },
  { label: '分类', href: '/category' },
  { label: '标签', href: '/tag' },
];

export const SOCIAL = [
  { label: '邮箱', href: 'mailto:hi@linshen.blog' },
  { label: 'GitHub', href: 'https://github.com/' },
];

// 分类元信息（可选）：描述 + 配色 badge。未在这里的分类用默认样式。
export const CATEGORY_META: Record<string, { desc: string; badge: string }> = {
  前端: { desc: '界面与交互的工程实现。', badge: 'c1' },
  设计系统: { desc: '令牌、组件与一致体验。', badge: 'c2' },
  性能: { desc: '让网站更快、更可感知。', badge: 'c3' },
  随笔: { desc: '关于工程与成长的思考。', badge: 'c4' },
};
