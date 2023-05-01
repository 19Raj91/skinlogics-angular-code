import { Component, Inject, inject, OnInit } from '@angular/core';
import { getYear } from 'date-fns';
import locale from 'date-fns/locale/en-US';
import { DatepickerOptions } from 'ng2-datepicker';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TreatmentService } from 'src/app/service-module/treatment.service';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from 'src/app/meta.service';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-about-clinic',
  templateUrl: './about-clinic.component.html',
  styleUrls: ['./about-clinic.component.scss']
})
export class AboutClinicComponent implements OnInit {  
  public listseo:any;
  servelUrl = environment.servelUrl;
  ngOnInit(): void {
     
    console.log('test');
    this.getseolist();
  }
/* bootstrapmodal start */

 // title = 'appBootstrap';   
  closeResult: string = '';
  constructor(private metaService: MetaService,private modalService: NgbModal,private _serviceInner:TreatmentService,private meta: Meta,private title: Title,private router:Router,@Inject(DOCUMENT) private dom) {}
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
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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



/*---------------------------date picker start----------------------------------------*/

  date = new Date();

// options sample with default values
options: DatepickerOptions = {
  minYear: 1970, // minimum available and selectable year
  maxYear: getYear(new Date()) + 30, // maximum available and selectable year
  placeholder: 'Appointment Date*', // placeholder in case date model is null | undefined, example: 'Please pick a date'
  format: 'dd-LL-yyyy', // date format to display in input
  formatTitle: 'LLLL yyyy',
  formatDays: 'dd',
  firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
  locale: locale, // date-fns locale
  position: 'bottom',
  inputClass: '', // custom input CSS class to be applied
  calendarClass: 'datepicker-default', // custom datepicker calendar CSS class to be applied
  scrollBarColor: '#dfe3e9', // in case you customize you theme, here you define scroll bar color
  // keyboardEvents: true // enable keyboard events
  minDate:undefined,
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
