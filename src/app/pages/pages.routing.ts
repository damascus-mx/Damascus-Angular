import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './root/pages.component';

const AppRoutig: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
        ]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '404'
    }
];

export const APP_ROUTES = RouterModule.forChild(AppRoutig);
