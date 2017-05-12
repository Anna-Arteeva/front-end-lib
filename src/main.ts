import { platformBrowserDynamic }   from '@angular/platform-browser-dynamic';
import { enableProdMode }           from '@angular/core';
import { AppModule }                from './app/app.module';

if (process.env.ENV === 'production')
{
    enableProdMode();
}

// plugin will find marks and build sprite

let __svg__ = { path: './icons/*.svg', name: 'assets/images/[hash].icons.svg' };
// will overwrite to var __svg__ = { filename: "assets/svg/1466687804854.logos.svg" };

// also you can use next variables for sprite compile
// var __sprite__ = { path: './assets/svg/minify/*.svg', name: 'assets/svg/[hash].icons.svg' };
// var __svgstore__ = { path: './assets/svg/minify/*.svg', name: 'assets/svg/[hash].stuff.svg' };
// var __svgsprite__ = { path: './assets/svg/minify/*.svg', name: 'assets/svg/[hash].1logos.svg' };

// require basic or custom sprite loader
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(err => console.error(err));
