import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getYear } from 'date-fns';
import locale from 'date-fns/locale/en-US';
import { DatepickerOptions } from 'ng2-datepicker';
import { map } from 'rxjs';
import { AppointmentformService } from 'src/app/appointmentform.service';
import { TreatmentService } from 'src/app/service-module/treatment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mobile-form',
  templateUrl: './mobile-form.component.html',
  styleUrls: ['./mobile-form.component.scss']
})
export class MobileFormComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private _serviceInner: TreatmentService,
    private _appointment: AppointmentformService,
    private router: Router
  ) {}
  public captcha?: any;
  public response?: any;
  public showcaptchaerror: boolean = false;
  public result: any;
  public captchastatus: any;

  public isSubmitted: boolean = false;

  public baseUrl = environment.baseUrl;
  public appointmentForm:any;
  public submitButtonText:string="Submit";

  ngOnInit(): void {
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
      message: new FormControl(null),
      date: new FormControl(null, [Validators.required]),
      // captcha: new FormControl(null, {
      //   validators: Validators.required,
      //   asyncValidators: [captchaAsyncValidator(this.httpClient)],
      //   updateOn: 'change',
      // }),
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
    if (this.appointmentForm.valid) {
      //validate captcha
      let payload = {
        key: this.appointmentForm.get('key').value,
        captcha: this.appointmentForm.get('captcha').value,
      };
      this._serviceInner.validateCaptcha(payload).subscribe((data) => {
        //this.response=;
        //save data
        if (data['message'] == 'valid captcha') {
          this.submitButtonText="Submitting...";
          this._appointment
            .submitAppointmentForm(this.appointmentForm.value)
            .subscribe((data) => {
              if (data['result'] == 'success') {
                this.result = data['result'];
                this.router.navigateByUrl('thank-you');
              }
            });
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

  //custom validator
  // noSpaceAllowed(control:FormControl){
  //   if(control.value!=null && control.value.indexOf(' ') !=-1){
  //     return {noSpaceAllowed:true}
  //   }
  //   return null;
  // }

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
}
