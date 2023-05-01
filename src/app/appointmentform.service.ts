import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentformService {
  public baseUrl = environment.baseUrl;
  private _url_appointment_form=this.baseUrl+'/api/save-appointment';
  private _url_Quick_appointment_form=this.baseUrl+'/api/save-quick-appointment';
  private _url_requestcallback_form=this.baseUrl+'/api/save-requestcallback';
  private _url_requestcallback_form_with_email=this.baseUrl+'/api/save-requestcallback-with-email';
  private _url_contactus_form=this.baseUrl+'/api/save-contactus';

  constructor(private _http:HttpClient) { }

  submitAppointmentForm(userData:any){
    return this._http.post(this._url_appointment_form,userData)
  }

  submitQuickAppointmentForm(userData:any){
    return this._http.post(this._url_appointment_form,userData)
  }

  submitRequestCallBackForm(userData:any){
    return this._http.post(this._url_requestcallback_form,userData);
  }
  submitRequestCallBackFormWithEmail(userData:any){
    return this._http.post(this._url_requestcallback_form_with_email,userData);
  }

  submitContactUs(userData:any){
    return this._http.post(this._url_contactus_form,userData);
  }
}
