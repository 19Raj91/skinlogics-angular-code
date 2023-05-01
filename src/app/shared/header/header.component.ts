import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  public dropdownstatus:boolean=false;

  ngOnInit(): void {
    this.dropdownstatus=false;
  }
  toggledropdown(){
    this.dropdownstatus=true;
  }
  togglehover(){
    if( this.dropdownstatus){
      this.dropdownstatus=false;
      // console.log(this.dropdownstatus);
    }else{
      this.dropdownstatus=false;
      // console.log(this.dropdownstatus);
    }
  }

  display = false
  toggle() {
    this.display = !this.display;
  }

  navFixed: boolean = false;
  private scrollOffset: number = 200;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }

}


