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
    ["meta", { name: "og:title", content: "" }],
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
        name: "op:image",
        content: "https://tdu21-discord.github.io/tdu21_discord_ogp.png",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
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
    nav: [
      {
        text: "ガイド",
        link: "/guide/about",
      },
    ],
    sidebar: [
      {
        title: "ガイド",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          "/guide/about",
          "/guide/rule",
          "/guide/join",
          "/guide/map",
          "/guide/media",
        ],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-187333615-1",
      },
    ],
  ],
};
