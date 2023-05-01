import { SeoService } from './api/api.service';
import { TestimonialModuleModule } from './testimonial-module/testimonial-module.module';
import { BlogsModuleModule } from './blogs-module/blogs-module.module';
import { LazyLoadImageModule} from 'ng-lazyload-image';

import { SharedModule } from './shared/shared.module';
import { SkinlogicsModuleModule } from './skinlogics-module/skinlogics-module.module';
import { ServiceModuleModule } from './service-module/service-module.module';
import { ServicesService } from './services/services.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatepickerModule } from 'ng2-datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { ResultModuleModule } from './result-module/result-module.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    SkinlogicsModuleModule,
    DatepickerModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    SharedModule,
    BlogsModuleModule,
    TestimonialModuleModule,
    ReactiveFormsModule,
    ResultModuleModule,
    BlogsModuleModule,
    AppRoutingModule,
    ServiceModuleModule,
    LazyLoadImageModule,
  
  
  ],
  exports: [FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ServicesService, SeoService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
