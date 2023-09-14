import { Component } from '@angular/core';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.css']
})
export class MethodsComponent {
  
  
 
  icnt:number=0; 

  CountCapital(stx:string)
  {
     for(let i=0;i<stx.length;i++)
     {
      if(stx[i]>='A'&&stx[i]<='Z')
      {
        this.icnt++;
      }
     }
     return this.icnt;
  }

  
   CntCapital:number=0;
   CntSmall:number=0;
   CntNum:number=0;
   Cntspc:number=0;
   format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;


  CheckPassword(pass:string)
  {
    for(let i=0;i<pass.length;i++)
    {
       if(pass[i]>='A'&&pass[i]<='Z')
       {
          this.CntCapital++;
       }

       else if(pass[i]>='a'&&pass[i]<='z')
       {
         this.CntSmall++;
       }
       else if(pass[i]>='0'&&pass[i]<='9')
       {
        this.CntNum++;
       }
       else if(this.format.test(pass))
       {
         this.Cntspc++;
       }
    }

    if(this.CntCapital>=2 && this.CntSmall>=3&&this.CntNum>=2&&this.Cntspc>=1)
    {
      return 1;
    }
    else
    {
      return -1;
    }
  }

  sum:number=0;
  ArrayAddition(arr:number[])
  {
     for(let i=0;i<arr.length;i++)
     {
        this.sum=this.sum+arr[i];
     }
     return this.sum;
  }

}
