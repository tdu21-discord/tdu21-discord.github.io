import { defaultTheme, defineUserConfig } from 'vuepress';
import multiMdTable from 'markdown-it-multimd-table';
import path from 'path';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';

export default defineUserConfig({
  // Site
  lang: 'ja',
  title: 'TDU21 非公式Discordキャンパス',
  description: '「TDU21 非公式Discordキャンパス」は東京電機大学21期生の交流を目的として、有志が運営しているDiscordサーバーです。',
  head: [
    ["meta", { name: "theme-color", content: "#164F9E" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:title", content: "TDU21 非公式Discordキャンパス" }],
    [
      "meta",
      {
        name: "og:description",
        content:
          "「TDU21 非公式Discordキャンパス」は東京電機大学21期生の交流を目的として、有志が運営しているDiscordサーバーです。",
      },
    ],
    [
      "meta",
      {
        name: "og:image",
        content: "https://tdu21-discord.org/img/tdu21_discord_campus_ogp.png",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "script",
      { src: "https://www.googletagmanager.com/gtag/js?id=UA-187333615-1" },
    ],
  ],
  // Theme
  theme: defaultTheme({
    logo: '/img/logo/tdu21_discord_logo_square_bordered-min.png',
    // search: false,
    repo: "tdu21-discord/tdu21-discord.github.io",
    editLink: true,
    docsDir: "src",
    docsBranch: "main",
    editLinkText: "このページを編集する",
    sidebarDepth: 2,
    sidebar: [
      "/about",
      "/rule",
      "/verify-reg",
      "/howtojoin",
      "/map",
      "/guide",
      "/support",
      "/privacy",
      {
        text: "その他",
        collapsible: true,
        children: ["/modelators", "/mod-guideline", "/media"],
      },
    ],
  }),

  alias: {
    "@assets": path.resolve(__dirname, "assets"),
  },

  extendsMarkdown: (md) => {
    md.use(multiMdTable);
  },
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-4PKV5C7NZE',
    })
  ]
})