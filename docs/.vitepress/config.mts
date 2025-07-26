import { text } from "mermaid/dist/rendering-util/rendering-elements/shapes/text.js";
import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  ignoreDeadLinks: true,
  title: "LiteSuggarDocs",
  description: "All project of LiteSuggarDEV",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "开始", link: "/next" },
    ],
    logo: "https://avatars.githubusercontent.com/u/200794636?s=200&v=4",

    sidebar: [
      {
        text: "前言",
        items: [
          {
            text: "项目",
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
            ],
          },
        ],
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
