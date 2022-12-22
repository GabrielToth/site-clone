import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeAPartnershipComponent } from './be-a-partnership/be-a-partnership.component';
import { EntryContentComponent } from './entry-content/entry-content.component';
import { HomeComponent } from './home.component';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SolutionsModule } from '../solutions/solutions.module';
import { SolutionsRoutingModule } from '../solutions/solutions-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    EntryContentComponent,
    NavigationButtonsComponent,
    BeAPartnershipComponent
  ],
  imports: [
    CommonModule,
    SolutionsRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    EntryContentComponent,
    NavigationButtonsComponent,
    BeAPartnershipComponent
  ]
})
export class HomeModule { }
