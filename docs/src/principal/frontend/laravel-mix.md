# Laravel Mix

::: tip
*Laravel mix está basado en Webpack y es una forma rápida y sencilla de procesar CSS, Javascipt entre otras cosas. Dejo el link de la documentación [Link](https://laravel-mix.com/docs/6.0/installation)*
:::

#### Instalación
```sh
npm install laravel-mix@latest

npm install pug sass sass-loader

npm install laravel-mix-pug-recursive
```

#### Uso 
- En el package.json poner lo siguiente o reemplazar.
```json
  "scripts": {
    "development": "mix",
    "watch": "mix watch",
    "watch-poll": "mix watch -- --watch-options-poll=1000",
    "hot": "mix watch --hot",
    "production": "mix --production"
  },
  "browserslist": [
    "last 10 versions",
    "ie 8",
    "ie 9",
    "> 1%",
    "Firefox >= 20",
    "Opera 12.1",
    "iOS 7"
  ],
```
- Crear el archivo webpack.mix y lo configuramos

```js
let fs = require('fs');
let mix = require('laravel-mix');
mix.pug = require('laravel-mix-pug-recursive');
```

```js
function compile_files(folder, method, srcExt, outputExt) {
    const paths = fs.readdirSync(folder);
    for (let i = 0; i < paths.length; i++) {
        if (paths[i].indexOf('.' + srcExt) > 0 && paths[i].charAt(0) !== '_') {
            const file_path = folder + paths[i];
            mix[method](file_path, outputExt);
        }
    }
}

compile_files('./frontend/src/static/styles/', "sass", "scss", "./docs/styles");
compile_files('./frontend/src/static/script/', "sass", "scss", "./docs/script");
```

```js
mix
    .options({
        processCssUrls: false
         
    })
    .copyDirectory('./frontend/src/static/svg/', './docs/svg')
    .copyDirectory('./frontend/src/static/images/', './docs/images')
    .pug('./frontend/src/templates/**/*.pug', './docs/',  {
        excludePath: __dirname+'/frontend/src/templates'
	})
    .setPublicPath('./docs/')
    .disableNotifications()

    .browserSync({
        proxy: false,
        port:'8080',
        server: {
            baseDir: "./docs/",
            serveStaticOptions: {
                extensions: ["html,css"]
            }
        }
    })
```