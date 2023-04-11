module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    // permalink: "/:year/:month/:day/:slug",
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        // 上 / 下一篇链接 默认值 true
        nextLinks: true,
        prevLinks: true,

        activeHeaderLinks: true, // 活动的标题链接 默认值：true

        // 顶部导航栏
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: '百度', link: 'https://baidu.com' },
        ],

        // 侧边栏
        sidebarDepth: 2, // 侧边栏深度
        displayAllHeaders: true, // 显示所有页面的标题链接 默认值：false
        sidebar: [
            '/',
            '/guide/',
            '/guide/code.md'
        ],
        
    }
  }