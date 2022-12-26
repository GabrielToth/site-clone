import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-content',
  templateUrl: './entry-content.component.html',
  styleUrls: ['./entry-content.component.scss']
})
export class EntryContentComponent {

  topPage(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

}
