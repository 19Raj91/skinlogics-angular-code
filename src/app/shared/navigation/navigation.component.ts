import { Component, ElementRef, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [NgbAccordionConfig],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class NavigationComponent implements OnInit {
  public isMenuCollapsed = true;
  public outsideclick:boolean=false;
  public status: boolean = true;
  public statuscopy:boolean=true;
  constructor(config: NgbAccordionConfig,private _eref: ElementRef) {
    config.closeOthers = true;
    config.type = 'info';

  }
  onClick(event: { target: any; }) {
    
    if (!this._eref.nativeElement.contains(event.target)){
        this.outsideclick=true;
        
       } // or some similar check
      
   }
 

  
  clickEvent() {
    this.status = !this.status;
    if(this.status){
      this.outsideclick=true;
     }else{
      this.outsideclick=false;
     }
     console.log(this.status);
  }

  menuClickEvent(){
   
      this.outsideclick=true;
    
  }
  ngOnInit(): void {

  }

  menuVisible = false;
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

}
