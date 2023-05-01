import { NgModule } from '@angular/core';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RequestacallbackformComponent } from './requestacallbackform/requestacallbackform.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DtFormComponent } from './dt-form/dt-form.component';
import { DtwhyChooseComponent } from './dtwhy-choose/dtwhy-choose.component';
import { FaqsComponent } from './faqs/faqs.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DtDermatologistComponent } from './dt-dermatologist/dt-dermatologist.component';
import { MobileFormComponent } from './mobile-form/mobile-form.component';
import { MobileTestimonialComponent } from './mobile-testimonial/mobile-testimonial.component';
import { VideoTestimonialsComponent } from './video-testimonials/video-testimonials.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

import { RequestcallbackformMobileComponent } from './requestcallbackform-mobile/requestcallbackform-mobile.component';
import { SkinDoctorComponent } from './skin-doctor/skin-doctor.component';
import { MbSkinDoctorComponent } from './mb-skin-doctor/mb-skin-doctor.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DatepickerModule } from 'ng2-datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedRouterComponent } from './shared-router/shared-router.component';
import { QuickAppointmentComponent } from './quick-appointment/quick-appointment.component';

const routes: Routes=[
 { path: 'book-an-appointment',
  component: SharedRouterComponent,
  children:[
    { path: '', component: AppointmentComponent },
    { path: '', component: AppointmentComponent },
  
    ],
  }
];



@NgModule({
  declarations: [
    RequestacallbackformComponent,
    AppointmentComponent,
    DtFormComponent,
    DtwhyChooseComponent,
    FaqsComponent,
    NavigationComponent,
  
    DtDermatologistComponent,
    MobileFormComponent,
    MobileTestimonialComponent,
    VideoTestimonialsComponent,
    TestimonialComponent,
    HeaderComponent,
    FooterComponent,
    RequestcallbackformMobileComponent,
    SkinDoctorComponent,
    MbSkinDoctorComponent,
    SharedRouterComponent,
    QuickAppointmentComponent,
 



  ],
  imports: [
    CommonModule,
    RouterModule,
    DatepickerModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
   

  ],
  exports: [
  
    RequestacallbackformComponent,
    AppointmentComponent,
    DtFormComponent,
    DtwhyChooseComponent,
    FaqsComponent,
    NavigationComponent,
    DtDermatologistComponent,
    MobileFormComponent,
    MobileTestimonialComponent,
    VideoTestimonialsComponent,
    TestimonialComponent,
    HeaderComponent,
    FooterComponent,
    RequestcallbackformMobileComponent,
    SkinDoctorComponent,
    MbSkinDoctorComponent,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
