import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    // pipe for price increment as a discount
    
    value = value + 100;
    return value;
  }

}
