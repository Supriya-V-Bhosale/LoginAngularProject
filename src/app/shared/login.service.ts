import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Login} from'src/app/shared/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //declare variables
  isLogged:boolean
  constructor(private httpClient:HttpClient) { }
  //Validate user and password for Authorization and Authentication
  //Authorize return token with role and password
  public loginVerify(loginUser:Login){

    //calling RestApi by passing emailId and password
    console.log("Attempt authenticate and authorize");
    //return this.httpClient.post(environment.apiUrl+"/api/login", loginUser);
  }


}
