import { viteBundler } from "@vuepress/bundler-vite";
import ElementPlus from "unplugin-element-plus/vite";
import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { pwaPopupPlugin } from "@vuepress/plugin-pwa-popup";

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {
      plugins: [ElementPlus({})],
    },
  }),
  // 站点配置
  lang: "zh-CN",
  title: "bili-vd-bak",
  description: "这是一个 备份各种(站长想备份的)资源 站点",
  // 主题和它的配置
  theme: defaultTheme({
    navbar: [
      {
        text: "其它",
        children: [
          {
            text: "帮助",
            link: "/help/README.md",
          },
          {
            text: "日志",
            link: "/log/README.md",
          },
          {
            text: "网站状态",
            link: "/status.md",
          },
        ],
      },
    ],
    logo: "https://vuejs.org/images/logo.png",
    repo: "xrz-cloud/bili-vd-bak",
    sidebar: {
      "/": [
        {
          text: "首页",
          link: "/",
        },
        {
          text: "库(完整搜索)(若出错请看库1提示)",
          link: "/lib/all.md",
        },
        {
          text: "库1(番剧导航)",
          link: "/lib/README.md",
        },
        {
          text: "库2(在线播放、仅已完结)",
          link: "https://bili-vd-bak.notion.site/b23-f3d8d201a8dc46f7b04a33c53ccf2da4",
        },
        {
          text: "如果显示404怎么做?",
          link: "/404.md",
        },
      ],
    },
    editLinkText: "在GitHub上修改此页",
    lastUpdatedText: "最近更新时间",
    contributorsText: "贡献者",
    docsRepo: "https://github.com/xrz-cloud/bili-vd-bak",
    docsBranch: "master",
    docsDir: "",
    editLinkPattern: ":repo/blob/:branch/:path",
    notFound: [`这个页面火星了...`],
    backToHome: "返回首页",
  }),
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
      hotKeys: ["/", "s", "Meta"],
      // 允许搜索 Frontmatter 中的 `tags`
      getExtraFields: (page) => (page.frontmatter.tags as string[]) ?? [],
    }),
    pwaPlugin(),
    pwaPopupPlugin({
      // 配置项
      locales: {
        "/": {
          message: "文档已更新，发现新内容可用",
          buttonText: "刷新",
        },
      },
    }),
  ],
});
