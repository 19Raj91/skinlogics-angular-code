import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentformService } from 'src/app/appointmentform.service';
import { TreatmentService } from 'src/app/service-module/treatment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-requestacallbackform',
  templateUrl: './requestacallbackform.component.html',
  styleUrls: ['./requestacallbackform.component.scss'],
})
export class RequestacallbackformComponent implements OnInit {
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

  public isSubmitted: boolean;

  public baseUrl = environment.baseUrl;
  requestCallBackForm: FormGroup;
  public submitButtonText:string="Submit";

  ngOnInit(): void {

    this.isSubmitted = false;
    //instanciating appointmentForm
    this.requestCallBackForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
      ]),

      mobile: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),

      captcha: new FormControl(null, Validators.required),
      key: new FormControl(null),
    });
    this._serviceInner.getCaptcha().subscribe((data) => {
      this.captcha = data;
      this.requestCallBackForm.controls['key'].setValue(this.captcha.key);
    });
  }

  onSubmit() {
    console.log(this.requestCallBackForm);
    this.isSubmitted = true;
    if (this.requestCallBackForm.valid) {
      //validate captcha
      let payload = {
        key: this.requestCallBackForm.get('key').value,
        captcha: this.requestCallBackForm.get('captcha').value,
      };
      this._serviceInner.validateCaptcha(payload).subscribe((data) => {
        //this.response=;
        //save data
        if (data['message'] == 'valid captcha') {
          this.submitButtonText="Submitting...";
          this._appointment
            .submitRequestCallBackForm(this.requestCallBackForm.value)
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
    this.requestCallBackForm.controls['captcha'].setValue(null);
    this._serviceInner.getCaptcha().subscribe((data) => {
      this.captcha = data;
      this.requestCallBackForm.controls['key'].setValue(this.captcha.key);
    });
    this.showcaptchaerror = false;
  }
}
