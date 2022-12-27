import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { SupportCarrouselComponent } from './support-carrousel/support-carrousel.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SupportComponent,
    SupportCarrouselComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SupportComponent
  ]
})
export class SupportModule { }
