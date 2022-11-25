import { Component, OnInit } from '@angular/core';
import { TopPageContentTitleServiceTsService } from 'src/app/top-page-content-title.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent {

  title?:string;

  constructor(private Title:TopPageContentTitleServiceTsService){
    this.title = Title.getTitle("Orçamento")
  }

}
