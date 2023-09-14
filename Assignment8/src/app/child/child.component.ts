import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
{


  @Input() public FromParnet="";
  
  @Output() public MyEvent = new EventEmitter();

 

  public sendEvent()
  {
    this.MyEvent.emit("Hello from child");
  }
  
  constructor() { }

  ngOnInit() {
  }

}
