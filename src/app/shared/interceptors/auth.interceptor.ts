import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {Injectable, Injector} from '@angular/core';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private auth: AuthService;
  readonly blockedUrlWords = /(login)|(registration)/;

  constructor(private injector: Injector) {
    setTimeout(() => {
      this.auth = this.injector.get(AuthService);
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: (string | null) = this.auth.getAuthToken();
    const updatedRequest = (token && !this.blockedUrlWords.test(req.url)) &&
      req.clone({headers: req.headers.set('Authorization', `JWT ${token}`)}) ||
      req.clone();

    return next.handle(updatedRequest).do(this.requestHasSuccess, this.requestHasError.bind(this));
  }

  requestHasSuccess(){
  }

  requestHasError(error: HttpErrorResponse){
    if (error.status === 401) {
      this.auth.logout();
    }
  }
}
