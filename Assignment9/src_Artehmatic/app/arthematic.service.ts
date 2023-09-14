import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArthematicService {

  constructor() 
  {
     
  
  }

  public ADD(No1:number,No2:number)
  {
    var Ans=No1+No2;
    return Ans;
  }

  public Sub(No1:number,No2:number)
  {
    var Ans=No1-No2;
    return Ans;
  }

}
