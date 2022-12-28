import {ComponentFixture, TestBed, fakeAsync, inject, tick} from '@angular/core/testing';
import {ReviewFormComponent} from './review-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from "../../services/user.service";
import {of} from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ReviewFormComponent', () => {
    let component: ReviewFormComponent;
    let fixture: ComponentFixture<ReviewFormComponent>;

    let userService;
    let homeComponent;
    let element;


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ReviewFormComponent],
            imports: [ReactiveFormsModule, AppRoutingModule, HttpClientModule]
        }).compileComponents();

        fixture = TestBed.createComponent(ReviewFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    
    it('should call handleGoBack method',() => {
        spyOn(component, 'handleGoBack');
        let backButton: DebugElement = 
        fixture.debugElement.query(By.css('button[type=submit]'));
        fixture.detectChanges();
        backButton.triggerEventHandler('click',null);
        fixture.detectChanges();
        expect(component.handleGoBack).toHaveBeenCalledTimes(1);
    });

    it("save data using API", () => {
        let response = [
            {
                firstName: "",
                middleName: "",
                lastName: "",
                country: "",
                email: ""
            }, {
                firstName: "",
                middleName: "",
                lastName: "",
                country: "",
                email: ""
            }
        ];


        // Act
        component.handleConfirm()
        expect(component.handleConfirm).toBeTruthy(response);
        
    })


});
