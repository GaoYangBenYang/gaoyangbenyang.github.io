import {defineConfig} from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "zh-CN",
    title: "Blogs & Notes",
    lastUpdated: true,
    //启用深色模式
    appearance: "dark",
    ignoreDeadLinks: true,
    // 主题配置
    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        //左上角logo
        logo: "../assets/logo.png",
        // 导航栏
        nav: [
            {
                text: "React",
                items:
                    [
                        {
                            text: "Docs",
                            items: [
                                {
                                    text: "React Docs",
                                    link: "/docs/react/ReactDocs"
                                },
                                {
                                    text: "TypeScript Docs",
                                    link: "/docs/react/TypeScriptDocs"
                                }
                            ]
                        }
                    ]
            },
            {
                text: "Java",
                items:
                    [
                        {
                            text: "Docs",
                            items: [
                                {
                                    text: "Java Docs",
                                    link: "/docs/java/JavaDocs"
                                }
                            ]
                        },
                        {
                            text: "Spring",
                            items: [
                                {
                                    text: "Spring Docs",
                                    link: "/docs/java/SpringDocs"
                                },
                                {
                                    text: "Spring Boot Docs",
                                    link: "/docs/java/SpringBootDocs"
                                },
                                {
                                    text: "Spring Cloud Docs",
                                    link: "/docs/java/SpringCloudDocs"
                                },
                                {
                                    text: "Spring AI Docs",
                                    link: "/docs/java/SpringAIDocs"
                                }
                            ]
                        },
                        {
                            text: "Dependency",
                            items: [
                                {
                                    text: "Log4j2",
                                    link: "/docs/java/dependency/Log4j2Docs"
                                }
                            ]
                        },
                        {
                            text: "Mybatis",
                            items: [
                                {
                                    text: "Mybatis Docs",
                                    link: "/docs/java/"
                                },
                                {
                                    text: "Mybatis Plus Docs",
                                    link: "/docs/java/"
                                }
                            ]
                        },
                        {
                            text: "GraalVM",
                            items: [
                                {
                                    text: "GraalVM Docs",
                                    link: "/docs/java/"
                                }
                            ]
                        }
                    ]
            },
            {
                text: "Database",
                items:
                    [
                        {
                            text: "Redis",
                            items: [
                                {
                                    text: "Redis Docs",
                                    link: "/docs/database/RedisDocs"
                                }
                            ]
                        },
                        {
                            text: "MySQL",
                            items: [
                                {
                                    text: "MySQL Docs",
                                    link: "/docs/database/MySQLDocs"
                                }
                            ]
                        },
                        {
                            text: "Elasticsearch",
                            items: [
                                {
                                    text: "Elasticsearch Docs",
                                    link: "/docs/database/ElasticsearchDocs"
                                }
                            ]
                        }
                    ]
            },
            {
                text: "MessageQueue",
                items:
                    [
                        {
                            text: "Kafka",
                            items: [
                                {
                                    text: "Kafka Docs",
                                    link: "/docs/messageQueue/KafkaDocs"
                                }
                            ]
                        },
                        {
                            text: "RabbitMQ",
                            items: [
                                {
                                    text: "RabbitMQ Docs",
                                    link: "/docs/messageQueue/RabbitMQDocs"
                                }
                            ]
                        }
                    ]
            },
            {
                text: "Other",
                items:
                    [
                        {
                            text: "Linux",
                            items: [
                                {
                                    text: "Ubuntu Docs",
                                    link: "/docs/other/UbuntuDocs"
                                }
                            ]
                        },
                        {
                            text: "Containerization",
                            items: [
                                {
                                    text: "Docker Docs",
                                    link: "/docs/other/DockerDocs"
                                },
                                {
                                    text: "Kubernetes Docs",
                                    link: "/docs/other/KubernetesDocs"
                                }
                            ]
                        },
                        {
                            text: "Dependency Management",
                            items: [
                                {
                                    text: "Nodejs Docs",
                                    link: "/docs/other/NodejsDocs"
                                },
                                {
                                    text: "Maven Docs",
                                    link: "/docs/other/MavenDocs"
                                }
                            ]
                        },
                        {
                            text: "Version Control",
                            items: [
                                {
                                    text: "Git Docs",
                                    link: "/docs/other/GitDocs"
                                }
                            ]
                        },
                        {
                            text: "DataStructures & Algorithms",
                            items: [
                                {
                                    text: "DataStructures Docs",
                                    link: "/docs/other/DataStructuresDocs"
                                },
                                {
                                    text: "Algorithms Docs",
                                    link: "/docs/other/AlgorithmsDocs"
                                }
                            ]
                        },
                        {
                            text: "DesignPattern",
                            items: [
                                {
                                    text: "DesignPattern Docs",
                                    link: "/docs/other/DesignPatternDocs"
                                }
                            ]
                        },
                        {
                            text: "CI/CD",
                            items: [
                                {
                                    text: "Github Action",
                                    link: "/docs/other/GithubActionDocs"
                                }
                            ]
                        },
                        {
                            text: "OIDC",
                            items: [
                                {
                                    text: "JSON Web Token v0.14.1",
                                    link: "/docs/other/JWT手册v0.14.1"
                                },
                                {
                                    text: "OpenID Connect Core 1.0",
                                    link: "/docs/other/OpenIDConnectCore1.0"
                                }
                            ]
                        },
                        {
                            text: "Interview Question",
                            items: [
                                {
                                    text: "MySQL",
                                    link: "/docs/other/MySQLInterviewQuestion"
                                },
                            ]
                        }
                    ]
            },
        ],
        // 侧边栏
        sidebar: [
            {
                text: "Blogs",
                items: [
                    {
                        text: "角色访问控制模型(Role-BasedAccessControl)",
                        link: "/blogs/角色访问控制模型(Role-BasedAccessControl)"
                    },
                    {
                        text: "JSON Web Token(JWT)",
                        link: "/blogs/JSON Web Token(JWT)"
                    }
                ]
            }
        ],
        // 导航栏链接
        socialLinks: [
            {icon: "github", link: "https://github.com/GaoYangBenYang"}
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
            }

        },
        //本地搜索
        search: {
            provider: "local"
        },
        //页脚
        footer: {
            message: "Released under the Apache-2.0 license.",
            copyright: "Copyright © 2022 — 2025"
        },
        //侧边栏文字更改(移动端)
        sidebarMenuLabel: "目录",
        //返回顶部文字修改(移动端)
        returnToTopLabel: "返回顶部",
        //大纲显示2-3级标题
        outline: {
            level: [2, 3],
            label: "目录"
        },
        //自定义上下页名
        docFooter: {
            prev: "上一页",
            next: "下一页"
        }
    }
});
