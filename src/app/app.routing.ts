import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('src/app/pages/pages.module').then(module => module.PagesModule)
    },
    {
        path: '404',
        loadChildren: () => import('src/app/shared/not-found/not-found.module').then(module => module.NotFoundModule)
    },
    {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
    }
];

export const RootRouting = RouterModule.forRoot(ROUTES, {useHash: true});
