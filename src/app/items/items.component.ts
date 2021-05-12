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
  pi = 3.14;
  date = Date.now();
  text = 'Welcome to the home, boii!';

  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
    this.routeSubscription = this.activatedRoute.params.subscribe((param) => {
      console.log('param', param);
      this.id = param.id;
    });
    this.querySubscription = this.activatedRoute.queryParams.subscribe(
      (query) => {
        console.log('query', query);
        this.name = query.name;
      }
    );
  }
}
