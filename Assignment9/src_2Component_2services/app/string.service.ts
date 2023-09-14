import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StringService 
{

  public Counter : any=0; 


  constructor()
  {

  }

  public COuntCapital(str:string)
  {
     for(let i=0;i<str.length;i++)
     {
        if(str.charAt(i)>='A' && str.charAt(i)<='Z')
        {
           this.Counter++;
        }
     }
     
     return this.Counter;
  }

  
}
