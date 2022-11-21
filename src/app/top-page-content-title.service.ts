import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopPageContentTitleServiceTsService {

  getTitle(title:string):string{
    return title
  }

}
