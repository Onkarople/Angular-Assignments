import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  public Ans : any = "";

  constructor(public nobj : NumberService)
  {
    
  }


  ngOnInit()
  {
    this.Ans = this.nobj.ChkPrime(11);
  }

}
