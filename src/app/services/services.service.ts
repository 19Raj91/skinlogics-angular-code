

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IService}  from './../service'

Observable
HttpClient

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public baseUrl = environment.baseUrl;
private _url=this.baseUrl+'/api/service-category';
  constructor(private http:HttpClient) { }

  getServiceCategory():Observable<IService[]>{
    return  this.http.get<any[]>(this._url);
  }
}
