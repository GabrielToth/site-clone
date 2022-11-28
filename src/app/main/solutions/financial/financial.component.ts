import { Component, OnInit } from '@angular/core';
import { TopPageContentTitleService } from '../../top-page-content-title.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FinancialComponent {

  title?:string;

  constructor(private Title:TopPageContentTitleService){
    this.title = Title.getTitle("Financeiro")
  }

}
