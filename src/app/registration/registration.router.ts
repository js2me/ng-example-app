import {RouterModule} from '@angular/router';
import {RegistrationComponent} from './registration.component';

export const RegistrationRouter = RouterModule.forChild([
  {
    path: '',
    component: RegistrationComponent
  }
]);
