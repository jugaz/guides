let mix = require('laravel-mix');
mix
    .options({
        terser: {
            extractComments: false,
        }
    })
    .copyDirectory('./docs/src/.vuepress/dist', 'docs')
    .disableNotifications();