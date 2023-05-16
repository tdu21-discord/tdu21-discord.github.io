import { defineConfig } from 'vitepress';
import multiMdTable from 'markdown-it-multimd-table';

export default defineConfig({
  lang: 'ja',
  title: 'TDU21 非公式Discordキャンパス',
  description: '「TDU21 非公式Discordキャンパス」は東京電機大学21期生の交流を目的として、有志が運営しているDiscordサーバーです。',
  themeConfig: {
    logo: '/img/logo/tdu21_discord_logo_square_bordered-min.png',
    sidebarMenuLabel: 'メニュー',
    darkModeSwitchLabel: "カラーテーマ",
    returnToTopLabel: "トップに戻る",
    sidebar: [
      {
        items: [
          { text: '当キャンパスについて', link: '/about' },
          { text: 'キャンパスルール', link: '/rule' },
        ],
      },
      {
        text: '参加方法',
        items: [
          { text: '学籍認証について', link: '/verify-reg' },
          { text: 'グループに参加する', link: '/howtojoin' },
        ],
      },
      {
        text: 'キャンパス紹介',
        items: [
          { text: 'キャンパスマップ', link: '/map' },
          { text: 'キャンパスガイド', link: '/guide' },
          { text: 'お問い合わせ方法', link: '/support' },
        ],
      },
      {
        text: 'その他',
        collapsed: true,
        items: [
          { text: 'プライバシーについて', link: '/privacy' },
          { text: 'モデレーター', link: '/modelators' },
          { text: '管理ガイドライン', link: '/mod-guideline' },
          { text: 'メディアツール', link: '/media' },
        ],
      },
    ],
    editLink: {
      pattern: 'https://github.com/tdu21-discord/tdu21-discord.github.io/tree/main/src/:path',
      text: 'このページを GitHub で編集する'
    },
    footer: {
      message: 'Made by TDU21 Discord Campus Moderators with ❤️'
    }
  },
  markdown: {
    config: (md) => {
      md.use(multiMdTable);
    }
  },
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
      'script',
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-4PKV5C7NZE'
      }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-4PKV5C7NZE');\n"
    ]
  ]
})