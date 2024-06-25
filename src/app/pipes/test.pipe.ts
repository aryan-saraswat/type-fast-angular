import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe',
  standalone: true,
})
export class TestPipe implements PipeTransform {
  transform(value: string): string {
    let upper = true;
    return value
      .split('')
      .map((ch) => {
        const transformedChar = upper
          ? ch.toLocaleUpperCase()
          : ch.toLocaleLowerCase();
        upper = !upper;
        return transformedChar;
      })
      .join('');
  }
}
