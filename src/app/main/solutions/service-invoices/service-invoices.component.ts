import { Component, OnInit } from '@angular/core';
import { TopPageContentTitleServiceTsService } from 'src/app/top-page-content-title.service';

@Component({
  selector: 'app-service-invoices',
  templateUrl: './service-invoices.component.html',
  styleUrls: ['./service-invoices.component.scss']
})
export class ServiceInvoicesComponent {
  title?: string

  constructor(private Title:TopPageContentTitleServiceTsService){
    this.title = Title.getTitle('Notas Fiscais de Serviços')
  }

}
