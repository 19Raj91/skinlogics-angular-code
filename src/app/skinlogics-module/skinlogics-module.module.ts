import { PoojamoliaComponent } from './poojamolia/poojamolia.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsComponent } from './contact-us/contact-us.component';

import { ThankyouComponent } from './thankyou/thankyou.component';
import { ErrornotfoundComponent } from './errornotfound/errornotfound.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { HomeComponent } from './home/home.component';
import { AboutClinicComponent } from './about-clinic/about-clinic.component';

import { DatepickerModule } from 'ng2-datepicker';
import { VandanamalikComponent } from './vandanamalik/vandanamalik.component';
import { SkinlogicsRouterComponent } from './skinlogics-router/skinlogics-router.component';
import { SkinDoctorComponent } from '../shared/skin-doctor/skin-doctor.component';
import { LazyLoadImageModule} from 'ng-lazyload-image';
import { QuickAppointmentComponent } from '../shared/quick-appointment/quick-appointment.component';


const routes:Routes=[
  {
    path:'',
    component:SkinlogicsRouterComponent,
    children:[
      { path: '', component: HomeComponent },
      // { path: 'about-skinlogics', component: AboutClinicComponent },
      { path: 'about-clinic', component: AboutClinicComponent },

      { path: 'contact-us', component: ContactUsComponent },
      { path: 'skin-doctor-in-noida', component:SkinDoctorComponent  },
      // { path: 'about-doctor', component: AboutDoctorComponent },
      { path: 'terms-conditions', component: TermsConditionsComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },

      { path: 'thank-you', component: ThankyouComponent },
      { path: 'dr-vandana-malik', component: VandanamalikComponent },
      { path: 'dr-pooja-moliya', component: PoojamoliaComponent },
     
      { path:'quick-appointment', component:QuickAppointmentComponent},
      { path: '404', component: ErrornotfoundComponent },
           ],
  }

       
]


@NgModule({
  declarations: [
 
    ContactUsComponent,
    ThankyouComponent,
    ErrornotfoundComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    HomeComponent,
    AboutClinicComponent,
    
    PoojamoliaComponent,
    VandanamalikComponent,
    SkinlogicsRouterComponent,
  

  
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    DatepickerModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes)
   
  ],
  exports:[
    RouterModule
   
  ]
})
export class SkinlogicsModuleModule { }
