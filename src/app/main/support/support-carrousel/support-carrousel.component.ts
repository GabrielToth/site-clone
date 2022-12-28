import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-support-carrousel',
  templateUrl: './support-carrousel.component.html',
  styleUrls: ['./support-carrousel.component.scss']
})
export class SupportCarrouselComponent {
  @Input() cards: Array<Array<string>> = [];


}
