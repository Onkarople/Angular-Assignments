import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringLength: number = 0;

  onKeyUp(value: string) {
    this.stringLength = value.length;

  }
  
}
