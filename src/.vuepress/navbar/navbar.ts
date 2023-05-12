import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
  {
    text: "主页",
    icon: "home",
    link: "/",
  },
  { 
    // 必要的，分组的标题文字
    text: "编程语言",
     // 可选的, 分组标题对应的图标
    icon: "language",
    // 可选的, 分组标题对应的链接
    // link: "Language/",
    prefix: "/Language/",
    children: [
      {
        text: "Vue",
        icon: "language",
        prefix: "Vue/",
        children: [
          { text: "Vue基础", icon: "vue", link: "vue基础.md" },
        ],
      },
      {
        text: "Golang",
        icon: "language",
        prefix: "Golang/",
        children: [
          { text: "Golang基础", icon: "golang", link: "Golang基础.md" },
          { text: "Golang进阶", icon: "golang", link: "Golang进阶.md" },
        ],
      },
      {
        text: "Rust",
        icon: "language",
        prefix: "Rust/",
        children: [
          { text: "Rust基础", icon: "/assets/icon/rust-lang-icon.svg", link: "Rust基础.md" },
        ],
      },
    ],
  },
  { 
    text: "数据库",
    icon: ``,
    prefix: "/Database/",
    children: [
      {
        text: "关系型数据库",
        icon: "mysql",
        prefix: "apple/",
        children: [
          { text: "MySQL基础", icon: "mysql", link: "1" },
        ],
      },
      {
        text: "非关系型数据库",
        prefix: "apple/",
        children: [
          { text: "Redis基础", icon: "Redis", link: "1" },
          { text: "Elasticsearsh基础", icon: "elastic", link: "2" },
        ],
      },
    ],
  },
  { 
    text: "消息队列",
    icon: "discover",
    prefix: "/MessageQueue/",
    children: [
      {
        text: "RabbitMQ",
        prefix: "RabbitMQ/",
        children: [
          { text: "RabbitMQ基础", icon: "vue", link: "1" },
        ],
      },
      {
        text: "Kafka",
        prefix: "Kafka/",
        children: [
          { text: "Kafka基础", icon: "Kafka", link: "1" },
        ],
      },
    ],
  },
  { 
    text: "运维",
    icon: "discover",
    prefix: "/OperationAndMaintenance/",
    children: [
      {
        text: "Linux",
        prefix: "Linux/",
        children: [
          { text: "Ubuntu基础", icon: "ubuntu", link: "1" },
        ],
      },
      {
        text: "Docker",
        prefix: "Docker/",
        children: [
          { text: "Dcoker基础", icon: "vue", link: "1" },
        ],
      },
      {
        text: "Kubernetes",
        prefix: "Kubernetes/",
        children: [
          { text: "Kubernetes基础", icon: "vue", link: "1" },
        ],
      },
    ],
  },
  { 
    text: "数据结构与算法",
    icon: "discover",
    prefix: "/DataStructuresAndAlgorithms/",
    children: [
      {
        text: "队列",
        link: "Queue.md",
      }
    ],
  },
  { 
    text: "设计模式",
    icon: "discover",
    prefix: "/DesignPattern/",
    children: [
      {
        text: "单例模式",
        link: "1",
      }
    ],
  },
  { 
    text: "面试题",
    icon: "discover",
    prefix: "/InterviewQuestion/",
    children: [
      {
        text: "编程语言",
        prefix: "Language/",
        children: [
          { text:"Golang面试题" ,icon: "vue", link:"Golang/Golang面试题.md"}
        ],
      },
      {
        text: "框架",
        icon: "frame",
        prefix: "Frame/",
        children: [
          { text: "Beego面试题", icon: "vue", link: "1" },
          { text: "Iris面试题", icon: "edit", link: "2" },

        ],
      },
      {
        text: "关系型数据库",
        prefix: "apple/",
        children: [
          { text: "MySQL面试题", icon: "mysql", link: "1" },
        ],
      },
      {
        text: "非关系型数据库",
        prefix: "apple/",
        children: [
          { text: "Redis面试题", icon: "redis", link: "1" },
          { text: "TDengine面试题", icon: "edit", link: "2" },
          { text: "Elasticsearsh面试题", icon: "edit", link: "2" },
        ],
      },
      {
        text: "计算机基础",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "vue", link: "1" },
          { text: "苹果2", icon: "edit", link: "2" },

        ],
      },
    ],
  },
  { 
    text: "索引",
    icon: "discover",
    children: [
      {
        text: "收藏",
        link:"/star/",
      },
      {
        text: "分类",
        link:"/category/",
      },
      {
        text: "标签",
        link:"/tag/",
      },
      {
        text: "归档",
        link:"/timeline/",
      },
      { 
        text: "关于",
        icon: "info",
        link:"/Other/About/",
      },
    ],
  },
]);
