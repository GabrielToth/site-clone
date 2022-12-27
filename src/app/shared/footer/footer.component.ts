import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent  {
  toggle: boolean = false;

  @Output() onClickEvent = new EventEmitter()

  topPage(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  constructor( private router:Router ){
  }
}
