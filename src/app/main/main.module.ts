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



@NgModule({
  declarations: [
    AboutEnterpriseComponent,
    ClientsComponent,
    SupportComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MainRoutingModule,
    HomeModule,
    ContactModule,
    SolutionsModule,
    SharedModule
  ],
  exports: [  
    AboutEnterpriseComponent,
    ClientsComponent,
    SupportComponent,
    PrivacyPolicyComponent
  ]
})
export class MainModule { }
