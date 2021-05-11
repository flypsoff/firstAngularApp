import { Component, ViewChild } from '@angular/core';
import { AboutTestComponent } from '../about-test/about-test.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor() {}

  // with this decorator we have access to data and method of AboutTestComponent(child) component
  @ViewChild(AboutTestComponent, { static: false })
  private aboutTestC!: AboutTestComponent;

  inc = () => this.aboutTestC.increment();
  dec = () => this.aboutTestC.decrement();
}
