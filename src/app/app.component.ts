import { Component } from '@angular/core';
import { LoginBoxComponent } from './identity/identity';
import { OrderItemListComponent } from './my/my';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'signkick-app',
    templateUrl: 'app.component.html',
    styleUrls: [ String('app.component.scss') ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
