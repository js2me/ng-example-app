import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
  }

  get(url, body?): Observable<any> {
    return this.http.get(`${environment.api_url}${url}`, body);
  }
  post(url, body?): Observable<any> {
    return this.http.post(`${environment.api_url}${url}`, body);
  }
  put(url, body?): Observable<any> {
    return this.http.put(`${environment.api_url}${url}`, body);
  }
}
