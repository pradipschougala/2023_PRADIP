import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  // ngOnInit(): void {
    // this.loginUser();
    // throw new Error('Method not implemented.');    
  // }
  title = 'Dec_2022';

  loginForm = new FormGroup({
      user : new FormControl('',Validators.required),
      name : new FormControl('', Validators.required) 
  });

  loginUser()
  {
    if(this.loginForm.valid){
    console.table(this.loginForm.value);
    this.loginForm.reset();
    }
  }
}
