import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutEnterpriseComponent } from './about-enterprise/about-enterprise.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {
    path: "about",
    component: AboutEnterpriseComponent
  },
  {
    path: "clients",
    component: ClientsComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "support",
    component: SupportComponent
  },
  {
		path: "privacy-policy",
		component: PrivacyPolicyComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
