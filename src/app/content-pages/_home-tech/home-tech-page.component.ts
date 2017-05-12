import { Component, OnInit } from '@angular/core';

require.context("./../img/", true, /^\.\/.*/);
require.context("./img/integrations/", true, /^\.\/.*/);

@Component(
    {
        selector:    'home-tech-page',
        templateUrl: 'home-tech-page.component.html',
        styleUrls:   [ String('home-tech-page.component.scss') ]
    })
export class HomeTechPage implements OnInit
{
    ngOnInit(): void
    {
        require('./active-campaign-form');
        //
        // this.route.fragment.subscribe(
        //     f =>
        //     {
        //         const element = document.querySelector("#" + f);
        //
        //         if (element)
        //         {
        //             element.scrollIntoView(element)
        //         }
        //     });
    }
}
