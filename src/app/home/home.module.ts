import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRouter } from './home.router';


@NgModule({
  imports: [
    HomeRouter
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
