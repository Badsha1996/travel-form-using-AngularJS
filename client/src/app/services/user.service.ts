import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseServerUrl = "http://localhost:8800/api/travelForm/post"
  firstName : string =""
  middleName : string =""
  lastName : string =""
  country : string =""
  email : string=""
  adhar:any
  passport:any

  constructor(private http : HttpClient) { 
  }
   
 // SENDING VALUES
  sendValue(fname: string, mname: string, lname: string, country: string, email: string,aFile:any,pFile:any) {
    this.firstName = fname
    this.middleName = mname
    this.lastName  = lname
    this.country = country
    this.email = email
    this.adhar = aFile
    this.passport = pFile
  }

  getValue(){
    return [this.firstName, this.middleName, this.lastName, this.country, this.email,this.adhar,this.passport]
  }


  
  saveUser(user:FormData){
    return  this.http.post(this.baseServerUrl, 
      {
        firstName: user.get("firstName"),
        middleName : user.get("middleName"),
        lastName : user.get("lastName"),
        country: user.get("country"),
        email : user.get("email"),
        adhar:user.get("adhar"),
        passport:user.get("passport")
      }, {responseType:"json" });
    
  }
}
