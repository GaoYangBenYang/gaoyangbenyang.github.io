import {navbar} from "vuepress-theme-hope";

export const Navbar = navbar([
    {
        text: "主页",
        icon: "home",
        link: "/",
    },
    {
        // 必要的，分组的标题文字
        text: "Java",
        // 可选的, 分组标题对应的图标
        icon: "language",
        // 可选的, 分组标题对应的链接
        // link: "Language/",
        prefix: "/Language/Java/",
        children: [
            {
                text: 'Docs',
                children: [
                    {text: "Java Docs", icon: "golang", link: "Go入门指南.md"},
                ],
            },
            {
                text: 'Spring',
                children: [
                    {text: "Spring Docs", icon: "golang", link: "Go入门指南.md"},
                ],
            },
            {
                text: 'SpringBoot',
                prefix: 'SpringBoot',
                children: [
                    {text: "SpringBoot整合第三方依赖", icon: "golang", link: "SpringBoot整合第三方依赖.md"},
                ],
            },
        ],
    },
    {
        // 必要的，分组的标题文字
        text: "Golang",
        // 可选的, 分组标题对应的图标
        icon: "golang",
        // 可选的, 分组标题对应的链接
        // link: "Language/",
        prefix: "/Language/Golang/",
        children: [
            {
                text: 'Docs',
                children: [
                    {text: "Golang Docs", icon: "golang", link: "Go入门指南.md"},
                ],
            },
        ],
    },
    {
        // 必要的，分组的标题文字
        text: "TypeScript",
        // 可选的, 分组标题对应的图标
        icon: "language",
        // 可选的, 分组标题对应的链接
        // link: "Language/",
        prefix: "/Language/",
        children: [
            {
                text: 'Docs',
                children: [
                    {text: "TypeScript Docs", icon: "golang", link: "Go入门指南.md"},
                ],
            },
            {
                text: 'Vue',
                children: [
                    {text: "Vue Docs", icon: "golang", link: "Go入门指南.md"},
                ],
            },
        ],
    },
    {
        text: "数据库",
        icon: "database",
        prefix: "/Database/",
        children: [
            {
                text: "MySQL",
                prefix: "MySQL/",
                children: [
                    {text: "MySQL语法特性", icon: "mysql", link: "MySQL语法特性.md"},
                ],
            },
            {
                text: "Redis",
                children: [
                    {text: "Redis基础", icon: "redis", link: "1"},
                ],
            },
            {
                text: "Elasticsearsh",
                children: [
                    {text: "Elasticsearsh基础", icon: "elastic", link: "2"},
                ],
            },
        ],
    },
    {
        text: "消息队列",
        icon: "xiaoxiduilie",
        prefix: "/03MessageQueue/",
        children: [
            {
                text: "RabbitMQ",
                children: [
                    {text: "RabbitMQ基础", icon: "rabbitmq", link: "1"},
                ],
            },
            {
                text: "Kafka",
                children: [
                    {text: "Kafka基础", icon: "Kafka", link: "1"},
                ],
            },
        ],
    },
    {
        text: "云原生",
        icon: "yunweiguanli",
        prefix: "/CloudNative/",
        children: [
            {
                text: "Linux",
                children: [
                    {text: "Ubuntu基础", icon: "ubuntu", link: "1"},
                ],
            },
            {
                text: "Docker",
                children: [
                    {text: "Docker Docs", icon: "docker", link: "DockerDocs.md"},
                    {text: "Docker配置本地开发环境", icon: "docker", link: "Docker配置本地开发环境.md"},
                ],
            },
            {
                text: "Kubernetes",
                children: [
                    {text: "Kubernetes基础", icon: "kubernetes", link: "1"},
                ],
            },
        ],
    },
    {
        text: "数据结构与算法",
        icon: "jiegou",
        prefix: "/05DataStructuresAndAlgorithms/",
        children: [
            {
                text: "数据结构",
                children: [
                    {text: "队列", icon: "shujujiegou", link: "Queue.md",},
                ],
            },
            {
                text: "算法",
                children: [
                    {text: "二分查找", icon: "suanfa", link: "Queue.md",},
                ],
            },
        ],
    },
    {
        text: "设计模式",
        icon: "kaifasheji",
        prefix: "/06DesignPattern/",
        children: [
            {
                text: "单例模式",
                icon: "kaifasheji",
                link: "1",
            }
        ],
    },
    {
        text: "进阶之路",
        icon: "kaifasheji",
        prefix: "/07TheWayToProgress/",
        children: [
            {
                text: "CI\/CD",
                children: [
                    {text: "Golang面试题", icon: "golang", link: "1"}
                ],
            },
            {
                text: "分布式",
                children: [
                    {text: "Golang面试题", icon: "golang", link: "1"}
                ],
            },
            {
                text: "高并发",
                children: [
                    {text: "Golang面试题", icon: "golang", link: "1"}
                ],
            },
            {
                text: "海量数据",
                children: [
                    {text: "Golang面试题", icon: "golang", link: "1"}
                ],
            },
            {
                text: "系统设计",
                children: [
                    {text: "Golang面试题", icon: "golang", link: "1"}
                ],
            },
            {
                text: "OIDC",
                children: [
                    {text: "OpenID Connect Core 1.0", icon: "golang", link: "1"}
                ],
            },
        ],
    },
    {
        text: "面试题",
        icon: "mianshitiku",
        prefix: "/InterviewQuestion/",
        children: [
            {
                text: "编程语言",
                prefix: "Golang/",
                children: [
                    {text: "Golang面试题", icon: "golang", link: "Golang面试题.md"}
                ],
            },
            {
                text: "框架",
                prefix: "Frame/",
                children: [
                    {text: "Beego面试题", icon: "vue", link: "1"},
                    {text: "Iris面试题", icon: "edit", link: "2"},

                ],
            },
            {
                text: "数据库",
                prefix: "Database/",
                children: [
                    {text: "MySQL面试题", icon: "mysql", link: "MySQL面试题.md"},
                ],
            },
            {
                text: "数据结构与算法",
                prefix: "apple/",
                children: [],
            },
            {
                text: "计算机基础",
                prefix: "apple/",
                children: [],
            },
        ],
    },
    {
        text: "关于",
        icon: "info",
        link: "/Other/about.md",
    },
]);