import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
   public Hello="Marvellous Infosystems";
   public fun()
   {
      this.Hello="Educating for Better Tomorrow";
   }
}
