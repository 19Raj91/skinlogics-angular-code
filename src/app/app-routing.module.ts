

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceCategoryComponent } from './service-module/service-category/service-category.component';
import { ErrornotfoundComponent } from './skinlogics-module/errornotfound/errornotfound.component';






const routes: Routes = [

  //redirection
{ path: 'filler', redirectTo: 'dermal-filler', pathMatch: 'full' },
{ path: 'about-skinlogics', redirectTo: 'about-clinic', pathMatch: 'full' },
{ path: 'freckles', redirectTo: 'freckle', pathMatch: 'full' },
{ path: 'dark-circle', redirectTo: 'under-eye-dark-circle', pathMatch: 'full' },
{ path: 'alopecia-areata', redirectTo: 'alopecia-areata-treatment', pathMatch: 'full' },
{ path: 'facials-skinlogics', redirectTo: 'facials', pathMatch: 'full' },
{ path: 'anti-aging-therapies', redirectTo: 'anti-ageing-facial', pathMatch: 'full' },
{ path: 'power-glows', redirectTo: 'book-an-appointment', pathMatch: 'full' },
{ path: 'deep-fold', redirectTo: 'deep-folds', pathMatch: 'full' },
{ path: 'lip-pigmentation', redirectTo: 'lip-pigmentation-and-toning', pathMatch: 'full' },
{ path: 'tip-for-groom', redirectTo: 'groom-treatments', pathMatch: 'full' },
{ path: 'affect-of-thyroid-problems-on-your-skin', redirectTo: 'blog/affect-of-thyroid', pathMatch: 'full' },
{ path: 'mnrf-for-acne-scars', redirectTo: 'mnrf', pathMatch: 'full' },


 
  {
    path: '',
    loadChildren: () =>
    import('./skinlogics-module/skinlogics-module.module').then(
        (m) => m.SkinlogicsModuleModule
      ),
    },
  //blog module
  {
    path: '',
    loadChildren:()=>
    import('./blogs-module/blogs-module.module').then(
      (m)=>m.BlogsModuleModule
    ),
  },




//end of redirection
  //shared module
  {
    path: '',
    loadChildren:()=>
    import('./shared/shared.module').then(
      (m)=>m.SharedModule
    ),
  },
  //result module
  {
    path: '',
    loadChildren:()=>
    import('./result-module/result-module.module').then(
      (m)=>m.ResultModuleModule
    ),
  },

    //gallery module
    {
      path: '',
      loadChildren:()=>
      import('./gallery-module/gallery-module.module').then(
        (m)=>m.GalleryModuleModule
      ),
    },

    { path:'treatments', component:ServiceCategoryComponent},
  
  
  //landing page
  {
    path:'',
    loadChildren:()=>
    import('./landing-page/landing-page.module').then(
      (m)=>m.LandingPageModule
    )
  },
    //service Module




  {
    path: '',
    loadChildren:()=>
    import('./service-module/service-module.module').then(
      (m)=>m.ServiceModuleModule
    )
  },

//to send nonexisting routes
{ path: '**', redirectTo:'404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', initialNavigation: 'enabledBlocking' }),
  ],

  exports: [RouterModule],
 // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
 providers: [],
})
export class AppRoutingModule { }
