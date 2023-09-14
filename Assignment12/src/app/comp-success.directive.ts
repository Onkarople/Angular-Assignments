import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(public eobj:ElementRef) 
  {
     eobj.nativeElement.style.color='yellow';
     eobj.nativeElement.style.fontstyle='bold';
  }

  

  
  
}
