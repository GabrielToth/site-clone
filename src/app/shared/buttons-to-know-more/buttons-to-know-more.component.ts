import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-to-know-more',
  templateUrl: './buttons-to-know-more.component.html',
  styleUrls: ['./buttons-to-know-more.component.scss']
})
export class ButtonsToKnowMoreComponent {

  topPage(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }
}
