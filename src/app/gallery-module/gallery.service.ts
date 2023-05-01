import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  public baseUrl = environment.baseUrl;
  private _url=this.baseUrl+'api/gallery';



  constructor(private http:HttpClient) { }

  getImageGallery():Observable<any>{
    return  this.http.get<any>('https://api.skinlogics.in/api/gallery');
  }
}
