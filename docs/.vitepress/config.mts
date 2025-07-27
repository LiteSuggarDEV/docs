import { text } from "mermaid/dist/rendering-util/rendering-elements/shapes/text.js";
import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  ignoreDeadLinks: true,
  title: "LiteSuggar",
  description: "LiteSuggarDEV文档中心",
  head: [
    // 添加图标
    [
      "link",
      {
        rel: "icon",
        href: "/Suggar.png",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "开始", link: "/next" },
    ],
    logo: "/Suggar.png",

    sidebar: [
      {
        text: "前言",
        items: [
          {
            text: "插件项目",
            items: [
              {
                text: "SuggarChat",
                link: "/project/suggarchat",
                items: [
                  { text: "快速开始", link: "/project/suggarchat/quick-start" },
                  { text: "进阶", link: "/project/suggarchat/next" },
                  { text: "高级", link: "/project/suggarchat/advanced" },
                ],
              },
              {
                text: "SuggarChat-CF",
                link: "/project/suggarchat-ada-cf",
                items: [{ text: "开始", link: "/project/suggarchat-ada-cf" }],
              },
              {
                text: "EconomyValue",
                link: "/project/value",
                items: [
                  {
                    text: "api",
                    link: "/project/value/docs/api",
                    items: [
                      {
                        text: "标准 API",
                        link: "/project/value/docs/apis/standard",
                      },
                      {
                        text: "服务层 API",
                        link: "/project/value/docs/apis/advanced",
                      },
                      {
                        text: "底层 API",
                        link: "/project/value/docs/apis/kernel",
                      },
                      {
                        text: "依赖注入",
                        link: "/project/value/docs/apis/depends",
                      },
                      {
                        text: "事件钩子",
                        link: "/project/value/docs/apis/hooks",
                      },
                      {
                        text: "迁移工具",
                        link: "/project/value/docs/apis/migration",
                      },
                    ],
                  },
                ],
              },
              {
                text: "LitePerm",
                link: "/project/liteperm",
                items: [
                  { text: "指令", link: "/project/liteperm/docs/commands" },
                  { text: "API", link: "/project/liteperm/docs/API" },
                ],
              },
            ],
          },
          {
            text: "机器人项目",
            items: [
              {
                text: "LiteBot-NEO",
                link: "/project/LiteBot/readme",
                items: [
                  { text: "简介", link: "/project/LiteBot/readme" },
                  { text: "功能", link: "/project/LiteBot/menu" },
                ],
              },
              {
                text: "Suggar-NEO",
                link: "/project/Suggar/readme",
                items: [{ text: "简介", link: "/project/Suggar/readme" }],
              },
            ],
          },
        ],
        link: "https://docs.suggar.top/next.html",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/LiteSuggarDEV/docs" },
    ],
  },
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container
  },
});
