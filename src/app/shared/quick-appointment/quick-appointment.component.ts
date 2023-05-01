import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentformService } from 'src/app/appointmentform.service';
import { TreatmentService } from 'src/app/service-module/treatment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quick-appointment',
  templateUrl: './quick-appointment.component.html',
  styleUrls: ['./quick-appointment.component.scss']
})
export class QuickAppointmentComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private _serviceInner: TreatmentService,
    private _appointment: AppointmentformService,
    private router: Router
  ) { }
  public captcha?: any;
  public response?: any;
  public showcaptchaerror: boolean = false;
  public result: any;
  public captchastatus: any;

  public isSubmitted: boolean;

  public baseUrl = environment.baseUrl;
  appointmentForm: FormGroup;
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

      email: new FormControl(null,),
      
    });
   
  }

  onSubmit() {
    console.log(this.appointmentForm);
    this.isSubmitted = true;
    if (this.appointmentForm.valid) {
      
          this.submitButtonText="Submitting...";
          this._appointment
            .submitAppointmentForm(this.appointmentForm.value)
            .subscribe((data) => {
              if (data['result'] == 'success') {
                this.result = data['result'];
                this.router.navigateByUrl('thank-you');
              }
            });
        
    }
  }

 

}
