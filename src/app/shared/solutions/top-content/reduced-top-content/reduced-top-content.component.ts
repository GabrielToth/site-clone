import { Component } from '@angular/core';
import { TopPageService } from 'src/app/services/top-page.service';

@Component({
  selector: 'app-reduced-top-content',
  templateUrl: './reduced-top-content.component.html',
  styleUrls: ['./reduced-top-content.component.scss']
})
export class ReducedTopContentComponent {

  constructor(private topPage:TopPageService) { }

  execute(){
    this.topPage.topPage()
  }

}
