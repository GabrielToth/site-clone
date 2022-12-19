import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header.component';

const header = new HeaderComponent()

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent{
  toggle: boolean = false;

  @Output() onClickEvent = new EventEmitter()


  clickEvent() {
    this.toggle = !this.toggle;
  }

  clickToClose() {
    this.onClickEvent.emit()
  }

  constructor( private router:Router ){
  }
}
