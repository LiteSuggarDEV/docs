import { text } from 'mermaid/dist/rendering-util/rendering-elements/shapes/text.js';
import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  ignoreDeadLinks: true,
  title: "LiteSuggarDocs",
  description: "All project of LiteSuggarDEV",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '前言',
        items: [
          {
            text: '项目', items: [
              {
                text: 'SuggarChat', link: '/project/suggarchat', items: [
                  { text: '快速开始', link: '/project/suggarchat/quick-start' },
                  { text: '进阶', link: '/project/suggarchat/next' },
                  { text: '高级', link: '/project/suggarchat/advanced' },
                ],
              },
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LiteSuggarDEV/docs' }
    ],

  },
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },

})
