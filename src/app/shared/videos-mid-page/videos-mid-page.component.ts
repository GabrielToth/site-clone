import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos-mid-page',
  templateUrl: './videos-mid-page.component.html',
  styleUrls: ['./videos-mid-page.component.scss']
})
export class VideosMidPageComponent implements OnInit {
  videos = [
    { thumb: 'xxx.webp', title: 'xxx', subtitle: 'ggg', video: 'www.xxx.gg'},
    { thumb: 'MDS.webp', title: 'MDS', subtitle: 'MDS', video: 'www.MDS.gg'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
