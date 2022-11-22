import { Component } from '@angular/core';
import { TopPageContentTitleServiceTsService } from 'src/app/top-page-content-title.service';
import { TopPageContentComponent } from 'src/app/shared/top-page-content/top-page-content.component'

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  title?:string;

  constructor(private Title:TopPageContentTitleServiceTsService){
    this.title = Title.getTitle("Apresentação das Soluções")
  }
}
