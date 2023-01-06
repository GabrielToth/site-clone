import { Component } from '@angular/core';
import { TopPageService } from 'src/app/services/top-page.service';

@Component({
  selector: 'app-tax-sped',
  templateUrl: './tax-sped.component.html',
  styleUrls: ['./tax-sped.component.scss']
})
export class TaxSpedComponent {

  constructor(private topPage: TopPageService) { }

  execute(){
    this.topPage.topPage()
  }
}
