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
    prefix: "/01Language/",
    children: [
      {
        text: "React",
        children: [
          { text: "React基础", icon: "react", link: "vue基础.md" },
        ],
      },
      {
        text: "Typescript",
        children: [
          { text: "Typescript基础", icon: "golang", link: "Go入门指南.md" },
        ],
      },
      {
        text: "Deno",
        children: [
          { text: "Deno基础", icon: "golang", link: "Go入门指南.md" },
        ],
      },
      {
        text: "Golang",
        children: [
          { text: "Go入门指南", icon: "golang", link: "Go入门指南.md" },
        ],
      },
      {
        text: "Rust",
        children: [
          { text: "Rust基础", icon: "golang", link: "Go入门指南.md" },
        ],
      },
    ],
  },
  { 
    text: "数据库",
    icon: "database",
    prefix: "/02Database/",
    children: [
      {
        text: "关系型数据库",
        children: [
          { text: "MySQL基础", icon: "mysql", link: "1" },
        ],
      },
      {
        text: "非关系型数据库",
        children: [
          { text: "Redis基础", icon: "redis", link: "1" },
        ],
      },
      {
        text: "搜索引擎数据库",
        children: [
          { text: "Elasticsearsh基础", icon: "elastic", link: "2" },
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
          { text: "RabbitMQ基础", icon: "rabbitmq", link: "1" },
        ],
      },
      {
        text: "Kafka",
        children: [
          { text: "Kafka基础", icon: "Kafka", link: "1" },
        ],
      },
    ],
  },
  { 
    text: "云原生",
    icon: "yunweiguanli",
    prefix: "/04CloudNative/",
    children: [
      {
        text: "Linux",
        children: [
          { text: "Ubuntu基础", icon: "ubuntu", link: "1" },
        ],
      },
      {
        text: "Docker",
        children: [
          { text: "Dcoker基础", icon: "docker", link: "1" },
        ],
      },
      {
        text: "Kubernetes",
        children: [
          { text: "Kubernetes基础", icon: "kubernetes", link: "1" },
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
        children:[
          { text: "队列", icon: "shujujiegou", link: "Queue.md", },
        ],
      },
      { 
        text: "算法",
        children:[
          { text: "二分查找", icon: "suanfa", link: "Queue.md", },
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
        children:[
          { text:"Golang面试题" ,icon: "golang", link:"1"}
        ],
      },
      { 
        text: "分布式",
        children:[
          { text:"Golang面试题" ,icon: "golang", link:"1"}
        ],
      },
      { 
        text: "高并发",
        children:[
          { text:"Golang面试题" ,icon: "golang", link:"1"}
        ],
      },
      { 
        text: "海量数据",
        children:[
          { text:"Golang面试题" ,icon: "golang", link:"1"}
        ],
      },
      { 
        text: "系统设计",
        children:[
          { text:"Golang面试题" ,icon: "golang", link:"1"}
        ],
      },
      { 
        text: "OIDC",
        children:[
          { text:"OpenID Connect Core 1.0" ,icon: "golang", link:"1"}
        ],
      },
    ],
  },
  { 
    text: "面试题",
    icon: "mianshitiku",
    prefix: "/08InterviewQuestion/",
    children: [
      {
        text: "编程语言",
        prefix: "01Language/",
        children: [
          { text:"Golang面试题" ,icon: "golang", link:"Golang面试题.md"}
        ],
      },
      {
        text: "框架",
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
          { text: "TDengine面试题", icon: "connectdevelop", link: "2" },
          { text: "Elasticsearsh面试题", icon: "elastic", link: "2" },
        ],
      },
      {
        text: "计算机基础",
        prefix: "apple/",
        children: [
 
        ],
      },
    ],
  },
  { 
    text: "关于",
    icon: "info",
    link:"/Other/about.md",
  },
]);