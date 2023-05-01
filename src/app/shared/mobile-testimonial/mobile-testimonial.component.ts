import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WrittenTestimonial } from 'src/app/interface/writtentestimonial';
import { WrittentestimonialService } from 'src/app/writtentestimonial.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mobile-testimonial',
  templateUrl: './mobile-testimonial.component.html',
  styleUrls: ['./mobile-testimonial.component.scss']
})
export class MobileTestimonialComponent implements OnInit {

  public baseUrl = environment.baseUrl;
  public testimonials:WrittenTestimonial[]=[];
  p: number = 1; 
 
 


  constructor(private _writtenTestimonials:WrittentestimonialService, private router:Router) { }
  
  
    ngOnInit(): void {
      //this. _writtenTestimonials.getTestimonials().subscribe(data=>this.testimonials=data);
      //calling new api created for Home testiomonial 'test_show_type'='outside'
      this. _writtenTestimonials.getTestimonialsHome().subscribe(data=>this.testimonials=data);

    }

}
