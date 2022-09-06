import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, money_type: string,timeType?: string ): unknown {
    return (value + ' ' + (money_type === 'USD'? '$' : 'Bs') + ' ' + (timeType? 'por '+ timeType : ''));
  }

}
