import { Component } from '@angular/core';

@Component({
  selector: 'app-about-test',
  templateUrl: './about-test.component.html',
  styleUrls: ['./about-test.component.scss'],
})
export class AboutTestComponent {
  constructor() {}

  count = 0;
  text = '';
  typeOfEvent: any;

  getValue(event: Event): void {
    this.typeOfEvent = event;
    console.log(event);
  }

  decrement = () => this.count--;
  increment = () => this.count++;
}
