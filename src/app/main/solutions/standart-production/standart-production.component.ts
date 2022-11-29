import { Component, OnInit } from '@angular/core';
import { TopPageContentTitleService } from '../../top-page-content-title.service';

@Component({
  selector: 'app-standart-production',
  templateUrl: './standart-production.component.html',
  styleUrls: ['./standart-production.component.scss']
})
export class StandartProductionComponent{

  title?:string;

  constructor(private Title:TopPageContentTitleService){
    this.title = Title.getTitle("Produção Padrão")
  }

}
