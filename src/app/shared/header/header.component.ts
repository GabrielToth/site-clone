import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularResizeEventModule } from 'angular-resize-event';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  display: boolean = false;
  toggle: boolean = false;
  displayWidth: number = 0

  clickEvent() {
    this.toggle = !this.toggle;
  }

  // close(){
  //   this.display = false
  //   console.log(this.display)
  // }

  clickEventSolutions() {
    this.display = !this.display;
  }

  // changeImg = () => {
  //   let img = document.querySelector("img#mais28anos")
  //   this.displayWidth = window.innerWidth

  //   // if(this.displayWidth < 500){
  //   //   img?.setAttribute('src', 'assets/images/jpg/logo-mais-de-28-anos120px.jpg')
  //   // }
  // }


}
