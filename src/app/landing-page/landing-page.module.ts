import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LhrComponent } from './lhr/lhr.component';
import { LandingRouterComponent } from './landing-router/landing-router.component';
import { RouterModule, Routes } from '@angular/router';
import { HairTreatmentsComponent } from './hair-treatments/hair-treatments.component';
import { SkinBrighteningComponent } from './skin-brightening/skin-brightening.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';

const routes: Routes=[
  { path: '',
   component: LandingRouterComponent,
   children:[
     { path: 'lhr', component: LhrComponent },
     { path: 'hair', component: HairTreatmentsComponent },
     { path: 'skin-brightening', component: SkinBrighteningComponent },
   
     ],
   }
 ];
 
 

@NgModule({
  declarations: [
    LhrComponent,
    LandingRouterComponent,
    HairTreatmentsComponent,
    SkinBrighteningComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatepickerModule,
    RouterModule.forChild(routes)
  ],exports:[
    RouterModule

  ]
})
export class LandingPageModule { }
