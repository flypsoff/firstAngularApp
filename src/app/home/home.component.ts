import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name = 'vlad';
  surname = 'sevostianov';
  fullName = '';

  getFullName() {
    this.fullName = this.name + ' ' + this.surname;
  }

  resetFullName() {
    this.fullName = '';
  }

  constructor() {}

  ngOnInit(): void {
    console.log('HOME page was mount');
  }
}
