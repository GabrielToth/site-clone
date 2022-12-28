import { Component } from '@angular/core';
import { TopPageService } from 'src/app/services/top-page.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {

  constructor(private topPage:TopPageService) { }

  execute(){
    this.topPage.topPage()
  }
}
