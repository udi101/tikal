import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe<T> implements PipeTransform {

  transform(value: Array<any>): Array<any> {
    if (!value && !value.length) {
      console.warn('The array provided is null or its length equal to 0');
      return [];
    }
    return value.sort((a, b) => +new Date(a.date) - +new Date(b.date));
  }
}
