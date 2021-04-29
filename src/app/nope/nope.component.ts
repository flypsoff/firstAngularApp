import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nope',
  templateUrl: './nope.component.html',
  styleUrls: ['./nope.component.scss'],
})
export class NopeComponent implements OnDestroy {
  isPepe: boolean = false;
  count: number = 0;
  time: number = 1000;
  timerID: any;
  disable: boolean = false;

  resetPepe() {
    clearInterval(this.timerID);
    this.isPepe = !this.isPepe;
    this.time = 1000;
    this.disable = false;
  }

  showPepe() {
    if (!this.disable) {
      this.disable = true;
    }
    this.timerID = setInterval(() => {
      this.isPepe = !this.isPepe;
    }, this.time);
  }

  addSpeedForPepe() {
    if (this.time > 0) {
      this.time = this.time - 100;
    }
    clearInterval(this.timerID);
    this.showPepe();
  }

  constructor() {}

  ngOnDestroy(): void {
    clearInterval(this.timerID);
  }
}
