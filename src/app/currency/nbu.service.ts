import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable()
export class NbuService {
  private makeRequset(date: string, currencyType: string): Observable<any> {
    return this.http.get(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currencyType}&date=${date}&json`
    );
  }

  getNbuRate(dates: string[], type: string): Observable<any> {
    return forkJoin(dates.map((date) => this.makeRequset(date, type)));
  }

  getFormatNBU(d1: Date = new Date(), d2: Date = new Date()): string[] {
    const start = new Date(d1);
    const end = new Date(d2);
    const DAY = 86400000;

    const arr: string[] = [];

    for (let i = start.getTime(); i <= end.getTime(); i += DAY) {
      arr.push(this.makeNbuFormat(new Date(i).toLocaleDateString()));
    }
    return arr;
  }

  private makeNbuFormat(d: string): string {
    return d.split('.').reverse().join('');
  }

  constructor(private http: HttpClient) {}
}
