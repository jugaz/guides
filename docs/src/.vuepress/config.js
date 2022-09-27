const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Jugaz - Guía",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Guia de utilidades",

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
  dest: "./src/.vuepress/dist",
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    docsDir: 'docs',
    repo: "https://github.com/jugaz/guides",
    editLinks: false,
    editLinkText: 'Power by Jugaz ❤️',
    sidebarDepth: 2,
    siderbar: "auto",
    logo: "images/logo/logoWhite.png",
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: "guides",
        link: "/principal/",
      },
      // {
      //   text: "Config",
      //   link: "/config/",
      // },
    ],
    sidebar: {
      "/principal/": [
        {
          title: "Principal",
          collapsable: false,
          children: [
            "/principal/",
            "extensiones",
            "plugins"
          ],
        },
        {
          title: "Ayudas",
          collapsable: false,
          children: [
            "ayudas/comandos",
            "ayudas/hyper",
            "ayudas/git",
            "ayudas/llave-ssh"
     
          ],
        },
        {
          title: "Front End",
          collapsable: false,
          children: [
            // "",
            "frontend/deploy-sh",
            "frontend/estructura",
            "frontend/laravel-mix",
            "frontend/vue"
            // "using-vue",
          ],
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/last-updated',
    '@vuepress/plugin-nprogress'
  ]
}
