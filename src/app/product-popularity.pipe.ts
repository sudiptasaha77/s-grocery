import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPopularity'
})
export class ProductPopularityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
