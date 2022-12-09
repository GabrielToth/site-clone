import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import '../header.component'

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

  clickToClose(url:string) {
    this.onClickEvent.emit()
    this.router.navigate([url])
  }

  constructor( private router:Router ){
  }
}
