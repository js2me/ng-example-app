import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';

export const LoginRouter = RouterModule.forChild([
  {
    path: '',
    component: LoginComponent
  }
]);
