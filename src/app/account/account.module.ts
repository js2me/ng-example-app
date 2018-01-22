import {NgModule} from '@angular/core';
import {AccountComponent} from './account.component';
import {AccountRouter} from './account.router';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    AccountRouter
  ],
  declarations: [AccountComponent]
})
export class AccountModule {
}
