import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  id!: number;
  name!: string;

  private _routeSubscription: Subscription;
  private _querySubscription: Subscription;

  constructor(private _activatedRoute: ActivatedRoute) {
    this._routeSubscription = this._activatedRoute.params.subscribe((param) => {
      console.log('param', param);
      this.id = param.id;
    });
    this._querySubscription = this._activatedRoute.queryParams.subscribe(
      (query) => {
        console.log('query', query);
        this.name = query.name;
      }
    );
  }
}
