import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
{

  public GetInput()
  {
    var Msg=document.getElementById("textbox");
    return Msg;
  }

  @Output() public MyEvent = new EventEmitter();

 

  public sendEvent()
  {
    this.MyEvent.emit(this.GetInput());
  }
  
  constructor() { }

  ngOnInit() {
  }

}
