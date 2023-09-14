import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe  {

  transform(value: number, param:string): any
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
            return 1;
         }
         else
         {
           return -1;
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
            return 1;
          }
          else
          {
           return -1;
          }
        
      }


      else if (param=="Even")
      {
         if(value%2==0)
         {
           return 1;
         }
         else
         {
           return -1;
         }
      }


      else if (param=="Odd")
      {
         if(value%2!=0)
         {
           return 1;
         }
         else
         {
           return -1;
         }
      }

      return "Not specified";
 }


}
