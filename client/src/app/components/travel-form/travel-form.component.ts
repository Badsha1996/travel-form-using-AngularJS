import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router} from '@angular/router';
import {UserService} from 'src/app/services/user.service';



@Component({selector: 'app-travel-form', templateUrl: './travel-form.component.html', styleUrls: ['./travel-form.component.scss']})

export class TravelFormComponent {   

    constructor(private route : Router, private userService : UserService) {}
    title: string = "Travel Form"
    AdharCard:any = this.userService.getValue()[5]
    PassportCard:any = this.userService.getValue()[6]

    travelForm = new FormGroup({
        firstName: new FormControl(this.userService.getValue()[0], [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
        middleName: new FormControl(this.userService.getValue()[1], [Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
        lastName: new FormControl(this.userService.getValue()[2], [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
        country: new FormControl(this.userService.getValue()[3], [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
        email: new FormControl(this.userService.getValue()[4], [Validators.required, Validators.email])
    });
    
    
    onChange(event:any,type:string){
        if(type==="a"){
            if(event.target.files[0].size>117099){
                alert("The File size exceed limit")
            }else{
                if(event.target.files[0].type == "application/pdf"){
                    this.AdharCard = event.target.files[0]
                }else{
                    alert("The File should only be .pdf")
                }   
            }
            
            }
        else{
            if(event.target.files[0].size>117099){
                alert("The File size exceed limit")
            }else{
                if(event.target.files[0].type == "application/pdf"){
                    this.PassportCard = event.target.files[0]
                }else{
                    alert("The File should only be .pdf")
                } 
                
            }
            
            }
            
    }


    handleSubmit(e:any) {
        e.preventDefault()
        this.route.navigate(["review-form"])
        this.userService.sendValue(this.FirstName.value, this.MiddleName.value, this.LastName.value, this.Country.value, this.Email.value,this.AdharCard,this.PassportCard)    
    }
    
    handleError(args : string, name : string) {
        if (name === "firstName") 
            return this.FirstName.errors ?. [args] && (this.FirstName.touched || this.FirstName.dirty)
         else if (name === "middleName") 
            return this.MiddleName.errors ?. [args] && (this.MiddleName.touched || this.MiddleName.dirty)
         else if (name === "lastName") 
            return this.LastName.errors ?. [args] && (this.LastName.touched || this.LastName.dirty)
         else if (name === "country") 
            return this.Country.errors ?. [args] && (this.Country.touched || this.Country.dirty)
         else 
            return this.Email.errors ?. [args] && (this.Email.touched || this.Email.dirty)    
    }

    get FirstName(): FormControl {
        return this.travelForm.get("firstName")as FormControl;
    }
    get MiddleName(): FormControl {
        return this.travelForm.get("middleName")as FormControl;
    }
    get LastName(): FormControl {
        return this.travelForm.get("lastName")as FormControl;
    }
    get Email(): FormControl {
        return this.travelForm.get("email")as FormControl;
    }
    get Country(): FormControl {
        return this.travelForm.get("country")as FormControl;
    }
   
}

