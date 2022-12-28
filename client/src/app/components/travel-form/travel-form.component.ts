import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.scss']
})
export class TravelFormComponent implements OnInit{
  
  constructor(private route : Router,
              private activateRoute : ActivatedRoute){}

  fName : String = ""
  mName  : String = ""
  lName  : String = ""
  country : String = ""
  email : String = ""

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((params:any)=>{
      this.fName = params.fName;
      this.mName = params.mName;
      this.lName = params.lName;
      this.country = params.country;
      this.email = params.email;
    }
    )
  }
  
  message : string = "";
  // Making the reactive form 
  travelForm = new FormGroup({
    firstName : new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    middleName : new FormControl("", [Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    lastName : new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    country : new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    email : new FormControl("", [Validators.required, Validators.email])
  });
  

  handleSubmit(){
    this.route.navigate(["review-form"], {queryParams :{
      fName : this.travelForm.get("firstName")?.value,
      mName : this.travelForm.get("middleName")?.value,
      lName : this.travelForm.get("lastName")?.value,
      country: this.travelForm.get("country")?.value,
      email : this.travelForm.get("email")?.value
    }})
  }
  
  handleReset(){
    this.travelForm.reset();
  }

  get FirstName() : FormControl{
    return this.travelForm.get("firstName") as FormControl;
  }
  get MiddleName() : FormControl{
    return this.travelForm.get("middleName") as FormControl;
  }
  get LastName() : FormControl{
    return this.travelForm.get("lastName") as FormControl;
  }
  get Email() : FormControl{
    return this.travelForm.get("email") as FormControl;
  }
  get Country() : FormControl{
    return this.travelForm.get("country") as FormControl;
  }
}
