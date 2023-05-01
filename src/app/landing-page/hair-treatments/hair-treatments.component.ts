import { TreatmentService } from './../../service-module/treatment.service';
import { Component, HostListener,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { getYear } from 'date-fns';
import locale from 'date-fns/locale/en-US';
import { DatepickerOptions } from 'ng2-datepicker';
import { MetaService } from 'src/app/meta.service';
import { LaningpageService } from '../laningpage.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hair-treatments',
  templateUrl: './hair-treatments.component.html',
  styleUrls: ['./hair-treatments.component.scss']
})
export class HairTreatmentsComponent implements  OnInit {
//for request callback topform
lpCallbackForm: FormGroup;
public lpCallbackFormSubmitted: boolean;
//for request callback with service dropdown
lpCallbackWithServiceDropdownForm: FormGroup;
public lpCallbackWithServiceDropdown: boolean;
//for consultation
lpConsultationForm: FormGroup;
public lpConsultationFormSubmitted: boolean;

public selectedService: any;
public listseo:any;
ngOnInit(): void {
  this.getseolist();
 
  //reuest callback top form
  this.lpCallbackFormSubmitted = false;
  this.lpCallbackForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
    ]),

    mobile: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
    service: new FormControl(window.location.href),
    requesturl: new FormControl(document.referrer),
    refferelurl: new FormControl(window.location.href),
  });
  //end of request callback topform ------


  //for consultation
  this.lpCallbackFormSubmitted=false;
  this.lpConsultationForm=new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
    ]),

    mobile: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
    date: new FormControl(null, [
      Validators.required,
      
    ]),
    email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )] ),
    message: new FormControl(null),
    service: new FormControl(window.location.href),
    requesturl: new FormControl(document.referrer),
    refferelurl: new FormControl(window.location.href),
  });
  //end consulation

 
}
// title = 'appBootstrap';
closeResult: string = '';
constructor(
  private modalService: NgbModal,
  private _landingPageService: LaningpageService,
  private router: Router,
  private metaService: MetaService,
  private _serviceInner:TreatmentService,
  private meta: Meta,private title: Title
) {}

/**
 * Write code on Method
 *
 * @return response()
 */
onSubmitlpCallbackForm() {
  console.log(this.lpCallbackForm);
  this.lpCallbackFormSubmitted = true;
  if (this.lpCallbackForm.valid) {
    this._landingPageService.
    submitLpRequestcallback(this.lpCallbackForm.value)
      .subscribe((data) => {
        if (data['result'] == 'success') {
          // this.result = data['result'];
           this.router.navigateByUrl('thank-you');
        }
      });
  }
}

onSubmitlpCallbackWithServiceDropdownForm(){
  this.lpCallbackWithServiceDropdown=true;
  if(this.lpCallbackWithServiceDropdownForm.valid){
    this._landingPageService.submitLprequestcallbackwithservice(this.lpCallbackWithServiceDropdownForm.value).subscribe(
      (data)=>{
        if(data['result']=='success'){
         // this.result = data['result'];
          //closing modal
          this.router.navigateByUrl('thank-you');
           //closing modal
            this.modalService.dismissAll('Save click');
   
         
        }
      }
    )
  }
}


onSubmitlpConsultationForm(){
console.log(this.lpConsultationForm.value);
  this.lpConsultationFormSubmitted=true;
  if(this.lpConsultationForm.valid){
    this._landingPageService.submitLpconsultation(this.lpConsultationForm.value).subscribe(
      (data)=>{
        if(data['result']=='success'){
         // this.result = data['result'];
          //closing modal
          this.router.navigateByUrl('thank-you');
           
   
         
        }
      }
    )
  }
  
}

open(content: any, service: any) {
  this.selectedService = service;
   //lp callback with service dropdown
   this.lpCallbackWithServiceDropdown = false;
   this.lpCallbackWithServiceDropdownForm = new FormGroup({
     name: new FormControl(null, [
       Validators.required,
       Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
     ]),

     mobile: new FormControl(null, [
       Validators.required,
       Validators.pattern('^[0-9]{10}$'),
     ]),

     service: new FormControl(this.selectedService),
     requesturl: new FormControl(document.referrer),
     refferelurl: new FormControl(window.location.href),
   });
   //end of
  this.modalService
    .open(content, { ariaLabelledBy: 'modal-basic-title' })
    .result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
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
    return `with: ${reason}`;
  }
}

date = '';
// options sample with default values
options: DatepickerOptions = {
  minYear: 2022, // minimum available and selectable year
  maxYear: getYear(new Date()) + 30, // maximum available and selectable year
  placeholder: 'Select Date*', // placeholder in case date model is null | undefined, example: 'Please pick a date'
  format: 'dd-MM-yyyy', // date format to display in input
  formatTitle: 'LLLL yyyy',
  formatDays: 'EEEEE',
  firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
  locale: locale, // date-fns locale
  position: 'bottom',
  minDate: new Date(new Date().setDate(new Date().getDate() - 1)),
  inputClass: '', // custom input CSS class to be applied
  calendarClass: 'datepicker-default', // custom datepicker calendar CSS class to be applied
  scrollBarColor: '#dfe3e9', // in case you customize you theme, here you define scroll bar color
};

isShow: boolean | undefined;
topPosToStartShowing = 100;

@HostListener('window:scroll')
checkScroll() {
  // window의 scroll top
  // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

  const scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  console.log('[scroll]', scrollPosition);

  if (scrollPosition >= this.topPosToStartShowing) {
    this.isShow = true;
  } else {
    this.isShow = false;
  }
}

// TODO: Cross browsing
gotoTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

//----------

display = false;
toggle() {
  this.display = !this.display;
}

navFixed: boolean = false;
private scrollOffset: number = 200;

@HostListener('window:scroll')
onWindowScroll() {
  this.navFixed =
    (window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0) > this.scrollOffset;
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
