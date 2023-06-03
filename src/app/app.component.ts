import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  number = 0;

  increment() {
    this.number = this.number + 1;
  }

  reset() {
    this.number = 0;
  }
}
