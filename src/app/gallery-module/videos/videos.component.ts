import { DOCUMENT } from '@angular/common';
import { Component, Inject,OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MetaService } from 'src/app/meta.service';
import { TreatmentService } from 'src/app/service-module/treatment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  public allvideos:any;
  public title:any;
  public videoUrl:any;
  public baseUrl = environment.baseUrl;
  servelUrl = environment.servelUrl;
  public listseo:any;

  constructor(
    private _serviceInner:TreatmentService,
    private router:Router,
    private modalService: NgbModal,
    private sanitizer: DomSanitizer,
    private metaService: MetaService,
    private meta: Meta,private _title: Title,
    @Inject(DOCUMENT) private dom
    ) { }
  
  
  ngOnInit(): void {
    this.getseolist();
    this._serviceInner.allvideos().subscribe(data=>this.allvideos=data);
    
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
    
    this._title.setTitle(this.listseo.title_tag);
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
