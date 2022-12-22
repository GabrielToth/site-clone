import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.scss']
})
export class NavigationButtonsComponent {

  topPage(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }
}
