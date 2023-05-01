import { Component, Inject, OnInit, VERSION } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { StateChange } from 'ng-lazyload-image';
import { BlogService } from 'src/app/blog.service';
import { IBlog } from 'src/app/interface/blog';
import { MetaService } from 'src/app/meta.service';
import { DOCUMENT } from '@angular/common';

import { TreatmentService } from 'src/app/service-module/treatment.service';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public device:any;
  public listseo:any;
  //lazy-load
  name = 'Angular ' + VERSION.major;

  image1="assets/images/banner-mob.webp";
  image2="assets/images/home-banner.webp";
  image3="assets/images/home-crousel-1.webp";
  image4="assets/images/home-crousel-2.webp";
  image5="assets/images/home-crousel-3.webp";
  image6="assets/images/pigments-spots.webp";
  image7="assets/images/pigmentbg.webp";
  image8="assets/images/Aboutclnic-Skin-Tightening.webp";
  image9="assets/images/Aboutclnic-FacialLiftContouring.webp";
  image10="assets/images/Aboutclnic-Skin-Brightening.webp";
  image11="assets/images/dskinaging.webp";
  image12="assets/images/homeunwantedhair.webp";
  image13="assets/images/homeResurfacing.webp";
  image14="assets/images/homemobile-hair-care.webp";
  image15="assets/images/homemobile-antiaging.webp";
  image16="assets/images/young-couple.webp";
  image17="assets/images/pretty-woman.webp";
  image18="assets/images/homemobile-antiaging.webp";
  image19="assets/images/homemobile-antiaging.webp";
  
  // image20="{{baseUrl}}/backend/blog/{{blog.blog_image}}";


  myCallbackFunction(event: StateChange) {
    switch (event.reason) {
      case 'setup':
        // The lib has been instantiated but we have not done anything yet.
        break;
      case 'observer-emit':
        // The image observer (intersection/scroll/custom observer) has emit a value so we
        // should check if the image is in the viewport.
        // `event.data` is the event in this case.
        break;
      case 'start-loading':
        // The image is in the viewport so the image will start loading
        break;
      case 'mount-image':
        // The image has been loaded successfully so lets put it into the DOM
        break;
      case 'loading-succeeded':
        // The image has successfully been loaded and placed into the DOM
        break;
      case 'loading-failed':
        // The image could not be loaded for some reason.
        // `event.data` is the error in this case
        break;
      case 'finally':
        // The last event before cleaning up
        break;
    }
  }


  //end lazyload

  //for latest blog
  public baseUrl = environment.baseUrl;
  public servelUrl = environment.servelUrl;
  public blogs:IBlog[]=[];
 

  onSelect(blog:any){
    this.router.navigate(['/blog',blog.url])
  }
  
    
  
  //title = 'appBootstrap';
   
  closeResult: string = '';
  constructor(private metaService: MetaService,private modalService: NgbModal,private _blogService:BlogService, private router:Router,private _serviceInner:TreatmentService,private meta: Meta,private title: Title,@Inject(DOCUMENT) private dom) {}
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
  /**
   * Write code on Method
   *
   * @return response()
   */
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } 
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit(): void {
    this.checkDevice();
    this.getseolist();
    this._blogService.getBlogs().subscribe(data=>this.blogs=data);
    
  }

  getseolist(){
    
    this._serviceInner.seo('/home').subscribe(
    data=>{
      this.listseo = data;
      
      this.title.setTitle(this.listseo.title_tag);
            this.meta.addTag  ({ name: 'description', content: this.listseo.description_tag });
            this.meta.addTag({ name: 'keywords', content: this.listseo.keyword_tag });
            // this.meta.addTag({property: 'title', content: this.listseo.title_tag});
            this.updateCanonicalUrl(this.servelUrl+this.router.url);
            
            this.meta.addTag({property: 'og:image', content: ''});
            this.meta.updateTag({property: 'og:url', content: this.servelUrl+this.router.url});
            this.meta.addTag({property: 'og:site_name', content: 'Skinlogics'});
            this.meta.addTag({property: 'og:type', content: 'Website'});
            this.meta.updateTag({property: 'og:description', content: this.listseo.description_tag});
    
            this.meta.addTag({property: 'twitter:card', content: ''});
            this.meta.addTag({property: 'twitter:title', content: this.listseo.title_tag});
            this.meta.addTag({property: 'twitter:image', content: ''});
            this.meta.addTag({property: 'twitter:site', content: 'Skin Logics'});
            this.meta.addTag({property: 'twitter:description', content: this.listseo.description_tag});
      //console.log(this.listseo);
    } 
    );
    }

    public checkDevice() {
      var ua = navigator.userAgent;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)){
      this.device="mobile";
    }else{
      this.device="desktop";
    }
     
    }
  
   

    
}


