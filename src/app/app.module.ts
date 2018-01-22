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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthDirective
  ],
  imports: [
    BrowserModule,
    AppRouter,
    HttpClientModule
  ],
  providers: [
    ApiService,
    AuthService,
    JwtService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
