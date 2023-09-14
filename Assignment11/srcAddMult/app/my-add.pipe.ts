import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number 
  {
    let No1 = value;
    let No2 : number = args[0];

    let Ans=No1+No2;


    return Ans;
  }

}
