import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: string | undefined;

  show = false;
  ngOnInit(){
    this.password = 'password';
  }
  onClick(){
    if(this.password ==='password'){
      this.password = 'text';
      this.show = true;
    }else{
      this.password = 'password';
      this.show = false;
    }
  }


  loginForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl ('')
  })
  get email(){return this.loginForm.get('email')}

}
