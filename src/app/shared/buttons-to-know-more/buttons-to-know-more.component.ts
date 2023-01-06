import { Component } from '@angular/core';
import { TopPageService } from 'src/app/services/top-page.service';

@Component({
  selector: 'app-buttons-to-know-more',
  templateUrl: './buttons-to-know-more.component.html',
  styleUrls: ['./buttons-to-know-more.component.scss']
})
export class ButtonsToKnowMoreComponent {

  constructor(private topPage:TopPageService) { }

  execute(){
    this.topPage.topPage()
  }
}
