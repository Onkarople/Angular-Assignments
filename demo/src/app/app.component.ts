import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Inject FormBuilder service
  constructor(public fbobj : FormBuilder)
  {
  }

  public state =['Maharshtra','gujrat','Uttar pradesh']

  MarvellousForm = this.fbobj.group(
    {
      
      // Add Multiple validations
      username :['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')] ],
      email: ['',Validators.required],
      phone : ['',Validators.required,Validators.pattern('^[0-9]*$'),Validators.maxLength(10)],
      add :['',Validators.required],
      city:['',Validators.required,Validators.minLength(3)],
      zip :['',Validators.required,Validators.maxLength(5)],
      cmt :['',Validators.required,Validators.maxLength(30)],
    
    }
  );
  
}


