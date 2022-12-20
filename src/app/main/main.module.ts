import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { AboutEnterpriseComponent } from './about-enterprise/about-enterprise.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { EntryContentComponent } from './home/entry-content/entry-content.component';
import { NavigationButtonsComponent } from './home/navigation-buttons/navigation-buttons.component';
import { BeAPartnershipComponent } from './home/be-a-partnership/be-a-partnership.component';
import { FormsComponent } from './contact/forms/forms.component';
import { SolutionsModule } from './solutions/solutions.module';



@NgModule({
  declarations: [
    HomeComponent,
    AboutEnterpriseComponent,
    ClientsComponent,
    ContactComponent,
    SupportComponent,
    PrivacyPolicyComponent,


        
    EntryContentComponent,
    NavigationButtonsComponent,
    BeAPartnershipComponent,
    FormsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SolutionsModule
  ]
})
export class MainModule { }
