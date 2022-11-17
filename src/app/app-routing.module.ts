import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutEnterpriseComponent } from './main/about-enterprise/about-enterprise.component';
import { ClientsComponent } from './main/clients/clients.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about-enterprise",
    component: AboutEnterpriseComponent
  },
  {
    path: "clients",
    component: ClientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
