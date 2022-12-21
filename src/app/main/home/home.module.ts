import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeAPartnershipComponent } from './be-a-partnership/be-a-partnership.component';
import { EntryContentComponent } from './entry-content/entry-content.component';
import { HomeComponent } from './home.component';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    EntryContentComponent,
    NavigationButtonsComponent,
    BeAPartnershipComponent
  ],
  imports: [
    CommonModule,
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
