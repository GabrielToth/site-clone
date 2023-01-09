import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {
  colorr: any; 
  
  ngOnInit(): void {
    this.colorr = document.getElementsByClassName('background-color').item(0)?.innerHTML;
  }

}
