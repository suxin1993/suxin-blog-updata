/*
 * @Author: your name
 * @Date: 2021-09-15 18:16:52
 * @LastEditTime: 2021-09-26 20:17:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /suxin-blog-updata/docs/.vuepress/config.js
 */
let base = process.argv[4] == "gitlee" ? "/suxin1993.gitee.io/" : ""
module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '前端规范',
    description: '前端规范',
    head: [
        ['link', { rel: 'icon', href: '/web/images/animation_300_kt8qxxan.gif' }],
        ['script', { src: '/js/lottie-player.js' }] // 引入外部js文件
    ],

    dest: './dist', // 构建后目录

    base: base,



    // 主题配置
    themeConfig: {
        logo: '/images/animation_300_kt8qxxan.gif',
        darkMode: true,
        backToHome: '返回首页',
        repoLabel: '示例',
        repo: '', // 仓库地址

        // 不同子路径下的页面会使用不同的侧边栏
        sidebar: {
            '/guide/': [{ text: '指南', children: ['/guide/', '/guide/architecture.md', '/guide/code-statute.md', '/guide/vue-standard.md', '/guide/ESLint-rules.md', '/guide/commit-rules.md', '/guide/branch-rules.md'], }],
            '/tutorials/': [{ text: '教程', children: ['/tutorials/'], }],
            '/reference/': [{ text: '参考', children: ['/reference/'], }],
            '/log/': [{ text: '更新日志', children: ['/log/'], }],
            '/resume/': [{ text: '简历', children: ['/resume/'], }],

        },

        navbar: [
            // 嵌套 Group - 最大深度为 2
            { text: '首页', link: '/' },
            { text: '简历', link: '/resume/' },
            { text: '指南', link: '/guide/' },
            { text: '教程', link: '/tutorials/' },
            { text: '参考', link: '/reference/' },
            { text: '更新日志', link: '/log/' }

        ],
    },
    lastUpdated: 'Last Updated', // string | boolean

    //搜索插件
    plugins: [
        [
            '@vuepress/plugin-search', // 默认情况下，只搜索页面标题和小标题
        ],
    ],
}