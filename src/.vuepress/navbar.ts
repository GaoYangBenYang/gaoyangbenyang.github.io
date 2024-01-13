import {navbar} from "vuepress-theme-hope";

export const Navbar = navbar([
    {
        text: "主页",
        icon: "home",
        link: "/",
    },
    {
        // 必要的，分组的标题文字
        text: "TypeScript",
        // 可选的, 分组标题对应的图标
        icon: "typescript",
        // 可选的, 分组标题对应的链接
        // link: "Language/",
        prefix: "/Language/TypeScript/",
        children: [
            {
                text: 'Docs',
                children: [
                    {text: "TypeScript Docs", icon: "typescript", link: "TypeScriptDocs.md"},
                ],
            },
            {
                text: 'Vue',
                children: [
                    {text: "Vue Docs", icon: "vue", link: "Go入门指南.md"},
                ],
            },
        ],
    },
    {
        // 必要的，分组的标题文字
        text: "Java",
        // 可选的, 分组标题对应的图标
        icon: "java",
        // 可选的, 分组标题对应的链接
        // link: "Language/",
        prefix: "/Language/Java/",
        children: [
            {
                text: 'Docs',
                children: [
                    {text: "Java Docs", icon: "java", link: "JavaDocs.md"},
                ],
            },
            {
                text: 'Spring Framework',
                children: [
                    {text: "Spring Docs", icon: "spring", link: "SpringDocs.md"},
                ],
            },
            {
                text: 'SpringBoot',
                children: [
                    {text: "SpringBoot Docs", icon: "spring", link: "SpringBootDocs.md"},
                ],
            },
            {
                text: 'SpringCloud',
                children: [
                    {text: "SpringCloud Docs", icon: "spring", link: "SpringCloudDocs.md"},
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
        text: "数据库",
        icon: "database",
        prefix: "/Database/",
        children: [
            {
                text: "MySQL",
                prefix: "MySQL/",
                children: [
                    {text: "MySQL Docs", icon: "mysql", link: "MySQLDocs.md"},
                ],
            },
            {
                text: "Redis",
                prefix: "Redis/",
                children: [
                    {text: "Redis Docs", icon: "redis", link: "1"},
                ],
            },
            {
                text: "Elasticsearsh",
                prefix: "Elasticsearsh/",
                children: [
                    {text: "Elasticsearsh Docs", icon: "elastic", link: "1"},
                ],
            },
        ],
    },
    {
        text: "进阶之路",
        icon: "kaifasheji",
        prefix: "/TheWayToProgress/",
        children: [
            {
                text: "消息队列",
                prefix: "MessageQueue/",
                children: [
                    {text: "RabbitMQ Docs", icon: "rabbitmq", link: "RabbitMQDocs.md"},
                    {text: "Kafka Docs", icon: "Kafka", link: "KafkaDocs.md"},

                ],
            },
            {
                text: "容器化技术",
                prefix: "Container/",
                children: [
                    {text: "Docker Docs", icon: "docker", link: "DockerDocs.md"},
                    {text: "Kubernetes Docs", icon: "kubernetes", link: "KubernetesDocs.md"},

                ],
            },
            {
                text: "依赖管理",
                prefix: "Package/",
                children: [
                    {text: "Nodejs Docs", icon: "nodejs", link: "NodejsDocs.md"},
                    {text: "Maven Docs", icon: "maven", link: "MavenDocs.md"},
                ],
            },
            {
                text: "版本控制",
                prefix: "Git/",
                children: [
                    {text: "Git Docs", icon: "git", link: "GitDocs.md"},
                ],
            },
            {
                text: "数据结构与算法",
                prefix: "DataStructuresAndAlgorithms/",
                children: [
                    {text: "数据结构", icon: "jiegou", link: "DataStructuresDocs.md"},
                    {text: "算法", icon: "jiegou", link: "AlgorithmsDocs.md"},
                ],
            },
            {
                text: "设计模式",
                prefix: "DesignPattern/",
                children: [
                    {text: "设计模式", icon: "kaifasheji", link: "DesignPatternDocs.md"},
                ],
            },
            {
                text: "CI\/CD",
                prefix: "CICD/",
                children: [
                    {text: "Github Action", icon: "guidang", link: "GithubActionDocs.md"},
                ],
            },
            {
                text: "OIDC",
                prefix: "OIDC/",
                children: [
                    {text: "OpenID Connect Core 1.0", icon: "guidang", link: "OpenIDConnectCore1.0.md"},
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