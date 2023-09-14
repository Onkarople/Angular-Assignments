import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

   public str : any="";

  constructor() 
  {

  }

  public ChkPrime(No:number)
  {
    let i=0;
    for( i = 2; i < No/2; i++)
    {
        if(No%i==0)
        {
          break;
        }
    }

    if(i>No/2)
    {
      this.str="Its Prime";
      return  this.str;
    }
    else
    {
      this.str="Not prime";
    }
  }
}
