import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: "Blogs & Notes",
    lastUpdated: true,
    //启用深色模式
    appearance: 'dark',
    ignoreDeadLinks: true,
    // 主题配置
    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        //左上角logo
        logo: '../assets/logo.png',
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
                                    link: '/docs/java/JavaDocs'
                                },
                            ]
                        },
                        {
                            text: 'Spring',
                            items: [
                                {
                                    text: 'Spring Docs',
                                    link: '/docs/java/SpringDocs'
                                },
                                {
                                    text: 'Spring Boot Docs',
                                    link: '/docs/java/SpringBootDocs'
                                },
                                {
                                    text: 'Spring Cloud Docs',
                                    link: '/docs/java/SpringCloudDocs'
                                },
                                {
                                    text: 'Spring AI Docs',
                                    link: '/docs/java/SpringAIDocs'
                                },
                            ]
                        },
                        {
                            text: 'Mybatis',
                            items: [
                                {
                                    text: 'Mybatis Docs',
                                    link: '/docs/java/'
                                },
                                {
                                    text: 'Mybatis Plus Docs',
                                    link: '/docs/java/'
                                },
                            ]
                        },
                        {
                            text: 'GraalVM',
                            items: [
                                {
                                    text: 'GraalVM Docs',
                                    link: '/docs/java/'
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
                                    link: '/docs/vue/VueDocs'
                                },
                                {
                                    text: 'TypeScript Docs',
                                    link: '/docs/vue/TypeScriptDocs'
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
                                    text: 'Go入门指南',
                                    link: '/docs/golang/Go入门指南'
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
                                    link: '/docs/database/RedisDocs'
                                },
                            ]
                        },
                        {
                            text: 'MySQL',
                            items: [
                                {
                                    text: 'MySQL Docs',
                                    link: '/docs/database/MySQLDocs'
                                },
                            ]
                        },
                        {
                            text: 'Elasticsearch',
                            items: [
                                {
                                    text: 'Elasticsearch Docs',
                                    link: '/docs/database/ElasticsearchDocs'
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
                                    link: '/docs/messageQueue/KafkaDocs'
                                },
                            ]
                        },
                        {
                            text: 'RabbitMQ',
                            items: [
                                {
                                    text: 'RabbitMQ Docs',
                                    link: '/docs/messageQueue/RabbitMQDocs'
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
                                    link: '/docs/advanced/DockerDocs'
                                },
                                {
                                    text: 'Kubernetes Docs',
                                    link: '/docs/advanced/KubernetesDocs'
                                },
                            ]
                        },
                        {
                            text: '依赖管理',
                            items: [
                                {
                                    text: 'Nodejs Docs',
                                    link: '/docs/advanced/NodejsDocs'
                                },
                                {
                                    text: 'Maven Docs',
                                    link: '/docs/advanced/MavenDocs'
                                },
                            ]
                        },
                        {
                            text: '版本控制',
                            items: [
                                {
                                    text: 'Git Docs',
                                    link: '/docs/advanced/GitDocs'
                                },
                            ]
                        },
                        {
                            text: '数据结构与算法',
                            items: [
                                {
                                    text: '数据结构',
                                    link: '/docs/advanced/DataStructuresDocs'
                                },
                                {
                                    text: '算法',
                                    link: '/docs/advanced/AlgorithmsDocs'
                                },
                            ]
                        },
                        {
                            text: '设计模式',
                            items: [
                                {
                                    text: '设计模式',
                                    link: '/docs/advanced/DesignPatternDocs'
                                },
                            ]
                        },
                        {
                            text: 'CI/CD',
                            items: [
                                {
                                    text: 'Github Action',
                                    link: '/docs/advanced/GithubActionDocs'
                                },
                            ]
                        },
                        {
                            text: 'OIDC',
                            items: [
                                {
                                    text: 'JSON Web Token v0.14.1',
                                    link: '/docs/advanced/JWT手册v0.14.1'
                                },
                                {
                                    text: 'OpenID Connect Core 1.0',
                                    link: '/docs/advanced/OpenIDConnectCore1.0'
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
                                    link: '/docs/java/'
                                },
                                {
                                    text: 'Java进阶',
                                    link: '/docs/java/'
                                },
                            ]
                        },
                        {
                            text: 'MySQL',
                            items: [
                                {
                                    text: 'MySQL基础',
                                    link: '/docs/interviewQuestion/MySQL面试题'
                                },
                            ]
                        },
                    ]
            },
        ],
        // 侧边栏
        sidebar: [
            {
                text: 'Blogs',
                items: [
                    {
                        text: 'Golang中http.ListenAndServe阻塞问题分析',
                        link: '/blogs/Golang中http.ListenAndServe阻塞问题分析'
                    },
                    {
                        text: 'Golang读取配置文件处理方式',
                        link: '/blogs/Golang读取配置文件处理方式'
                    },
                    {
                        text: 'gorm中表名自动加s使用复数问题处理',
                        link: '/blogs/gorm中表名自动加s使用复数问题处理'
                    },
                    {
                        text: 'JavaSwing实践记录',
                        link: '/blogs/JavaSwing实践记录'
                    },
                    {
                        text: 'JSON Web Token(JWT)',
                        link: '/blogs/JSON Web Token(JWT)'
                    },
                    {
                        text: 'SpringBoot整合Swagger3(OpenAPI)',
                        link: '/blogs/SpringBoot整合Swagger3(OpenAPI)'
                    },
                    {
                        text: 'VSCode配置Bug记录',
                        link: '/blogs/VSCode配置Bug记录'
                    },
                    {
                        text: 'WSL2的使用与Bug',
                        link: '/blogs/WSL2的使用与Bug'
                    },
                    {
                        text: '基于角色访问控制(Role-BasedAccessControl)模型',
                        link: '/blogs/基于角色访问控制(Role-BasedAccessControl)模型'
                    },
                ]
            }
        ],
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
            label: '目录'
        },
        //自定义上下页名
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
    }
})
