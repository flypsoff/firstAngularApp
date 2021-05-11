import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
  // host: {
  //   '(click)': 'changeColor()',
  // },
})
// Better use only one type @HostListener(@HostBinder) or host: {...}

// We can use only one event (can be only one (click))
export class ColorDirective {
  @HostBinding('style.color') myColor: string;
  @HostBinding('style.fontSize') myFontSize: string;

  @HostListener('mouseover') largeFontSize(): void {
    this.myFontSize = '28px';
  }

  @HostListener('click') changeColor(): void {
    this.myColor = '#' + Math.floor(Math.random() * 6772313).toString(16);
  }

  @HostListener('mouseleave') smallFontSize(): void {
    this.myFontSize = '16px';
  }

  constructor() {
    this.myColor = '#000000';
    this.myFontSize = '16px';
  }
}
