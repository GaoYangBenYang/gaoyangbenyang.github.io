import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar.js";

export default hopeTheme({
  // 导航栏
  navbar: Navbar,
  //自定义导航栏布局 "Repo"去掉仓库  "Outlook" ,"Language" Brand: 站点品牌 Outlook: 外观弹窗 Repo: 项目仓库 Links: 导航栏链接
  navbarLayout: { start: [], center: [], end: ["Links","Search", "Outlook"] },
  //是否在导航栏显示图标
  navbarIcon: true,
  // 侧边栏
  sidebar: false,
  //主题在深色和浅色之间切换
  darkmode: "toggle",
  //页脚
  // footer: `<span id="siteTime"></span>`,
  copyright:"Copyright © 2022-至今 高洋",
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
    name: "高洋",
    url: "https://github.com/GaoYangBenYang",
    email: "GaoYangBenYang@outlook.com",
  },
  
  iconAssets: "//at.alicdn.com/t/c/font_4065355_eu99ucl8m5.css",
  iconPrefix: "iconfont icon-",
  logo: "/logo.svg",

  repo: "https://github.com/GaoYangBenYang",

  docsDir: "src",
  //博客功能
  blog: {
    description: "渐行渐远渐无书，且听且吟且从容。",
    intro: "/Other/about.html",
    medias: {
      GitHub: "https://github.com/GaoYangBenYang",
      BiliBili: "https://space.bilibili.com/365749822?spm_id_from=333.1007.0.0",
      Email: "GaoYangBenYang@outlook.com",
    },
    //是否剪裁头像为圆形形状
    roundAvatar: true,
    //每页显示博客数量
    articlePerPage: 4,
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
      lazyLoading:true,
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
      // presentation: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
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
    copyright:{
      author: "高洋",
      license: "MIT",
      global: true,
    }
  },
});
