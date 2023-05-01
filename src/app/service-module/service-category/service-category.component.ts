import { Router } from '@angular/router';
import { IService } from './../../service';
import { Component,Inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TreatmentService } from '../treatment.service';
import { MetaService } from 'src/app/meta.service';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.scss']
})
export class ServiceCategoryComponent implements OnInit {
  public baseUrl = environment.baseUrl;
  public firstcategory:any;
  public serviceCategories:IService[]=[];
  p: number = 1; 
 
  public listseo:any;
  servelUrl = environment.servelUrl;

  constructor(private metaService: MetaService,private _serviceCategory:TreatmentService,  private router:Router,
 
    private meta: Meta,private title: Title, private _serviceInner:TreatmentService,  @Inject(DOCUMENT) private dom) { }
  
  
    ngOnInit(): void {
      this.getseolist();
      this._serviceCategory.getServiceCategory().subscribe(data=>this.serviceCategories=data);
      this._serviceCategory.getFirstCategory().subscribe(data=>this.firstcategory=data);
      
      
    }

    onSelect(url:any){
      this.router.navigate(['/treatments/',url]);
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


