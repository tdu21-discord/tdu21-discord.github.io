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

  if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-187333615-1");

    router.afterEach(function(to, from) {
      if (to.path !== from.path) {
        gtag("event", "page_view", {
          page_path: to.path,
        });
      }
    });

    router.addRoutes([
      {
        path: "/discord",
        beforeEnter(to, from, next) {
          gtag("event", "click_join_link", {
            event_category: "engagement",
          });
          window.location.href = "https://discord.gg/NvrN6uaYxf";
        },
      },
    ]);
  } else {
    router.addRoutes([
      {
        path: "/discord",
        beforeEnter(to, from, next) {
          window.location.href = "https://discord.gg/NvrN6uaYxf";
        },
      },
    ]);
  }
};
