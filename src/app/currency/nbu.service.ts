import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable()
export class NbuService {
  private _makeRequset(d: string, t: string): Observable<any> {
    return this.http.get(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${t}&date=${d}&json`
    );
  }

  handleRequest(dates: string[], type: string): Observable<any> {
    return forkJoin(dates.map((date) => this._makeRequset(date, type)));
  }

  constructor(private http: HttpClient) {}
}
