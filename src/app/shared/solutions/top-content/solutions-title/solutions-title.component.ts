import { Component } from '@angular/core';
import { TopPageService } from 'src/app/services/top-page.service';

@Component({
  selector: 'app-solutions-title',
  templateUrl: './solutions-title.component.html',
  styleUrls: ['./solutions-title.component.scss']
})
export class SolutionsTitleComponent {
  constructor(private topPage:TopPageService) { }

  execute(){
    this.topPage.topPage()
  }
}
