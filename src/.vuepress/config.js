const moment = require('moment');
const path = require('path');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Jugaz - Guía",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Guias",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link",{rel:"canonical", href:"https://jugaz.github.io/guides/"}],
    ["link",{rel:"icon", type:"image/png", href:"/images/logo/logoWhite32x32.png"}],
    ["meta",{name: "apple-mobile-web-app-capable", content: "yes"}],
    ["meta",{name: "apple-mobile-web-app-status-bar-style", content: "black"}],
    ["meta",{name:"description", content:"Guia"}],
    ["meta",{name:"theme-color",content:"#157878"}],
    ["meta",{property:"og:description", content:"Guia"}],
    ["meta",{property:"og:locale", content:"en_PE"}],
    ["meta",{property:"og:site_name" ,content:"Guia"}],
    ["meta",{property:"og:title", content:"Guia"}],
    ["meta",{property:"og:url", content:"https://jugaz.github.io/guides/"}],
    ['link',{rel:'apple-touch-icon', href:"/images/logo/logoWhite32x32.png" }],
    ['link',{rel:'mask-icon', href:"/images/logo/logoWhite32x32.png", color: '#3eaf7c' }],
    ['meta',{name:'msapplication-TileImage', content:"/images/logo/logoWhite32x32.png" }]
  ],

  base: "/guides/",
  dest: "./docs",


  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    docsDir: "jugaz",
    docsRepo: 'jugaz',
    lastUpdated: 'Last Updated',
    editLinks: false,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Power by Jugaz ❤️',
    sidebarDepth: 2,
    logo: "/images/logo/logoWhite32x32.png",
    link:"jugaz",
    nav: [
      {
        text: "guides",
        link: "/guides/",
      },
      // {
      //   text: "Config",
      //   link: "/config/",
      // },
    ],
    sidebar: {
      "/guides/": [
        {
          title: "Principal",
          // path: "/guia/",
          collapsable: false,
          // sidebarDepth: 1,
          children: [
            // "",
            "/guides/",
            "vscode",
            "extensiones",
            "plugins"
          ],
        },
        {
          title: "Ayudas",
          // path: "/proyectos/",
          collapsable: false,
          // sidebarDepth: 1,
          children: [
            "helpers/git",
            "helpers/hyper",
            "helpers/commandos",
            "helpers/llave-ssh"
     
          ],
        },
        {
          title: "Front End",
          // path: "/proyectos/",
          collapsable: false,
          // sidebarDepth: 1,
          children: [
            // "",
            "frontend/deploy-sh",
            "frontend/estructura",
            "frontend/laravel-mix"
            // "using-vue",
          ],
        }
      ],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": ".vuepress/public",
      },
    },
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ['@vuepress/back-to-top', 
      '@vuepress/last-updated',
      '@vuepress/pwa',
        {
        serviceWorker: true,
        updatePopup: true
       }
    ]
  ],

};
