import { Component, OnInit } from '@angular/core';
import { TopPageService } from 'src/app/services/top-page.service';

@Component({
  selector: 'app-tax-sped',
  templateUrl: './tax-sped.component.html',
  styleUrls: ['./tax-sped.component.scss']
})
export class TaxSpedComponent implements OnInit {

  constructor(private topPage: TopPageService) { }

  execute(){
    this.topPage.topPage()
  }

  ngOnInit(): void {
  }

}
