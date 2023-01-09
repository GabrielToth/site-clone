import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  submit(to:string, title:string, body:string){
    return this.http.post(
      "https://www.api.emissorsatfiscal.net.br/send",
      {
        to,
        title,
        body
      }
    )
  }
}
