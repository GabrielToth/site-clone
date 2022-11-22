import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions-title',
  templateUrl: './solutions-title.component.html',
  styleUrls: ['./solutions-title.component.scss']
})
export class SolutionsTitleComponent implements OnInit {

  @Input() title?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
