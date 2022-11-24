import { Component, OnInit } from '@angular/core';
import { TopPageContentTitleServiceTsService } from 'src/app/top-page-content-title.service';

@Component({
  selector: 'app-nfe',
  templateUrl: './nfe.component.html',
  styleUrls: ['./nfe.component.scss']
})
export class NfeComponent {
  title?: string

  constructor(
    private Title:TopPageContentTitleServiceTsService
  ){
    this.title = Title.getTitle('Nota Fiscal Eletrônica – Nfes')
  }
}
