import { Component, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ChartComponent } from './chart/chart.component';
import { NbuService } from './nbu.service';
import { NBUI } from './interfaces/nbu-iterface';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  providers: [NbuService],
})
export class CurrencyComponent {
  @ViewChild(ChartComponent, { static: false })
  private chartComponent!: ChartComponent;

  currencies = ['USD', 'EUR', 'RUB', 'PLN'];

  typeOfCurrency = 'USD';
  startDate: any;
  endDate: any;

  constructor(private nbuService: NbuService) {}

  getCurrency(): void {
    const rightDate: string[] = this.nbuService.getFormatNBU(
      this.startDate,
      this.endDate
    );
    this.nbuService
      .getNbuRate(rightDate, this.typeOfCurrency)
      .subscribe((res) => {
        const currencies = res.map((i: Array<NBUI>) => i[0]);
        if (this.chartComponent.chart) {
          this.chartComponent.chart.destroy();
        }
        this.chartComponent.showChart(currencies, this.typeOfCurrency);
      });
  }

  getStartDate(event: MatDatepickerInputEvent<Date>): void {
    if (!event.value) {
      return;
    }
    this.startDate = event.value;
  }

  getEndDate(event: MatDatepickerInputEvent<Date>): void {
    if (!event.value) {
      return;
    }
    this.endDate = event.value;
  }
}
