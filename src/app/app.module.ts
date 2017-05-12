import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { RouterModule }    from '@angular/router';

import { AppComponent }    from './app.component';
import { SearchComponent, SearchListComponent, SearchListItemComponent } from "./planning/planning";
import { LoginBoxComponent }  from "./identity/identity";
import { OrderItemListComponent }  from "./my/my";
import { HomePage, HomeTechPage, PolicyPage, TermsPage, AboutUsPage } from "./content-pages/content-pages";

import { TopNavComponent, FooterComponent } from "./../base/_layout/layout"

import { AppRoutingModule, routedComponents } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginBoxComponent,
        SearchComponent,
        SearchListComponent,
        SearchListItemComponent,
        OrderItemListComponent,
        TopNavComponent,
        FooterComponent,
        HomePage,
        HomeTechPage,
        routedComponents,
        PolicyPage,
        TermsPage,
        AboutUsPage
    ],
    // exports: [ AppComponent ],
    // entryComponents: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
