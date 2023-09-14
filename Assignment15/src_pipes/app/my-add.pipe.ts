import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe  {

  transform(No1:number,No2:number){
    return No1+No2;
  }

}
