import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-videos-presentation',
  templateUrl: './videos-presentation.component.html',
  styleUrls: ['./videos-presentation.component.scss']
})
export class VideosPresentationComponent implements OnInit {
  showThumb: boolean = true;
  aaa: boolean = false;

  clickOnThumb(): void {
    this.showThumb = !this.showThumb;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
