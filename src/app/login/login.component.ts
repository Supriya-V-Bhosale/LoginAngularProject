import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import{Jwtresponse} from 'src/app/shared/jwtresponse';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //declare variables
  loginForm:FormGroup;
  error='';
  isSubmitted:boolean=false;
  jwtresponse: any=new Jwtresponse();
  constructor(private formBiulder:FormBuilder ,private loginService:LoginService,
     private router:Router) { }

  ngOnInit(): void { //life cycle hook
    //generate Reactive Form
    //FormGroup--FormControlNmae--FormBuilder
    this.loginForm=this.formBiulder.group(
      {
      //emailId
      emailId:['',[Validators.email, Validators.required], Validators.minLength(2)],
      //password
      password:['',[Validators.required]]
    }
      );
    }
  
  //Get all controll from loginForm
  get formControls(){
    return this.loginForm.controls;
  }
  //create submit Form
  loginCredential():void{
    this.isSubmitted=true;
    console.log(this.loginForm.value);

    //Invalid form
    if(this.loginForm.invalid)
    return;
    //check emailId and Password  --call service
    if(this.loginForm.valid){
      console.log("Valid");
      /*
      this.loginService.loginVerify(this.loginForm.value).subscribe(
        (result)=>{
          this.error="";
          console.log(result);
          this.jwtresponse=result;
          //check invalid password
          
          //based on role ,route the component
          //role 1 --admin
          if(this.jwtresponse.data.role==1){
            this.loginService.isLogged=true;
            this.router.navigateByUrl('/admin');

          }
          else if(this.jwtresponse.data.role==2){
            this.loginService.isLogged=true;
            this.router.navigateByUrl('/manager');

          }else{
            this.error="Sorry! not allowed to acecss... Invalid author"
          }
          //role 2 --manager
        },
        (error)=>{
          console.log("Error");
          this.error="Envalid UserId Or EmailId Or password";
        }
      );*/
    }
    


  }

}
