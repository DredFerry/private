import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { faUser,faLock, faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUser=faUser
  faLock=faLock;
  faEye=faEye;
  faEyeSlash=faEyeSlash;
  registrationForm!:UntypedFormGroup;

  get email(){
    return this.registrationForm.get('email');
  }
  get password(){
    return this.registrationForm.get('password');
  }

  constructor(private fb:UntypedFormBuilder){}
  
  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      email:['',[Validators.required,Validators.pattern('[^@]+@[^@]+\.[a-zA-Z]{2,}')]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })

    
  }
  clicked1(){
   document.getElementById("label1")!.style.visibility="visible"; 
  }
  clicked2(){
    document.getElementById("label2")!.style.visibility="visible"; 
  }
show:boolean=false;
  passVisible(){
      document.getElementById("activeEye")!.style.visibility="hidden";
      document.getElementById("deactiveEye")!.style.visibility="visible";
      this.show=!this.show;
      // document.getElementById("password")!.innerHTML=this.password?.value;
    }
    passNotVisible(){
      document.getElementById("deactiveEye")!.style.visibility="hidden";
      document.getElementById("activeEye")!.style.visibility="visible";
      this.show=!this.show;
      // document.getElementById("password")!.type="password";

  }

  OnSubmit(): void{
    alert("Success");
  }

}
