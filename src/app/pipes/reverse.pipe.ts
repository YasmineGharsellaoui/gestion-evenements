import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
 
   transform(ch: any): any {
    let reversedCH = '';
    for (let i = 0; i < ch.length; i++) {
      reversedCH = ch[i] + reversedCH;
    }
    return reversedCH;
  }

}
