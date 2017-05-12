import { Component, OnInit } from '@angular/core';

require.context("./img/", true, /^\.\/.*/);

@Component(
    {
        selector:    'about-us',
        templateUrl: 'about-us.component.html',
        styleUrls:     [ String('about-us.component.scss') ], // variables doesn't work like that
    })
export class AboutUsPage
{
}
