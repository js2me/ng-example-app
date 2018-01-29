import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HeaderComponent, FooterComponent} from './shared/layout';
import {AppRouter} from './app.router';
import {AppComponent} from './app.component';
import {ApiService} from './shared/services/api.service';
import {AuthService} from './shared/services/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtService} from './shared/services/jwt.service';
import {AuthInterceptor} from './shared/interceptors/auth.interceptor';
import {AuthDirective} from './shared/directives/auth.directive';
import {UserService} from './shared/services/user.service';
import {UserPhotoComponent} from './shared/components/user-photo/user-photo.component';
import {SharedModule} from './shared/shared.module';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthDirective
  ],
  imports: [
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    BrowserModule,
    SharedModule,
    AppRouter,
    HttpClientModule,
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    JwtService,
    UserService
  ],
  exports:[
    UserPhotoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
