import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about.component';
import { AboutRouter } from './about.router';

@NgModule({
  imports: [
    FormsModule,
    AboutRouter
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
