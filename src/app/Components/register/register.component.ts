import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Register } from '../class/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register = new Register();

  ngOnInit() {}

  password: string | undefined;
  show = false;

  onClick1() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  submitted: boolean = false;

//validation part
  constructor(private formBuilder: FormBuilder) { }

  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("",[Validators.required]),
    email:new FormControl ("",[Validators.email]),
    C_password:new FormControl ("",[Validators.required]),
    password:new FormControl ("",[Validators.required]),
    nic:new FormControl ("", [Validators.required, Validators.pattern(/^([0-9]{9}[v|V]|[0-9]{12})$/)]),
    address:new FormControl ("",[Validators.required]),
    tpNumber:new FormControl ("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),

  });

//getters
  get Firstname(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }
  get Lastname(): FormControl{
    return this.registerForm.get("lastname") as FormControl;
  }
  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get NIC(): FormControl{
    return this.registerForm.get("nic") as FormControl;
  }
  get Address(): FormControl{
    return this.registerForm.get("address") as FormControl;
  }
  get TpNumber(): FormControl{
    return this.registerForm.get("tpNumber") as FormControl;
  }


  onSubmit() {
    console.log(this.registerForm);
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
  }

  // saveDepartment() {
  //   console.log(this.registerForm);
  // }
 passwordError = false;
  matchPassword(){
    let password=this.registerForm.value.password
    let c_password=this.registerForm.value.C_password
    // let error = false;
    if(c_password===password){
      this.passwordError = false;

    }else{
      this.passwordError = true;
    }
    console.log()
  }

} 
