import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { MainModule } from 'src/app/main/main.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SolutionsComponent
  ],
  imports: [
    CommonModule,
    MainModule,
    HeaderRoutingModule,
  ]
})

export class HeaderModule { }
