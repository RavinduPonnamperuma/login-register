import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  password: string | undefined;

  show = false;
  ngOnInit(){
    this.password = 'password';
  }
  onClick1(){
    if(this.password ==='password'){
      this.password = 'text';
      this.show = true;
    }else{
      this.password = 'password';
      this.show = false;
    }
  }

}
