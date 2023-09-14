import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param:string): string
   {

       if(param=="Prime")
       {
        let i=0;
          
          for(i=2;i<=value/2;i++)
          {
            if(value%i==0)
            {
               break;
            }
            
          }

          if(i>value/2)
          {
             return "Its Prime Number";
          }
          else
          {
            return "Its Not Prime Number";
          }
       }

       else if(param=="Perfect")
       {
          
           let i=0;
           let sum =0;

           for(i=1;i<=value/2;i++)
           {
              if(value%i==0)
              {
                sum=sum+i;
              }
           }

           if(sum==value)
           {
             return "Its Perfect Number";
           }
           else
           {
            return "Its Not Perfect Number";
           }
         
       }


       else if (param=="Even")
       {
          if(value%2==0)
          {
            return "Its Even";
          }
          else
          {
            return "Its Not Even";
          }
       }


       else if (param=="Odd")
       {
          if(value%2!=0)
          {
            return "Its Odd";
          }
          else
          {
            return "Its Not Odd";
          }
       }

       return "Not specified";
  }

}
