import { Component } from '@angular/core';
import { TopPageContentTitleServiceTsService } from 'src/app/top-page-content-title.service';

@Component({
  selector: 'app-balcony-sell',
  templateUrl: './balcony-sell.component.html',
  styleUrls: ['./balcony-sell.component.scss']
})
export class BalconySellComponent {
  title?:string;

  constructor(private Title:TopPageContentTitleServiceTsService){
    this.title = Title.getTitle("Venda balcão")
  }
}
