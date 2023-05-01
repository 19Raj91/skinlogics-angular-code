import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/meta.service';
import { environment } from 'src/environments/environment';
import { TreatmentService } from '../treatment.service';

@Component({
  selector: 'app-service-by-category',
  templateUrl: './service-by-category.component.html',
  styleUrls: ['./service-by-category.component.scss']
})
export class ServiceByCategoryComponent implements OnInit {
  public name:any;
  public baseUrl = environment.baseUrl;
  public treatmentList:any;
  constructor(private metaService: MetaService,private route:ActivatedRoute,private _serviceInner:TreatmentService) { }

  ngOnInit(): void {
    this.metaService.createCanonicalURL();
    this.route.paramMap.subscribe(params=>{
    this.name=params.get('url');
    this._serviceInner.getTreatmentsByCategory(this.name).subscribe(data=>this.treatmentList=data);  
   
    })
   }

  

}
