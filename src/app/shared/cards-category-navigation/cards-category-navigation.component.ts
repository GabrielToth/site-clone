import { Component, OnInit } from '@angular/core';
import { TopPageService } from 'src/app/services/top-page.service';

@Component({
  selector: 'app-cards-category-navigation',
  templateUrl: './cards-category-navigation.component.html',
  styleUrls: ['./cards-category-navigation.component.scss']
})
export class CardsCategoryNavigationComponent implements OnInit {

  constructor(private topPage:TopPageService) { }

  execute(){
    this.topPage.topPage()
  }
  ngOnInit(): void {
  }

}
