import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { getYear } from 'date-fns';
import locale from 'date-fns/locale/en-US';
import { DatepickerOptions } from 'ng2-datepicker';
import { map } from 'rxjs';
import { AppointmentformService } from 'src/app/appointmentform.service';
import { MetaService } from 'src/app/meta.service';
import { TreatmentService } from 'src/app/service-module/treatment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private _serviceInner: TreatmentService,
    private _appointment: AppointmentformService,
    private router: Router,
    private metaService: MetaService,
    private meta: Meta,private title: Title,
    @Inject(DOCUMENT) private dom,
  ) { }

  public captcha?: any;
  public response?: any;
  public showcaptchaerror: boolean = false;
  public result: any;
  public captchastatus: any;

  public isSubmitted: boolean;

  public baseUrl = environment.baseUrl;
  servelUrl = environment.servelUrl;
  appointmentForm: FormGroup;
  public listseo:any;
  

  ngOnInit(): void {
    this.getseolist();
    this.isSubmitted = false;
    //instanciating appointmentForm
    this.appointmentForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
      ]),

      mobile: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),

      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )] ),
      message:new FormControl(null),
      captcha: new FormControl(null, Validators.required),
      key: new FormControl(null),
    });
    this._serviceInner.getCaptcha().subscribe((data) => {
      this.captcha = data;
      this.appointmentForm.controls['key'].setValue(this.captcha.key);
    });
  }
  
  onSubmit() {
    console.log(this.appointmentForm);
    this.isSubmitted = true;
    if(this.appointmentForm.valid){
      //validate captcha
    let payload = {
      key: this.appointmentForm.get('key').value,
      captcha: this.appointmentForm.get('captcha').value,
    };
    this._serviceInner.validateCaptcha(payload).subscribe(data => {
      //this.response=;
      //save data
      if (data['message'] == 'valid captcha') {
        this._appointment
          .submitContactUs(this.appointmentForm.value)
          .subscribe(
            data => {
              if (data['result'] == 'success') {
                this.result = data['result'];
                this.router.navigateByUrl('thank-you');
              }
            }

          );
      }else{
        //if captcha is not valid show error and reload captcha
        alert("Invalid captcha ! Try Again");
        this.reloadcaptcha();
        
      }
    });

    }
    
  }

  reloadcaptcha() {
    //clear captcha field
    this.appointmentForm.controls['captcha'].setValue(null);
    this._serviceInner.getCaptcha().subscribe((data) => {
      this.captcha = data;
      this.appointmentForm.controls['key'].setValue(this.captcha.key);
    });
    this.showcaptchaerror = false;
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
