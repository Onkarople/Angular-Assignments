import { Component, } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  


  constructor(public fbobj :FormBuilder )
  {
  }

  MarvellousForm = this.fbobj.group(
    {
      // Add Multiple validations
      username :['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')] ],
      email: ['',Validators.required],
      phone : ['',Validators.required,Validators.pattern('^[0-9]*$'),Validators.maxLength(10)],
      add :[''],
      city:['',Validators.required,Validators.minLength(5)],
      zip :['',Validators.required,Validators.maxLength(5)],
      cmt :['',Validators.required,Validators.maxLength(30)],
      MarvellousClass : this.fbobj.group(
        {
          state :['Maharashtra','gujrat','Uttar Pradesh'],
         
        }
      )

     
    }
  );
  
}
