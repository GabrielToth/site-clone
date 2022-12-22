import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { SolutionsComponent } from './solutions/solutions.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SolutionsComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports: [
    HeaderComponent,
    SolutionsComponent
  ]
})

export class HeaderModule { }
