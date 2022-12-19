import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  baseServerUrl = "http://localhost:8800/api/travelForm/post"
  saveUser(user:Array<String>){
    // observable 
    return  this.http.post(this.baseServerUrl, 
      {
        firstName: user[0],
        middleName : user[1],
        lastName : user[2],
        country: user[3],
        email : user[4]
      }, {responseType:"json" });
    
  }
}
