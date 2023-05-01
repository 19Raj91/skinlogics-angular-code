import { IBlog } from './interface/blog';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public baseUrl = environment.baseUrl;
  private _url=this.baseUrl+'/api/all-blogs';
  private _url_before_after=this.baseUrl+'/api/before-after'

  constructor(private http:HttpClient) { }

  getBlogs():Observable<IBlog[]>{
    return  this.http.get<IBlog[]>(this._url);
  }

  getBeforeAfter():Observable<any[]>{
    return  this.http.get<any[]>(this._url_before_after);
  }
}
