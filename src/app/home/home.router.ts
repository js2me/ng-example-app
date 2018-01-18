import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

export const HomeRouter = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);
