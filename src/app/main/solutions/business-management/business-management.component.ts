import { Component, OnInit } from '@angular/core';
import { TopPageService } from 'src/app/services/top-page.service';

@Component({
  selector: 'app-business-management',
  templateUrl: './business-management.component.html',
  styleUrls: ['./business-management.component.scss']
})
export class BusinessManagementComponent implements OnInit {

  constructor(private topPage: TopPageService) { }

  execute(){
    this.topPage.topPage()
  }

  ngOnInit(): void {
  }

}
