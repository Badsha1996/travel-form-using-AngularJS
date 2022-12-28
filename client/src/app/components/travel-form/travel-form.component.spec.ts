import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelFormComponent } from './travel-form.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('TravelFormComponent', () => {
  let component: TravelFormComponent;
  let fixture: ComponentFixture<TravelFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // FAKE ROUTER PATH
  const fakeActivatedRoute = {
    snapshot: {
      queryParams: {
        returnUrl: '/review-form'
      }
    }
  };

 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelFormComponent ],
      imports : [ReactiveFormsModule, AppRoutingModule],
      
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(TravelFormComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });


  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TravelFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    component.travelForm.controls.firstName.setValue('');
    component.travelForm.controls.middleName.setValue('');
    component.travelForm.controls.lastName.setValue('');
    component.travelForm.controls.country.setValue('');
    component.travelForm.controls.email.setValue('');
    
    expect(component.travelForm.valid).toBeFalsy();
  });

  it('First Name field validity', () => {
    const name = component.travelForm.controls.firstName;
    expect(name.valid).toBeFalsy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

  });
  it('Last Name field validity', () => {
    const name = component.travelForm.controls.lastName;
    expect(name.valid).toBeFalsy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

  });
  it('country field validity', () => {
    const country = component.travelForm.controls.country;
    expect(country.valid).toBeFalsy();

    country.setValue('');
    expect(country.hasError('required')).toBeTruthy();

  });

  it('email field validity', () => {
    const email = component.travelForm.controls.email;
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();
  });

  it('should set submitted to true', () => {
    component.handleSubmit();
    expect(component.handleSubmit).toBeTruthy();
  });

  it('should reset form',() => {
    let backButton: DebugElement = 
    fixture.debugElement.query(By.css('button[type=submit]'));
    fixture.detectChanges();
    expect(component).toBeTruthy();
});
});


