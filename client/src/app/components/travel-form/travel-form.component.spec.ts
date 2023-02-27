import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TravelFormComponent } from './travel-form.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserService } from 'src/app/services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpBackend } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';


describe('TravelFormComponent', () => {
  let component: TravelFormComponent;
  let fixture: ComponentFixture<TravelFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let userServiceSpy: jasmine.SpyObj<UserService>;


  beforeEach(async () => {
    userServiceSpy = jasmine.createSpyObj('UserService', ['sendValue', 'getValue']);
    userServiceSpy.getValue.and.returnValue(['John', 'Doe', 'Doe', 'USA', 'john.doe@email.com', {}, {}]);

    await TestBed.configureTestingModule({
      declarations: [ TravelFormComponent ],
      imports : [ReactiveFormsModule, AppRoutingModule, HttpClientTestingModule,TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpBackend]
        }
    }) ],
      providers: [
        { provide: UserService, useValue: userServiceSpy ,TranslateService}
      ]
      
      
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(TravelFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });


  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TravelFormComponent);
    component = fixture.componentInstance;
    
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
    expect(name.valid).toBeTruthy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

  });
  it('Last Name field validity', () => {
    const name = component.travelForm.controls.lastName;
    expect(name.valid).toBeTruthy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

  });
  it('country field validity', () => {
    const country = component.travelForm.controls.country;
    expect(country.valid).toBeTruthy();

    country.setValue('');
    expect(country.hasError('required')).toBeTruthy();

  });

  it('email field validity', () => {
    const email = component.travelForm.controls.email;
    expect(email.valid).toBeTruthy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
});

it('should set the title', () => {
    expect(component.title).toBe('Travel Form');
});

  it('should handle submit', () => {
    const e = { preventDefault: () => { } };
    component.handleSubmit(e);
    expect(userServiceSpy.sendValue).toHaveBeenCalledWith('John', 'Doe', 'Doe', 'USA', 'john.doe@email.com', {}, {});
  });
  
});
