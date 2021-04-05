const { description } = require("../../package");
const path = require("path");

module.exports = {
  lang: "ja",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "TDU21 Discordキャンパス (非公式)",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description:
    "「TDU21 Discordキャンパス (非公式)」は東京電機大学21期生の交流を目的として、有志が運営しているDiscordサーバーです。",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#164F9E" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:title", content: "TDU21 Discordキャンパス (非公式)" }],
    [
      "meta",
      {
        name: "og:description",
        content:
          "「TDU21 Discordキャンパス (非公式)」は東京電機大学21期生の交流を目的として、有志が運営しているDiscordサーバーです。",
      },
    ],
    [
      "meta",
      {
        name: "og:image",
        content: "https://tdu21-discord.org/img/tdu21_discord_ogp.png",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "script",
      { src: "https://www.googletagmanager.com/gtag/js?id=UA-187333615-1" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    search: false,
    repo: "tdu21-discord/tdu21-discord.github.io",
    editLinks: true,
    docsDir: "src",
    docsBranch: "main",
    editLinkText: "このページを編集する",
    sidebarDepth: 2,
    sidebar: [
      "/about",
      "/verify-reg",
      "/howtojoin",
      "/rule",
      "/guide",
      "/map",
      {
        title: "その他",
        collapsable: false,
        sidebarDepth: 0,
        children: ["/modelators", "/mod-guideline", "/media"],
      },
    ],
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "assets"),
      },
    },
  },

  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-multimd-table"));
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [],
};
