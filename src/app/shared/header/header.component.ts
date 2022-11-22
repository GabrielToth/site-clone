import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  display: boolean = false;

  solution = document.getElementById('solution');

  onMouseLeaveSolution() {
    setTimeout(this.verifyMouse(), 5000);
  }

  verifyMouse() {
      if (this.display === true) {
        return 'a'
      } else {
        return 'b'
      }
  };

  onMouseEnter() {
    this.display = true;
  }

  onMouseLeave() {
    this.display = false;
  }
}
