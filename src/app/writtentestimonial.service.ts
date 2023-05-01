import { ITestimonial } from './interface/testimonial';



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { IVideoTestimonial } from './interface/videotestimonials';


@Injectable({
  providedIn: 'root'
})
export class WrittentestimonialService {
  public baseUrl = environment.baseUrl;
  private _url=this.baseUrl+'/api/written-testimonial';
  private _url_home=this.baseUrl+'/api/written-testimonial-home';

  constructor(private http:HttpClient) { }

  getTestimonials():Observable<ITestimonial[]>{
    return  this.http.get<ITestimonial[]>(this._url);
  }

  getTestimonialsHome():Observable<ITestimonial[]>{
    return  this.http.get<ITestimonial[]>(this._url_home);
  }
  getVideoTestimonials():Observable<IVideoTestimonial[]>{
    return  this.http.get<IVideoTestimonial[]>(this.baseUrl+'/api/video-testimonial');
  }
}
