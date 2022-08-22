import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, type: string, per: string): any {
    return value + ' ' + type === 'USD'? '$' : 'Bs' + ' ' + per === null? '': per;
  }

}
