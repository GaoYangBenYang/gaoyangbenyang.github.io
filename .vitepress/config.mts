import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: "Blogs & Notes",
    //logo: '/logo.png',
    //启用深色模式
    appearance: 'dark',

    // 主题配置
    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        //左上角logo
        //logo: '/logo.png',
        // 导航栏
        nav: [
            {
                text: 'Java',
                items:
                    [
                        {
                            text: 'Docs',
                            items: [
                                {
                                    text: 'Java Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                        {
                            text: 'Spring',
                            items: [
                                {
                                    text: 'Spring Docs',
                                    link: '/preface'
                                },
                                {
                                    text: 'Spring Boot Docs',
                                    link: '/preface'
                                },
                                {
                                    text: 'Spring Cloud Docs',
                                    link: '/preface'
                                },
                                {
                                    text: 'Spring AI Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                        {
                            text: 'Mybatis',
                            items: [
                                {
                                    text: 'Mybatis Docs',
                                    link: '/preface'
                                },
                                {
                                    text: 'Mybatis Plus Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                        {
                            text: 'GraalVM',
                            items: [
                                {
                                    text: 'GraalVM Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                    ]
            },
            {
                text: 'Vue',
                items:
                    [
                        {
                            text: 'Docs',
                            items: [
                                {
                                    text: 'Vue Docs',
                                    link: '/preface'
                                },
                                {
                                    text: 'TypeScript Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                        {
                            text: 'Vue',
                            items: [
                                {
                                    text: 'Vue Router',
                                    link: '/preface'
                                },
                            ]
                        },
                        {
                            text: 'Vite',
                            items: [
                                {
                                    text: 'Vite Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                    ]
            },
            {
                text: 'Golang',
                items:
                    [
                        {
                            text: 'Docs',
                            items: [
                                {
                                    text: 'Golang Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                    ]
            },
            {
                text: '数据库',
                items:
                    [
                        {
                            text: 'Redis',
                            items: [
                                {
                                    text: 'Redis Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                        {
                            text: 'MySQL',
                            items: [
                                {
                                    text: 'MySQL Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                        {
                            text: 'Elasticsearch',
                            items: [
                                {
                                    text: 'Elasticsearch Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                    ]
            },
            {
                text: '消息队列',
                items:
                    [
                        {
                            text: 'Kafka',
                            items: [
                                {
                                    text: 'Kafka Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                        {
                            text: 'RabbitMQ',
                            items: [
                                {
                                    text: 'RabbitMQ Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                    ]
            },
            {
                text: '进阶之路',
                items:
                    [
                        {
                            text: '容器化',
                            items: [
                                {
                                    text: 'Docker Docs',
                                    link: '/preface'
                                },
                                {
                                    text: 'Kubernetes Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                        {
                            text: '依赖管理',
                            items: [
                                {
                                    text: 'Nodejs Docs',
                                    link: '/preface'
                                },
                                {
                                    text: 'Maven Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                        {
                            text: '版本控制',
                            items: [
                                {
                                    text: 'Git Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                        {
                            text: '数据结构与算法',
                            items: [
                                {
                                    text: '数据结构',
                                    link: '/preface'
                                },
                                {
                                    text: '算法',
                                    link: '/preface'
                                },
                            ]
                        },
                        {
                            text: '设计模式',
                            items: [
                                {
                                    text: '设计模式',
                                    link: '/preface'
                                },
                            ]
                        },
                        {
                            text: 'CI/CD',
                            items: [
                                {
                                    text: 'Github Actions',
                                    link: '/preface'
                                },
                            ]
                        },
                        {
                            text: 'CI/CD',
                            items: [
                                {
                                    text: 'GraalVM Docs',
                                    link: '/preface'
                                },
                            ]
                        },
                    ]
            },
            {
                text: '面试题',
                items:
                    [
                        {
                            text: 'Java',
                            items: [
                                {
                                    text: 'Java基础',
                                    link: '/preface'
                                },
                                {
                                    text: 'Java进阶',
                                    link: '/preface'
                                },
                            ]
                        },
                        {
                            text: 'MySQL',
                            items: [
                                {
                                    text: 'MySQL基础',
                                    link: '/preface'
                                },
                            ]
                        },
                    ]
            },
        ],
        // 侧边栏
        // sidebar: [
        //     {
        //         text: 'Examples',
        //         items: [
        //             {text: 'Markdown Examples', link: '/markdown-examples'},
        //             {text: 'Runtime API Examples', link: '/api-examples'}
        //         ]
        //     }
        // ],
        // 导航栏链接
        socialLinks: [
            {icon: 'github', link: 'https://github.com/GaoYangBenYang'}
        ],
        //markdown配置
        markdown: {
            //行号显示
            lineNumbers: true,

            //时间线
            config: (md) => {
                md.use(timeline);
            },

            // 开启图片懒加载
            image: {
                lazyLoading: true
            },

        },
        //本地搜索
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                },
                            },
                        },
                    },
                },
            },
        },
        //页脚
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024',
        },
        //侧边栏文字更改(移动端)
        sidebarMenuLabel: '目录',
        //返回顶部文字修改(移动端)
        returnToTopLabel: '返回顶部',
        //大纲显示2-3级标题
        outline: {
            level: [2, 3],
            label: '当前页大纲'
        },
    }
})
