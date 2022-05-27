import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    `
    h3{
      color: dodgerblue;
    }
  `,
  ],
})
export class AppComponent {
  name = 'Angular 11111' + VERSION.major;
}
