import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeAfterComponent } from './before-after/before-after.component';
import { BeforeAfterInnerComponent } from './before-after-inner/before-after-inner.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { Router, Routes, RouterModule } from '@angular/router';
import { ResultRouterComponent } from './result-router/result-router.component';


const routes: Routes = [
  {
    path: 'real-results',
    component: ResultRouterComponent,
    children: [
      { path:'', component:BeforeAfterComponent},
      { path:':url', component:BeforeAfterInnerComponent},
   
    ],
  },
];


@NgModule({
  declarations: [
    BeforeAfterComponent,
    BeforeAfterInnerComponent,
    ResultRouterComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)

  
  ],
  exports:[
    BeforeAfterComponent,
    BeforeAfterInnerComponent,
    RouterModule

  ]
})
export class ResultModuleModule { }
