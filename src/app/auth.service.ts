import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { config } from 'src/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public options: {};

  constructor(private http: HttpClient){
    
  }

  login(): Observable < {} >  {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Cache-Control', 'no-cache');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Pragma', 'no-cache');

    let queryParams = new HttpParams();

    let responseType = 'json';

    this.options = {
      headers,
      params: queryParams,
      responseType,
      withCredentials: true
    };

   return this.http.get('http://localhost:3000/auth/google', this.options);

  }

}
