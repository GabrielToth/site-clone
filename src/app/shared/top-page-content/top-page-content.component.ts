import { Component } from '@angular/core';
import { TopPageService } from 'src/app/services/top-page.service';

@Component({
  selector: 'app-top-page-content',
  templateUrl: './top-page-content.component.html',
  styleUrls: ['./top-page-content.component.scss']
})
export class TopPageContentComponent {
  constructor(private topPage:TopPageService) { }

  execute(){
    this.topPage.topPage()
  }
}
