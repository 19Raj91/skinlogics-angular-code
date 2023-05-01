import { DOCUMENT } from '@angular/common';
import { ConditionalExpr } from '@angular/compiler';
import { Component, Inject,OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { json } from 'express';
import { WrittenTestimonial } from 'src/app/interface/writtentestimonial';
import { MetaService } from 'src/app/meta.service';
import { TreatmentService } from 'src/app/service-module/treatment.service';
import { WrittentestimonialService } from 'src/app/writtentestimonial.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-written-testimonial',
  templateUrl: './written-testimonial.component.html',
  styleUrls: ['./written-testimonial.component.scss']
})
export class WrittenTestimonialComponent implements OnInit {
  public baseUrl = environment.baseUrl;
  servelUrl = environment.servelUrl;
  public testimonials:WrittenTestimonial[]=[];
  p: number = 1; 
  public listseo:any;
 
 
  myScriptElement: HTMLScriptElement;

  constructor(
    private _writtenTestimonials:WrittentestimonialService, 
    private router:Router,
    private _serviceInner: TreatmentService,
    private metaService: MetaService,
    private meta: Meta,private title: Title,
    @Inject(DOCUMENT) private dom
    ) { }
  
  
    ngOnInit(): void {
      this. _writtenTestimonials.getTestimonials().subscribe(data=>this.testimonials=data);
      
    }
    updateCanonicalUrl(url:string){
      const head = this.dom.getElementsByTagName('head')[0];
      var element: HTMLLinkElement= this.dom.querySelector(`link[rel='canonical']`) || null
      if (element==null) {
        element= this.dom.createElement('link') as HTMLLinkElement;
        head.appendChild(element);
      }
      element.setAttribute('rel','canonical')
      element.setAttribute('href',url)
    }
    getseolist(){
      this._serviceInner.seo(this.router.url).subscribe(
      data=>{
        this.listseo = data;
        
        this.title.setTitle(this.listseo.title_tag);
              this.meta.updateTag({ name: 'description', content: this.listseo.description_tag });
              this.meta.updateTag({ name: 'keywords', content: this.listseo.keyword_tag });
              this.meta.updateTag({property: 'og:title', content: this.listseo.title_tag});
              this.updateCanonicalUrl(this.servelUrl+this.router.url);
              
              this.meta.updateTag({property: 'og:image', content: ''});
              this.meta.updateTag({property: 'og:url', content: this.servelUrl+this.router.url});
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
