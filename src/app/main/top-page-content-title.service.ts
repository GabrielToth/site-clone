import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopPageContentTitleService {

  getTitle(title:string):string{
    return title
  }
}
