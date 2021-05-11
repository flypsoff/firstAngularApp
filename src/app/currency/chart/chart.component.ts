import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { NBUI } from '../interfaces/nbu-iterface';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  title = 'dashboard';
  chart: any;
  constructor() {}

  showChart(currencies: Array<NBUI>, type: string): void {
    Chart.register(...registerables);
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: currencies.map((item: NBUI) => item.exchangedate),
        datasets: [
          {
            label: type || 'USD',
            data: currencies.map((item: NBUI) => item.rate),
            backgroundColor: 'blue',
            borderColor: 'blue',
            fill: false,
          },
        ],
      },
    });
  }
}
