import { Component, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ChartComponent } from './chart/chart.component';
import { NbuService } from './nbu.service';

export interface NBUI {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
}

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  providers: [NbuService],
})
export class CurrencyComponent {
  @ViewChild(ChartComponent, { static: false })
  private _chartComponent!: ChartComponent;

  currencies = ['USD', 'EUR', 'RUB', 'PLN'];

  typeOfCurrency = 'USD';
  startDate: any;
  endDate: any;

  constructor(private _nbuService: NbuService) {}

  handleCurrency(): void {
    const rightDate: string[] = this._getFormatNBU(
      this.startDate,
      this.endDate
    );
    this._nbuService
      .handleRequest(rightDate, this.typeOfCurrency)
      .subscribe((res) => {
        const currencies = res.map((i: Array<NBUI>) => i[0]);
        if (this._chartComponent.chart) {
          this._chartComponent.chart.destroy();
        }
        this._chartComponent.showChart(currencies, this.typeOfCurrency);
      });
  }

  private _formatNBU(d: string): string {
    return d.split('.').reverse().join('');
  }

  private _getFormatNBU(
    d1: Date = new Date(),
    d2: Date = new Date()
  ): string[] {
    const start = new Date(d1);
    const end = new Date(d2);
    const day = 86400000;

    const arr: string[] = [];

    for (let i = start.getTime(); i <= end.getTime(); i += day) {
      arr.push(this._formatNBU(new Date(i).toLocaleDateString()));
    }
    return arr;
  }

  handleStartDate(event: MatDatepickerInputEvent<Date>): void {
    if (!event.value) {
      return;
    }
    this.startDate = event.value;
  }

  handleEndDate(event: MatDatepickerInputEvent<Date>): void {
    if (!event.value) {
      return;
    }
    this.endDate = event.value;
  }
}
