import {NgModule} from '@angular/core';
import {AccountComponent} from './account.component';
import {AccountRouter} from './account.router';
import {CommonModule} from '@angular/common';
import {UserPhotoComponent} from '../shared/components/user-photo/user-photo.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AccountRouter,
    SharedModule
  ],
  declarations: [AccountComponent]
})
export class AccountModule {
}
