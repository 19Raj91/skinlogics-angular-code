

import { IBlog } from './interface/blog';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BlogDetailsService {
  public baseUrl = environment.baseUrl;
  private _url=this.baseUrl+'/api/blog-by-url';
  private _url_before_after_inner=this.baseUrl+'/api/before-after-inner';

  constructor(private http:HttpClient) { }

  getBlogDetails(url:any):Observable<IBlog>{
    return  this.http.get<IBlog>(this._url+'/'+url);
  }
  getBeforeAfterInner(url:any):Observable<any>{
    return  this.http.get<any>(this._url_before_after_inner+'/'+url);
  }

  realResultsByServiceUrl(url:any){
    return  this.http.get<any>('https://api.skinlogics.in/api/real-results-by-service-url/'+url);
  }
}
