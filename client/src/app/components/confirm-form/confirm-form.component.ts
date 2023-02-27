import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-form',
  templateUrl: './confirm-form.component.html',
  styleUrls: ['./confirm-form.component.scss']
})
export class ConfirmFormComponent implements OnInit {
  constructor( ) { 
    
  }
  ngOnInit(): void {
    
  }

  handleGoBack() {        
    window.location.href = ("/travel-form")  
  }
   
}
