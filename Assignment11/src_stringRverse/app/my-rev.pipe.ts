import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown 
  {
     
     
    let str=value;

    let temp=str.split("").reverse().join("");

   
    return temp;
  }

}
