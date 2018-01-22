import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TokenData} from '../models/token-data.model';
@Injectable()
export class JwtService {
  private tokenSubject = new BehaviorSubject<string>('');
  public tokenObserver = this.tokenSubject.asObservable();

  constructor() {
    const cachedToken = localStorage.getItem('token');
    if (cachedToken) {
      this.tokenSubject.next(cachedToken);
    }
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }

  getToken(): (string | null) {
    const token: string = this.tokenSubject.getValue();
    if (token.length) {
        return token;
    }
    return null;
  }

  getTokenData(): (TokenData | null) {
    const token = this.getToken();
    if (token && token.length) {
      const base64Url = token.split('.')[1];
      if (base64Url && base64Url.length) {
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64)) as TokenData;
      }
    }
    return null;
  }

  destroyToken() {
    this.tokenSubject.next('');
    localStorage.removeItem('token');
  }


}
