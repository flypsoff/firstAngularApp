import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  logo = 'Mappy';
  adCount = 0;
  adText = `Only today you can get ${this.adCount} free spin`;

  changeCount(tetxFromChild: string): void {
    this.adCount = this.adCount + 1;
    this.adText = `Only today you can get ${this.adCount} free spin`;
  }
}
