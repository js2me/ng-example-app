import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginRouter} from './login.router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LoginRouter
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
