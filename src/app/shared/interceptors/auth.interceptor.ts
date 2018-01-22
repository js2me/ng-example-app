import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {Injectable, Injector} from '@angular/core';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private auth: AuthService;
  readonly blockedUrlWords = [
    'login',
    'registration'
  ];

  constructor(private injector: Injector) {
    setTimeout(() => {
      this.auth = this.injector.get(AuthService);
    });
  }

  checkRequestUrlOnAccessable(url: string) {
      for(let word of this.blockedUrlWords){
        if(url.includes(word)){
          return false;
        }
      }
      return true;
  }

  checkRequestUrlAndToken(token: (null | string), url: string) {
    return token && this.checkRequestUrlOnAccessable(url);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: (string | null) = this.auth.getAuthToken();
    const updatedRequest = this.checkRequestUrlAndToken(token, req.url) &&
      req.clone({headers: req.headers.set('Token', `JWT ${token}`)}) ||
      req.clone();

    return next.handle(updatedRequest).do(this.requestHasSuccess, this.requestHasError.bind(this));
  }

  requestHasSuccess(){
    console.log('request has success');
  }

  requestHasError(error: HttpErrorResponse){
    if (error.status === 401) {
      this.auth.logout();
    }
  }
}
