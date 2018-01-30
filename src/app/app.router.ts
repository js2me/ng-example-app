import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {environment} from '../environments/environment';


export const AppRouter: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    loadChildren: 'app/home/home.module#HomeModule',
    data: { title: 'Angular Example App', description: 'List of articles' }
  },
  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule',
    data: { title: 'About page', description: 'How to use application and for whom has been created.' }
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule',
    data: { title: 'Sign in', description: 'Sign in to application' }
  },
  {
    path: 'registration',
    loadChildren: 'app/registration/registration.module#RegistrationModule',
    data: { title: 'Sign up', description: 'Sign up to application' }
  },
  {
    path: 'account',
    loadChildren: 'app/account/account.module#AccountModule',
    data: { title: 'Account', description: 'Your account data' }
  }
]);
