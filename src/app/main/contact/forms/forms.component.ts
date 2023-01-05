import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from './client/client';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  formClient!: FormGroup;
  constructor() {}

  ngOnInit() {
    this.createForm(new Client());
  }

  createForm(client: Client): void {
    this.formClient = new FormGroup({
      name: new FormControl(client.name),
      enterprise: new FormControl(client.enterprise),
      email: new FormControl(client.email),
      phone: new FormControl(client.phone, Validators.pattern('[- +()0-9]+')),
      message: new FormControl(client.message),
    });
  }

  onSubmit(): void {
    const { name } = this.formClient.value;
    const { enterprise } = this.formClient.value;
    const { email } = this.formClient.value;
    const { phone } = this.formClient.value;
    const { message } = this.formClient.value;

    const sub = `Suporte | ${name} - ${enterprise}`;
    const body = `
    Nome: ${name}\n
    Companhia: ${enterprise}\n
    Email: ${email}\n
    Telefone: ${phone}\n
    Mensagem: ${message}\n
	`;

    window.open(
      `mailto:softclever@softclever.com.br?subject=${sub}&body=${body}`
    );
  }
}
