import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about.component';
import { AboutRouter } from './about.router';
import { FormInputComponent } from './components/form-input/form-input.component';

@NgModule({
  imports: [
    FormsModule,
    AboutRouter
  ],
  declarations: [AboutComponent, FormInputComponent]
})
export class AboutModule { }
