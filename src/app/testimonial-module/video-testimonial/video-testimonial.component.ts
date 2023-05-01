import { WrittentestimonialService } from 'src/app/writtentestimonial.service';
import { Component, OnInit } from '@angular/core';
import { IVideoTestimonial } from 'src/app/interface/videotestimonials';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { MetaService } from 'src/app/meta.service';
import { TreatmentService } from 'src/app/service-module/treatment.service';

@Component({
  selector: 'app-video-testimonial',
  templateUrl: './video-testimonial.component.html',
  styleUrls: ['./video-testimonial.component.scss']
})
export class VideoTestimonialComponent implements OnInit {
  public baseUrl = environment.baseUrl;
  public testimonials:IVideoTestimonial[]=[];
  p: number = 1; 
 
//variables for model
public title="";
public videoUrl="";
public listseo:any;

  /* bootstrapmodal start */

  constructor(private _videoTestimonials:WrittentestimonialService, 
    private router:Router,
    private modalService: NgbModal,
    private sanitizer: DomSanitizer,
    private _serviceInner:TreatmentService,
    private metaService: MetaService,
    private meta: Meta,private _title: Title
    ) { }
  
  
  ngOnInit(): void {
    this.getseolist();
    this. _videoTestimonials.getVideoTestimonials().subscribe(data=>this.testimonials=data);
    
  }
  //front end code
  closeResult: string = '';

   open(content:any,data:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.title=data.name;
    this.videoUrl=data.video;


  }    
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getSantizeUrl(url:string) { 
    return this.sanitizer.bypassSecurityTrustResourceUrl(url); 
}
public  getseolist(){
  //removing canonical ; if any
  const els = document.querySelectorAll('link[rel=\'canonical\']');
  for (let i = 0, l = els.length; i < l; i++) {
    const el = els[i];
    el.remove();
  }
  this.metaService.createCanonicalURL();
   this._serviceInner.seo(this.router.url).subscribe(
   data=>{
     this.listseo = data;
   
     this._title.setTitle(this.listseo.title_tag);
           this.meta.updateTag({ name: 'description', content: this.listseo.description_tag });
           this.meta.updateTag({ name: 'keywords', content: this.listseo.keyword_tag });
           this.meta.updateTag({property: 'og:title', content: this.listseo.title_tag});
           // this.updateCanonicalUrl(this.servelUrl+this.router.url);
           
           this.meta.updateTag({property: 'og:image', content: ''});
           // this.meta.updateTag({property: 'og:url', content: this.servelUrl+this.router.url});
           this.meta.updateTag({property: 'og:site_name', content: 'Skinlogics'});
           this.meta.updateTag({property: 'og:type', content: 'Website'});
           this.meta.updateTag({property: 'og:description', content: this.listseo.description_tag});
   
           this.meta.updateTag({property: 'twitter:card', content: ''});
           this.meta.updateTag({property: 'twitter:title', content: this.listseo.title_tag});
           this.meta.updateTag({property: 'twitter:image', content: ''});
           this.meta.updateTag({property: 'twitter:site', content: 'Skin Logics'});
           this.meta.updateTag({property: 'twitter:description', content: this.listseo.description_tag});
     //console.log(this.listseo);
   } 
   );
   }
}
