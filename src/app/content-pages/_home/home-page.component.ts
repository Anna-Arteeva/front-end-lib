import { Component } from '@angular/core';

// Cross content pages images
require.context("./../img/", true, /^\.\/.*/);

// Page specific images
require.context("./img/", true, /^\.\/.*/);

// PDF's for size type specification sheets
require.context("./specs/", true, /^\.\/.*/);

@Component(
    {
        selector:      'home-page',
        templateUrl:   'home-page.component.html',
        styleUrls:     [ String('home-page.component.scss') ], // variables doesn't work like that
    })
export class HomePage
{

}
