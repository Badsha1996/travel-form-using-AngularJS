import {Component, OnInit} from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import * as fs from 'file-saver';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';


@Component({selector: 'app-review-form', templateUrl: './review-form.component.html', styleUrls: ['./review-form.component.scss']})

export class ReviewFormComponent implements OnInit{
    constructor(
        public userService : UserService,private storage: AngularFireStorage,private routes: Router) {
            
        }
        ngOnInit(): void {
    
        }
        percentage:number = 0;
        AdharCard:any = this.userService.getValue()[5];
        PassportCard:any = this.userService.getValue()[6];
        uploaded:boolean = false

        upload = (items:any) =>{
            items.forEach((item:any) => {
                const fileName =  new Date().getTime() + item.label + item.file.name 
                const storageRef = this.storage.ref(`/items/${fileName}`);
                const uploadTask = this.storage.upload(`/items/${fileName}`, item.file);
    
                uploadTask.snapshotChanges().pipe(
                    finalize(() => {
                      storageRef.getDownloadURL().subscribe(downloadURL => {
                            if (item.label==="AdharCard")
                                this.AdharCard = downloadURL
                            else
                                this.PassportCard = downloadURL      
                      });
                    })
                  ).subscribe();
                  
                  return uploadTask.percentageChanges().subscribe(percentage => {
                    this.percentage = Math.round(percentage ? percentage : 0);
                  },
                  error => {
                    console.log(error);
                  });
            });
            this.uploaded = true
           
        }
        handleUpload = (e:any) => {
            e.preventDefault()
            this.upload([
                {
                    file: this.AdharCard,
                    label: "AdharCard"
                },
                {
                    file: this.PassportCard,
                    label: "PassportCard"
                }
                
            ])
            
            
        }



    downloadFile(e:any,args:string) {
        e.preventDefault()
        if (args==='p'){
            var filename = "passport";
            try {
                fs.saveAs(this.userService.getValue()[6], filename);
            }
            catch (e) {
                console.log(e)
            }
        } 
        else{
            var filename = "adhar";
            try {
                fs.saveAs(this.userService.getValue()[5], filename);
            }
            catch (e) {
                console.log(e)
            }
        }
    }
    handleGoBack() {        
        this.routes.navigate(["travel-form"])
    }
    handleConfirm() {
        const formData = new FormData();
       
        formData.append("firstName",this.userService.getValue()[0])
        formData.append("middleName",this.userService.getValue()[1])
        formData.append("lastName",this.userService.getValue()[2])
        formData.append("country",this.userService.getValue()[3])
        formData.append("email",this.userService.getValue()[4])
        formData.append("adhar",this.AdharCard)
        formData.append("passport",this.PassportCard)
        
        
        this.userService.saveUser(formData).subscribe(
            // subscribe.sucess
                (res : any) => {
                if (res === null) {
                    this.routes.navigate(["error"])
                } else {
                    this.routes.navigate(["confirm-form"])
                }
            },
            // subscribe.error
                (error) => {
                console.log(error)
            },
            // subscribe.completion
                () => {
                console.log("Subcribe completed")
            }

        )
    }

}


