import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaningpageService {

  

  public baseUrl = environment.baseUrl;
  private _lp_requestcallback=this.baseUrl+'/api/lp-requestcallback';
  private _lp_requestcallbackwithservice=this.baseUrl+'/api/lp-requestcallbackwithservice';
  private _lp_consultation=this.baseUrl+'/api/lp-consultation';


  constructor(private _http:HttpClient) { }

submitLpRequestcallback(userData:any){
    return this._http.post(this._lp_requestcallback,userData);
  }
  submitLprequestcallbackwithservice(userData:any){
    return this._http.post(this._lp_requestcallbackwithservice,userData);
  }
  submitLpconsultation(userData:any){
    return this._http.post(this._lp_consultation,userData);
  }

}
