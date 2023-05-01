import { Component, Inject,OnInit } from '@angular/core';
import { getYear } from 'date-fns';
import locale from 'date-fns/locale/en-US';
import { DatepickerOptions } from 'ng2-datepicker';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IBlog } from 'src/app/interface/blog';
import { BlogService } from 'src/app/blog.service';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TreatmentService } from 'src/app/service-module/treatment.service';
import { AppointmentformService } from 'src/app/appointmentform.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogDetailsService } from 'src/app/blog-details.service';
import { MetaService } from 'src/app/meta.service';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {
 
  
  public baseUrl = environment.baseUrl;
  public blogs: IBlog[] = [];
  p: number = 1;

  public url: any;
  public singleBlog: any;
  public listseo:any;



  onSelect(blog: any) {
    this.router.navigate(['/blog', blog.url]);
  }

  constructor(
    private route: ActivatedRoute,
    private _blogDetailsService: BlogDetailsService,
    private _blogService: BlogService,
    private httpClient: HttpClient,
    private _serviceInner: TreatmentService,
    private _appointment: AppointmentformService,
    private router: Router,
    private metaService: MetaService,
    private meta: Meta,private title: Title,
    @Inject(DOCUMENT) private dom,
  ) {

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
         /* Your code goes here on every router change */
         let url = this.route.snapshot.paramMap.get('url');
         this.url = url;
         this._blogDetailsService
           .getBlogDetails(this.url)
           .subscribe((data) => (this.singleBlog = data));
         this._blogService.getBlogs().subscribe((data) => (this.blogs = data));
    
      }
    });
  }
  public captcha?: any;
  public response?: any;
  public showcaptchaerror: boolean = false;
  public result: any;
  public isSubmitted: boolean;
  appointmentForm: FormGroup;
  servelUrl = environment.servelUrl;

  ngOnInit(): void {
  
    let url = this.route.snapshot.paramMap.get('url');
    this.url = url;
    this._blogDetailsService
      .getBlogDetails(this.url)
      .subscribe((data) => (this.singleBlog = data));
    this._blogService.getBlogs().subscribe((data) => (this.blogs = data));
    this.getseolist('/'+this.url);
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
      date: new FormControl(null,Validators.required),
      // captcha: new FormControl(null, {
      //   validators: Validators.required,
      //   asyncValidators: [captchaAsyncValidator(this.httpClient)],
      //   updateOn: 'change',
      // }),
      captcha: new FormControl(null,Validators.required),
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
this._serviceInner.validateCaptcha(payload).subscribe(data=>{
  //this.response=;
  //save data
  if (data['message']== 'valid captcha') {
    this._appointment
      .submitAppointmentForm(this.appointmentForm.value)
      .subscribe(
        data=>{
          if (data['result']== 'success') {
            this.result =data['result'];
            this.router.navigateByUrl('thank-you');
          }
        }
        
      );
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

  //front end code start
  
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
 
//customized for blog details
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
getseolist(blogUrl:any){
  this._serviceInner.seo(blogUrl).subscribe(
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
 