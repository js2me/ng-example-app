import {RouterModule} from '@angular/router';
import {AboutComponent} from './about.component';

export const AboutRouter = RouterModule.forChild([
  {
    path: '',
    component: AboutComponent
  }
]);
