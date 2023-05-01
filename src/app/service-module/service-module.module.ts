
import { SharedModule } from './../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { ServiceInnerComponent } from './service-inner/service-inner.component';

import { RouterModule, Routes } from '@angular/router';
import { TreatmentsComponent } from './treatments/treatments.component';
import { ServiceByCategoryComponent } from './service-by-category/service-by-category.component';
import { ServiceTypeComponent } from './service-type/service-type.component';
import { ErrornotfoundComponent } from '../skinlogics-module/errornotfound/errornotfound.component';
import { HomeComponent } from '../skinlogics-module/home/home.component';
import { ServiceRouterComponent } from './service-router/service-router.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceRouterComponent ,
    children: [
      // {path:'404', component:ErrornotfoundComponent},
      { path: '', component: HomeComponent },
      { path: ':name', component: ServiceInnerComponent },
    
     // { path: 'treatments/:url', component: ServiceByCategoryComponent },
    ],
  },
];



@NgModule({
  declarations: [
    ServiceCategoryComponent,
    ServiceInnerComponent,
 
    TreatmentsComponent,
    ServiceByCategoryComponent,
    ServiceTypeComponent,
    ServiceRouterComponent,
 
   

   
  ],
  imports: [
  
    CommonModule,RouterModule, SharedModule, RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ServiceModuleModule { }
