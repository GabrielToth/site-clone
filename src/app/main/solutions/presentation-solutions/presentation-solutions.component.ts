import { Component, OnInit } from '@angular/core';
import { TopPageContentTitleService } from '../../top-page-content-title.service';

@Component({
  selector: 'app-presentation-solutions',
  templateUrl: './presentation-solutions.component.html',
  styleUrls: ['./presentation-solutions.component.scss']
})
export class PresentationSolutionsComponent {

  title?:string

  constructor(private Title:TopPageContentTitleService){
    this.title = Title.getTitle("Apresentação das Soluções")
  }
}
