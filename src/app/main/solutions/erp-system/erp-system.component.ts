import { Component, OnInit } from '@angular/core';
import { TopPageService } from 'src/app/services/top-page.service';

@Component({
  selector: 'app-erp-system',
  templateUrl: './erp-system.component.html',
  styleUrls: ['./erp-system.component.scss']
})
export class ErpSystemComponent implements OnInit {

  constructor(private topPage: TopPageService) { }

  execute(){
    this.topPage.topPage()
  }

  ngOnInit(): void {
  }

}
