import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe {

  transform(No1:number,No2:number) {
    return No1*No2;
  }

}
