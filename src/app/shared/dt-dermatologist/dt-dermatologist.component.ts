import { Component, OnInit } from '@angular/core';
import { TreatmentService } from 'src/app/service-module/treatment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dt-dermatologist',
  templateUrl: './dt-dermatologist.component.html',
  styleUrls: ['./dt-dermatologist.component.scss']
})
export class DtDermatologistComponent implements OnInit {

  constructor(private _doctor:TreatmentService) { }
  public baseUrl = environment.baseUrl;
  public doctors:any=[];
  public doctorCount=0;

  ngOnInit(): void {
    this._doctor.getDoctors().subscribe((data: any)=>this.doctors=data);
    this.doctorCount=this.doctors.length;
    // console.log(this.doctorCount);

  }

}
//this._serviceInner.getServiceDetail(this.name).subscribe(data=>this.serviceDetails=data);  