import { Component, OnInit } from '@angular/core';
import { TopPageContentTitleServiceTsService } from 'src/app/top-page-content-title.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent  {

  title?:string;

  constructor(private Title:TopPageContentTitleServiceTsService){
    this.title = Title.getTitle("Compras – Pedidos e Notas de Entrada")
  }


}
