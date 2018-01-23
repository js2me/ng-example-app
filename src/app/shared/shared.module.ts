import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import {UserPhotoComponent} from './components/user-photo/user-photo.component';


@NgModule({
  imports:[CommonModule],
  declarations:[UserPhotoComponent],
  exports:[UserPhotoComponent]
})
export class SharedModule{
}
