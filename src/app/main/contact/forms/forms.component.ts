import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from './client/client';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  formClient!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm(new Client());
  }

  createForm(client: Client): void {
    this.formClient = new FormGroup({
      name: new FormControl(client.name),
      enterprise: new FormControl(client.enterprise),
      email: new FormControl(client.email),
      phone: new FormControl(client.phone, Validators.pattern('[- +()0-9]+')),
      message: new FormControl(client.message)
    });
  }
}
