import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderSolutionsRoutingModule } from './header-solutions-routing.module';
import { SolutionsComponent } from './solutions.component';
import { SolutionsRoutingModule } from 'src/app/main/solutions/solutions-routing.module';


@NgModule({
  declarations: [
    SolutionsComponent
  ],
  imports: [
    CommonModule,
    HeaderSolutionsRoutingModule,
    SolutionsRoutingModule,
  ],
  exports: [
    SolutionsComponent
  ]
})
export class HeaderSolutionsModule { }
