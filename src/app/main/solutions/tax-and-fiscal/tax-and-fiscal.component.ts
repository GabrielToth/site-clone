import { Component, OnInit } from '@angular/core';
import { TopPageContentTitleServiceTsService } from 'src/app/top-page-content-title.service';

@Component({
  selector: 'app-tax-and-fiscal',
  templateUrl: './tax-and-fiscal.component.html',
  styleUrls: ['./tax-and-fiscal.component.scss']
})
export class TaxAndFiscalComponent {

  title?:string;

  constructor(private Title:TopPageContentTitleServiceTsService){
    this.title = Title.getTitle("NFC-e – Pré Venda – Delivery – Comandas")
  }

}
