import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { getYear } from 'date-fns';
import locale from 'date-fns/locale/en-US';
import { DatepickerOptions } from 'ng2-datepicker';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  

  ngOnInit(): void {
  }
    /* bootstrapmodal start */

    title = 'appBootstrap';   
    closeResult: string = '';
    constructor(private modalService: NgbModal) {}
     open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }    
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    date = new Date();

    // options sample with default values
    options: DatepickerOptions = {
      minYear: 1970, // minimum available and selectable year
      maxYear: getYear(new Date()) + 30, // maximum available and selectable year
      placeholder: 'Appointment Date*', // placeholder in case date model is null | undefined, example: 'Please pick a date'
      format: 'dd-LL-yyyy', // date format to display in input
      formatTitle: 'LLLL yyyy',
      formatDays: 'dd',
      firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
      locale: locale, // date-fns locale
      position: 'bottom',
      inputClass: '', // custom input CSS class to be applied
      calendarClass: 'datepicker-default', // custom datepicker calendar CSS class to be applied
      scrollBarColor: '#dfe3e9', // in case you customize you theme, here you define scroll bar color
      // keyboardEvents: true // enable keyboard events
      minDate:undefined,
    }
}
