import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  name = 'John';
  surname = 'Deere';
  alias = '';
  aliasError = '';

  onChangeName(): void {
    console.log(this.name);
  }

  surnameHendler(value: string): void {
    this.surname = value;
  }

  handleAlias(ourModel: any, ourForm: any): void {
    console.log(ourForm);

    console.log(ourModel);

    if (!this.name || !this.surname) {
      this.alias = '';
      this.aliasError = 'Please enter name and surname';
      return;
    }
    const changedName = this.name.slice(0, this.name.length / 2);
    const changedSurname = this.surname.slice(this.surname.length / 2);
    this.alias = changedName + changedSurname;
    this.aliasError = '';
    // this.name = '';
    // this.surname = '';
  }

  constructor() {}
}
