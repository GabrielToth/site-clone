import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { HeaderSolutionsModule } from './solutions/header-solutions.module';
import { MainRoutingModule } from 'src/app/main/main-routing.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderSolutionsModule,
    MainRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})

export class HeaderModule { }
