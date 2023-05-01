import { DOCUMENT } from '@angular/common';
import { Component, Inject,OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { MetaService } from 'src/app/meta.service';
import { TreatmentService } from 'src/app/service-module/treatment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-before-after',
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.scss']
})
export class BeforeAfterComponent implements OnInit {
public beforeafter:any;
public baseUrl = environment.baseUrl;
servelUrl = environment.servelUrl;
public listseo:any;

  constructor(private metaService: MetaService,private _blogService:BlogService, private router:Router,
    private _serviceInner:TreatmentService,
    private meta: Meta,private title: Title,
    @Inject(DOCUMENT) private dom) { }

  ngOnInit(): void {
    this.getseolist();
 
    this._blogService.getBeforeAfter().subscribe(data=>this.beforeafter=data);
   console.log( this.beforeafter);
  }
  onSelect(result:any){
    this.router.navigate(['/real-results',result.url])
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
    }}
