import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginBoxComponent } from './identity/identity';
import { SearchComponent } from './planning/planning';
import { HomePage, HomeTechPage, PolicyPage, TermsPage, AboutUsPage } from './content-pages/content-pages';

const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'tech',
        component: HomeTechPage
    },
    {
        path: 'login',
        component: LoginBoxComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'policy',
        component: PolicyPage
    },
    {
        path: 'terms',
        component: TermsPage
    },
    {
        path: 'about-us',
        component: AboutUsPage
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [ LoginBoxComponent, SearchComponent ];
