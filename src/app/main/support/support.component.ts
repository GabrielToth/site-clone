import { Component, OnInit } from '@angular/core';
import { TopPageContentTitleService } from '../top-page-content-title.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {

  title?:string;

  constructor(private Title:TopPageContentTitleService){
    this.title = Title.getTitle("Suporte")
  }

}
