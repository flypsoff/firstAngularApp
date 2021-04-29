import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log('ABOUT page was mount');
  }
  ngOnDestroy(): void {
    console.log('ABOUT page was destroyed');
  }
}
