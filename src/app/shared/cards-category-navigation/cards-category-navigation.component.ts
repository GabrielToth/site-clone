import { Component } from '@angular/core';
import { TopPageService } from 'src/app/services/top-page.service';

@Component({
  selector: 'app-cards-category-navigation',
  templateUrl: './cards-category-navigation.component.html',
  styleUrls: ['./cards-category-navigation.component.scss']
})
export class CardsCategoryNavigationComponent {

  constructor(private topPage:TopPageService) { }

  execute(){
    this.topPage.topPage()
  }
}
