import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { AboutEnterpriseComponent } from './about-enterprise/about-enterprise.component';
import { SupportComponent } from './support/support.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainRoutingModule } from './main-routing.module';
import { SolutionsModule } from './solutions/solutions.module';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from '../shared/shared.module';
import { SupportModule } from './support/support.module';



@NgModule({
  declarations: [
    AboutEnterpriseComponent,
    ClientsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HomeModule,
    ContactModule,
    SolutionsModule,
    SupportModule,
    SharedModule,
  ],
  exports: [  
    AboutEnterpriseComponent,
    ClientsComponent,
    PrivacyPolicyComponent
  ]
})
export class MainModule {}
