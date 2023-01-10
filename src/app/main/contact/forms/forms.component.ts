import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Client } from './client/client';
import { ContactService } from './services/contact.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  formClient!: FormGroup;

  constructor(private contact: ContactService,
    formBuilder:FormBuilder) {
      this.formClient = formBuilder.group({
        name:[null, Validators.required],
        enterprise:[null, Validators.required],
        email:[null, Validators.required],
        phone: [null, [Validators.required, Validators.pattern('[- +()0-9]+')]],
        message:[null, Validators.required],
      })
    }

  ngOnInit() {

  }

  onSubmit(): void {
    this.contact
      .submit(
        this.formClient.controls['email'].value,
        this.formClient.controls['name'].value,
        this.formClient.controls['enterprise'].value,
        this.formClient.controls['phone'].value,
        this.formClient.controls['message'].value,
      )
      .pipe(first())
      .subscribe({ error(err) {}, next(value) {
        alert("Email enviado!")
      }, });
  }
}
