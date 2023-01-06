import { Component } from '@angular/core';
import { TopPageService } from 'src/app/services/top-page.service';

@Component({
  selector: 'app-erp-software',
  templateUrl: './erp-software.component.html',
  styleUrls: ['./erp-software.component.scss']
})
export class ErpSoftwareComponent {

  constructor(private topPage: TopPageService) { }

  execute(){
    this.topPage.topPage()
  }
}
