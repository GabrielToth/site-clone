import { Component, OnInit } from '@angular/core';
import { TopPageContentTitleServiceTsService } from 'src/app/top-page-content-title.service';

@Component({
  selector: 'app-nfc-e',
  templateUrl: './nfc-e.component.html',
  styleUrls: ['./nfc-e.component.scss']
})
export class NfcEComponent{

  title?:string;

  constructor(private Title:TopPageContentTitleServiceTsService){
    this.title = Title.getTitle("NFC-e – Pré Venda – Delivery – Comandas")
  }

}
