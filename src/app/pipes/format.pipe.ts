import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
})
export class FormatPipe implements PipeTransform {
  transform(value: string): string {
    const arr = value
      .split(' ')
      .map((item) => item[0].toUpperCase() + item[1].toLowerCase());

    return arr.join('@');
  }
}
