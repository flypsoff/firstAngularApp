import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  name = '';
  surname = '';
  alias = '';
  aliasError = '';

  surnameHendler(value: string): void {
    this.surname = value;
  }

  handleAlias() {
    if (!this.name || !this.surname) {
      this.alias = '';
      this.aliasError = 'Please enter name and surname';
      return;
    }
    const changedName = this.name.slice(0, this.name.length / 2);
    const changedSurname = this.surname.slice(this.surname.length / 2);
    this.alias = changedName + changedSurname;
    this.aliasError = '';
    this.name = '';
    this.surname = '';
  }

  ngOnInit(): void {
    console.log('HOME page was inited');
  }
  ngOnDestroy(): void {
    console.log('HOME page was destroyed');
  }
}
