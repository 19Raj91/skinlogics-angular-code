
import { IFaq } from './../faq';
import { IService } from './../service';


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  public baseUrl = environment.baseUrl;
  private _url=this.baseUrl+'/api/service-details';
  private _url_service_section=this.baseUrl+'/api/service-section';
  private _url_first_category=this.baseUrl+'/api/firstcategory';
  private _url_service_category=this.baseUrl+'/api/service-category';
  private _url_service_faq=this.baseUrl+'/api/service-faq';
  private _url_post_appointment=this.baseUrl+'/api/save-appointment';
  private _url_doctors=this.baseUrl+'/api/doctors';
  private _url_treatment_by_category=this.baseUrl+'/api/treatment';
  private _url_service_inner=this.baseUrl+'/api/serviceinner';
  private _url_service_type=this.baseUrl+'/api/service-type';

//all videos
  private _all_videos=this.baseUrl+'/api/all-videos';
  


  constructor(private http:HttpClient) { }

  getServiceDetail(url:any):Observable<IService>{
    return  this.http.get<IService>(this._url+'/'+url);
  }
  getServiceSection(url:any):Observable<any>{
    return  this.http.get<any>(this._url_service_section+'/'+url);
  }

  getFirstCategory():Observable<IService>{
    return  this.http.get<IService>(this._url_first_category);
  }
  getServiceCategory():Observable<IService[]>{
    return  this.http.get<IService[]>(this._url_service_category);
  }

  getServiceFaq(url:any):Observable<IFaq[]>{
    return this.http.get<IFaq[]>(this._url_service_faq+'/'+url);
  }

  getTreatmentsByCategory(url:any):Observable<any[]>{
    return this.http.get<any[]>(this._url_treatment_by_category+'/'+url);
  }

  //service inner
  getServiceInner(url:any):Observable<any[]>{
    return this.http.get<any[]>(this._url_service_inner+'/'+url);
  }

  getSeviceType(url:any):Observable<any>{
    return this.http.get<any>(this._url_service_type+'/'+url);
  }

  // submitAppointmentForm(appointment:Appointment):any{
  //   return     this.http.post<any>(this._url_post_appointment,appointment);
  // }

  getDoctors():any{
    return this.http.get(this._url_doctors);
  }
 
  //for captcha
  getCaptcha():Observable<any>{

    // return  this.http.get<any>(this.baseUrl+'/captcha/api/math');
    return  this.http.get<any>(this.baseUrl+'/captcha/api');
  }

  validateCaptcha(data:any):Observable<any>{
    return    this.http.post(this.baseUrl+'/api/validate-captcha',data);
  }

  //seo

  seo(url:any): Observable<any>{       
    return this.http.get( this.baseUrl + "/api/seo" + url);
}


//all videos

allvideos():Observable<any>{   
  return this.http.get(this._all_videos);
}

  
}
