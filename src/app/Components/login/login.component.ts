import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../class/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login();

  password: string | undefined;
  show = false;
  ngOnInit() {
    
  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  loginForm = new FormGroup({
    email:new FormControl ("",[Validators.email]),
    password:new FormControl("",[Validators.email]),

   
  })
  get Email(): FormControl{
    return this.loginForm.get("email") as FormControl;
  }
  get Password(): FormControl{
    return this.loginForm.get("password") as FormControl;
  }
  
  submitted: boolean = false;
  
  onSubmit() {
    console.log(this.loginForm);
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  }

}
