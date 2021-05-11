import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  constructor(private _router: Router) {}

  toItems(): void {
    this._router.navigate(['/items', '99'], {
      queryParams: { name: 'John' },
    });
  }
}
