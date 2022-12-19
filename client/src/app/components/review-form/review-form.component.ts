import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { json } from 'body-parser';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit{
  constructor(private route : ActivatedRoute,
              private routes : Router,
              private userService : UserService){}

  firstName : string = "";
  middleName : string = "";
  lastName  : string = "";
  country : string = "";
  email : string = "";

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      this.firstName = params.fName;
      this.middleName = params.mName;
      this.lastName = params.lName;
      this.country = params.country;
      this.email = params.email;
    })
    
  
  }
  
  handleConfirm(){
      this.userService.saveUser([
        this.firstName,
        this.middleName,
        this.lastName,
        this.country,
        this.email
      ]).subscribe((res) => {
        if(res===null){
          this.routes.navigate(["error"])
        }else{
          this.routes.navigate(["confirm-form"])
        }
        
      })
  }
  
}
