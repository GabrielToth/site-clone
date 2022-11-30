import { Component } from '@angular/core';
import { TopPageContentTitleService } from '../../top-page-content-title.service';

@Component({
  selector: 'app-standard-production',
  templateUrl: './standard-production.component.html',
  styleUrls: ['./standard-production.component.scss']
})
export class StandartProductionComponent{

  title?:string;

  constructor(private Title:TopPageContentTitleService){
    this.title = Title.getTitle("Produção Padrão")
  }

}
