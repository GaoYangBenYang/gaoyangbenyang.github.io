import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar.js";

export default hopeTheme({
  // 导航栏
  navbar: Navbar,
  //自定义导航栏布局 "Repo"去掉仓库
  navbarLayout: { start: ["Brand"], center: [], end: ["Search","Links","Language", "Outlook"] },
  //是否在导航栏显示图标
  navbarIcon: true,
  // 侧边栏
  sidebar: false,
  //主题在深色和浅色之间切换
  darkmode: "toggle",
  //页脚
  // footer: `<span id="siteTime"></span>`,
  copyright:"Copyright © 2022-至今 GaoYang",
  displayFooter: true,
  //是否显示编辑链接
  editLink: false,
  // 是否显示最后更新时间
  lastUpdated: true,
  contributors: true,
  // 当前网站部署到的域名。
  hostname: "https://gaoyangbenyang.github.io/",
  // 文章显示的默认作者
  author: {
    name: "GaoYang",
    url: "https://github.com/GaoYangBenYang",
    email: "GaoYangBenYang@outlook.com",
  },
  
  iconAssets: "//at.alicdn.com/t/c/font_4065355_5md89msolqb.css",
  iconPrefix: "iconfont icon-",
  logo: "/logo.svg",

  repo: "https://github.com/GaoYangBenYang",

  docsDir: "src",
  //博客功能
  blog: {
    description: "时间是脑力劳动者的资本",
    intro: "/Other/AboutMe/intro.html",
    medias: {
      GitHub: "https://github.com/GaoYangBenYang",
      BiliBili: "https://space.bilibili.com/365749822?spm_id_from=333.1007.0.0",
      Email: "GaoYangBenYang@outlook.com",
      // Weibo: "https://example.com",
      // Zhihu: "https://example.com",
    },
    //是否剪裁头像为圆形形状
    roundAvatar: true,
    //每页显示博客数量
    articlePerPage: 6,
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {

    blog: true,
    //评论
    comment: {
      //评论服务提供者
      provider: "Giscus",
      // 存放评论的仓库
      repo:"GaoYangBenYang/gaoyangbenyang.github.io",
      //仓库 ID，请从 Giscus 页面 生成。
      repoId:"R_kgDOHTe8RQ",
      category:"Announcements", 
      
      categoryId:"DIC_kwDOHTe8Rc4CWbzg",
      //页面 ↔️ discussion 映射关系
      mapping:"pathname",
      //是否启用严格匹配
      strict:true,
      //是否启用懒加载
      lazyLoading:false,
      //输入框的位置
      inputPosition:"top",
      //日间模式下使用的主题
      lightTheme:"light_protanopia",
      //夜间模式下使用的主题
      darkTheme:"dark_protanopia",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
