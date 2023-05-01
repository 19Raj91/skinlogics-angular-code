import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AppointmentformService } from 'src/app/appointmentform.service';
import { TreatmentService } from 'src/app/service-module/treatment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-requestcallbackform-mobile',
  templateUrl: './requestcallbackform-mobile.component.html',
  styleUrls: ['./requestcallbackform-mobile.component.scss']
})
export class RequestcallbackformMobileComponent implements OnInit {
  // public isSubmitted: boolean;
  // public captcha?: any;
  // public response?: any;
  // public captchaStatus: string = "";
  // public showcaptchaerror:boolean=false;
  // requestCallBackFormMobile: FormGroup;
  //constructor(private modalService: NgbModal) {}
  //constructor(private modalService: NgbModal,private _serviceInner: TreatmentService, private _appointment: AppointmentformService, private router: Router) { }
  //appointment Form
  constructor(
    private modalService: NgbModal,
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
  requestCallBackFormMobile: FormGroup;
  public submitButtonText:string="Submit";
 // public result: any;


  // submit(val: any) {
  //   this.captchaStatus = "";
  //   this._serviceInner.validateCaptcha(val).subscribe(data => {
  //   this.response = data
  //   this.captchaStatus = this.response.message;
  //     if (this.captchaStatus == 'valid captcha') {
  //       this.onSubmit();
  //     } 
  //   });


  // }

  // onSubmit() {
  //  this.showcaptchaerror=true;
  //   if (this.requestCallBackForm.valid) {
  //     this._appointment.submitAppointmentForm(this.requestCallBackForm.value).subscribe(
  //       (response: any) => {

  //         if (response.result == 'success') {
  //           this.result = response.result;
  //           this.router.navigateByUrl('thank-you');
  //         }
  //       //closing modal
  //       this.modalService.dismissAll('Save click');
  //       }, 
  //       error => {
  //         this.result = "Error";
  //       },
  //     );
  //   } 

  // }

  onSubmit() {
    console.log(this.requestCallBackFormMobile);
    this.isSubmitted = true;
    if (this.requestCallBackFormMobile.valid) {
     
          this.submitButtonText="Submitting...";
          this._appointment
            . submitRequestCallBackFormWithEmail(this.requestCallBackFormMobile.value)
            .subscribe((data) => {
              if (data['result'] == 'success') {
                this.result = data['result'];
                this.modalService.dismissAll('Save click');
                this.router.navigateByUrl('thank-you');
              }
            });
        
    
    }
  }



  reloadcaptcha() {
    //clear captcha field
    this.requestCallBackFormMobile.controls['captcha'].setValue(null);
    this._serviceInner.getCaptcha().subscribe((data) => {
      this.captcha = data;
      this.requestCallBackFormMobile.controls['key'].setValue(this.captcha.key);
    });
    this.showcaptchaerror = false;
  }
  ngOnInit(): void {
    this.isSubmitted = false;
    //instanciating appointmentForm
    this.requestCallBackFormMobile = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
      ]),
     email: new FormControl(null),
      mobile: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),

      // captcha: new FormControl(null, Validators.required),
      // key: new FormControl(null),
    });
    // this._serviceInner.getCaptcha().subscribe((data) => {
    //   this.captcha = data;
    //   this.requestCallBackFormMobile.controls['key'].setValue(this.captcha.key);
    // });



  }

    closeResult: string = '';
      
  
   
      
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
  }


