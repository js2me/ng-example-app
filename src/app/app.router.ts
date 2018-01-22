import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';


export const AppRouter: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
    }
]);
