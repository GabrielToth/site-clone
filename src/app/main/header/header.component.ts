import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  topPage(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  display: boolean = false;
  toggle: boolean = false;

  clickEvent() {
    this.toggle = !this.toggle;
  }

  close(){
    this.topPage()
    this.display = false;
    this.toggle = false;
  }

  clickEventSolutions() {
    this.display = !this.display;
  }


  clique(){
    alert('funcionou')
  }
}
