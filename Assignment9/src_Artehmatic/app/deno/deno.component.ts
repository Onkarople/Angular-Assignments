import { Component,OnInit } from '@angular/core';
import { ArthematicService } from '../arthematic.service';

@Component({
  selector: 'app-deno',
  templateUrl: './deno.component.html',
  styleUrls: ['./deno.component.css']
})
export class DenoComponent implements OnInit
 {

  public Ans1  :  number=0;
  public Ans2 : number=0;

  constructor(public aobj : ArthematicService)
  {

  }

  ngOnInit(): void 
  {
    this.Ans1=this.aobj.ADD(10,11);
    this.Ans2=this.aobj.Sub(21,11);    
  }



}
