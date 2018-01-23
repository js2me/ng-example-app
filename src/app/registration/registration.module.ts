import {NgModule} from '@angular/core';
import {RegistrationComponent} from './registration.component';
import {RegistrationRouter} from './registration.router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RegistrationRouter
  ],
  declarations: [RegistrationComponent]
})
export class RegistrationModule {
}
