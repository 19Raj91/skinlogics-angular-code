import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrittenTestimonialComponent } from './written-testimonial/written-testimonial.component';
import { VideoTestimonialComponent } from './video-testimonial/video-testimonial.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';

import { Routes, RouterModule } from '@angular/router';
import { TestimonialRouterComponent } from './testimonial-router/testimonial-router.component';
const routes: Routes = [
  {
    path: '',
    component: TestimonialRouterComponent,
    children: [
      
    { path: "testimonials", component:WrittenTestimonialComponent},
    { path: "video-testimonials", component:VideoTestimonialComponent},
    ],
  },
];



@NgModule({
  declarations: [
    WrittenTestimonialComponent,
    VideoTestimonialComponent,
    TestimonialRouterComponent

  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    SharedModule,
    RouterModule.forChild(routes)

    
  ],
  exports:[
    WrittenTestimonialComponent,
    VideoTestimonialComponent,
    SharedModule,
    RouterModule

  
  ]
})
export class TestimonialModuleModule { }
