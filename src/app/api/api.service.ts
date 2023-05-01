import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root'})
export class SeoService {
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }
  //seo

  seo(name:any): Observable<any>{
    return this.http.get( this.baseUrl + "/api/seo" + name);
  }
}
