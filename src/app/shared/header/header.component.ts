import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  display: boolean = false;
  toggle: boolean = false;

  clickEvent() {
    this.toggle = !this.toggle;
  }

  close(){
    this.display = false;
    this.toggle = false;
  }

  clickEventSolutions() {
    this.display = !this.display;
  }
}
