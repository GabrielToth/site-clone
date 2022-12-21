import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [
    ContactComponent,
    FormsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactComponent,
    FormsComponent,
  ]
})
export class ContactModule { }
