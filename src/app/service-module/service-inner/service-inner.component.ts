import { IFaq } from './../../faq';
import { IService } from './../../service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { TreatmentService } from '../treatment.service';
import { environment } from 'src/environments/environment';
import { Meta, Title } from '@angular/platform-browser';
import { MetaService } from 'src/app/meta.service';

@Component({
  selector: 'app-service-inner',
  templateUrl: './service-inner.component.html',
  styleUrls: ['./service-inner.component.scss',
],
encapsulation: ViewEncapsulation.None,
})
export class ServiceInnerComponent implements OnInit {
public baseUrl = environment.baseUrl;
public name:any;
public serviceDetails?:IService;
public serviceSection:any;
public serviceFaq:IFaq[]=[];
public serviceType:any;
public treatmentList:any;

public serviceInner:any;
public listseo:any;
  constructor(private metaService: MetaService,private route:ActivatedRoute,private _serviceInner:TreatmentService, private router:Router,private meta: Meta,private title: Title) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
         /* Your code goes here on every router change */
         this.serviceType=null;
         this.serviceDetails=null;
         this.treatmentList=null;
         this.serviceDetails=null;
         this.serviceSection=null;
         //removing canonical ; if any
         const els = document.querySelectorAll('link[rel=\'canonical\']');
         for (let i = 0, l = els.length; i < l; i++) {
           const el = els[i];
           el.remove();
         }
         //setting canonical
         this.metaService.createCanonicalURL();//setting canonical
        this.refresh404()
    
      }
    });
   }

  // ngOnInit(): void {
  //  this.route.paramMap.subscribe(params=>{
  //  this.name=params.get('name');
  //  this._serviceInner.getServiceDetail(this.name).subscribe(data=>this.serviceDetails=data);  
  //  this._serviceInner.getServiceSection(this.name).subscribe(data=>this.serviceSection=data);
  //  this._serviceInner.getServiceInner(this.name).subscribe(data=>this.serviceInner=data);

  //  })
  
  ngOnInit(): void {
    this.getseolist();
    this.route.paramMap.subscribe(params=>{
    this.name=params.get('name');
    //get the service type
    this._serviceInner.getServiceFaq(this.name).subscribe(data=>this.serviceFaq=data);
    });
    this.serviceType=this._serviceInner.getSeviceType(this.name).subscribe((data)=>{
      this.serviceType=data;
      if(this.serviceType.service_type=='service'){
        this._serviceInner.getServiceDetail(this.name).subscribe(data=>this.serviceDetails=data);  
        this._serviceInner.getServiceSection(this.name).subscribe(data=>this.serviceSection=data);
        this._serviceInner.getServiceInner(this.name).subscribe(data=>this.serviceInner=data);
        this.getseolist();
      }else if(this.serviceType.service_type=='category'){
        // this._serviceInner.getTreatmentsByCategory(this.name).subscribe(data=>this.treatmentList=data);  
        // this.router.navigate(['/treatments',this.name]);
        this._serviceInner.getTreatmentsByCategory(this.name).subscribe(data=>this.treatmentList=data);  

      }else{
        this.router.navigate(['/404']);
      }
    }); 
     
    

 
  
  }

public refresh404(){
  this.getseolist();
    this.route.paramMap.subscribe(params=>{
    this.name=params.get('name');
    //get the service type
    this._serviceInner.getServiceFaq(this.name).subscribe(data=>this.serviceFaq=data);
    });
    this.serviceType=this._serviceInner.getSeviceType(this.name).subscribe((data)=>{
      this.serviceType=data;
      if(this.serviceType.service_type=='service'){
        this._serviceInner.getServiceDetail(this.name).subscribe(data=>this.serviceDetails=data);  
        this._serviceInner.getServiceSection(this.name).subscribe(data=>this.serviceSection=data);
        this._serviceInner.getServiceInner(this.name).subscribe(data=>this.serviceInner=data);
        this.getseolist();
      }
      if(this.serviceType.service_type=='category'){
        // this._serviceInner.getTreatmentsByCategory(this.name).subscribe(data=>this.treatmentList=data);  
        // this.router.navigate(['/treatments',this.name]);
        this._serviceInner.getTreatmentsByCategory(this.name).subscribe(data=>this.treatmentList=data);  

      }
    }); 
}

 public  getseolist(){
  
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
