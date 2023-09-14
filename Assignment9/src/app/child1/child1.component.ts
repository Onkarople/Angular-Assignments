import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit
{
 
  public Ans :any=0;
  public Ret : any =0;

  constructor(public sobj : StringService , public nobj :NumberService )
  {

  }

   
  ngOnInit()
  {
     this.Ans=this.sobj.COuntCapital("HeLLo");  
     this.Ret = this.nobj.ChkPrime(11);
  }

}
