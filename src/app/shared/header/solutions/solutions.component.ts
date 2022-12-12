import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import '../header.component'
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

  clickToClose(url:string) {
    header.toggle = false
    this.onClickEvent.emit(close)
    this.router.navigate([url])

  }

  constructor( private router:Router ){
  }
}
