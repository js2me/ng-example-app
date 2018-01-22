import {RouterModule} from '@angular/router';
import {AccountComponent} from './account.component';

export const AccountRouter = RouterModule.forChild([
  {
    path: '',
    component: AccountComponent
  }
]);
