import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'top-nav',
    templateUrl: 'nav.component.html',
 //   styleUrls: [ String('nav.component.scss') ],
})

export class TopNavComponent implements OnInit
{
    constructor(private route: ActivatedRoute)
    {
    }

    ngOnInit(): void
    {
        this.route.fragment.subscribe(
            f =>
            {
                const element = document.querySelector("#" + f);

                if (element)
                {
                    element.scrollIntoView(element)
                }
            });
    }
}