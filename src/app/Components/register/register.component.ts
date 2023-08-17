import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {

  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
    //   username:['',Validators.required]
    // });
  }

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
  //get input data for cilsole log

 
  registerForm: FormGroup;
  submitted:boolean = false;
  
  constructor(private formBuilder: FormBuilder) {

    
    this.registerForm = formBuilder.group({
      // username:new FormControl(""[Validators.required])
     

    });


  }
  
  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
  }


  

 
  
  

 

  
  





} 
