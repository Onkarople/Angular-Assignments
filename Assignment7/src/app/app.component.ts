import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
   public str="";
   public str1="";
   public fun()
   {
     this.str="Marvellous Infosyetms";
   } 

   public gun()
   {
     this.str1="Marvellous Infosyetms";
   } 
}
