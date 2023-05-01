import { BlogsRouterComponent } from './blogs-router/blogs-router.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Routes, RouterModule } from '@angular/router';
import { DatepickerModule } from 'ng2-datepicker';


const routes:Routes=[
{
  path:'blog',
  component:BlogsRouterComponent,
  children:[
      { path: '', component: BlogComponent },
        //blog redirection
      { path: 'home', redirectTo: '/blog', pathMatch: 'full' },
      { path: 'typography', redirectTo: '/blog', pathMatch: 'full' },
      { path: 'category/uncategorized', redirectTo: '/blog', pathMatch: 'full' },
      { path: 'category/acne-scar-removal', redirectTo: '/blog', pathMatch: 'full' },
      { path: '2020/10/26/acne', redirectTo: '/blog/acne-treatment', pathMatch: 'full' },
      { path: '2021/12/24/winter-skin-care', redirectTo: '/blog/winter-skin-care', pathMatch: 'full' },
      { path: '2020/11/18/male-pattern-hair-loss', redirectTo: '/blog/male-pattern-hair-loss', pathMatch: 'full' },
      { path: ':url', component: BlogDetailsComponent },
      
  ]
}

];



@NgModule({
  declarations: [
    BlogComponent,
    BlogDetailsComponent,
    BlogsRouterComponent


  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    DatepickerModule,
    RouterModule.forChild(routes)
   
    
  
  ],
  exports:[
    BlogComponent,
    BlogDetailsComponent,
    RouterModule
  
  
  ]
})
export class BlogsModuleModule { }
