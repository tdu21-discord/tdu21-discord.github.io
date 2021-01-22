/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {

  // GA from https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-google-analytics

  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r
      i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }
      i[r].l = 1 * new Date()
      a = s.createElement(o)
      m = s.getElementsByTagName(o)[0]
      a.async = 1
      a.src = g
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

    ga('create', 'UA-187333615-1', 'auto')
    ga('set', 'anonymizeIp', true)

    router.afterEach(function (to) {
      ga('set', 'page', to.path)
      ga('send', 'pageview')
    })
  }

  router.addRoutes([
    {
      path: "/discord",
      beforeEnter(to, from, next) {
        ga('set', 'page', "/discord")
        ga('send', 'pageview')
        window.location.href = "https://discord.com/invite/NfgywsxHcs";
      },
    },
  ]);
};
