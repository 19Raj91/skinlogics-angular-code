import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MetaService } from 'src/app/meta.service';
import { TreatmentService } from 'src/app/service-module/treatment.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  public listseo:any;
  constructor(
    private _serviceInner: TreatmentService,
 
    private router: Router,
    private metaService: MetaService,
    private meta: Meta,private title: Title,
  ) { }

  ngOnInit(): void {
    this.getseolist();
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
     
       this.title.setTitle(this.listseo.title_tag);
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
