import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosComponent } from './videos/videos.component';
import { ImagesComponent } from './images/images.component';
import { SharedModule } from '../shared/shared.module';
import { SkinlogicsModuleModule } from '../skinlogics-module/skinlogics-module.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { GalleryRouterComponent } from './gallery-router/gallery-router.component';

const routes:Routes=[
  {
    path:'',
    component:GalleryRouterComponent,
    children:[
      { path:'videos', component:VideosComponent},
      { path:'gallery',component:ImagesComponent},

    ]

  }
];

@NgModule({
  declarations: [
  
    VideosComponent,
    ImagesComponent,
    GalleryRouterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SkinlogicsModuleModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class GalleryModuleModule { }
