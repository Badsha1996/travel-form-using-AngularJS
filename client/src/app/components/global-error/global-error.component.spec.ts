import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalErrorComponent } from './global-error.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('GlobalErrorComponent', () => {
  let component: GlobalErrorComponent;
  let fixture: ComponentFixture<GlobalErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call back button',() => {
    let backButton: DebugElement = 
    fixture.debugElement.query(By.css('button[type=submit]'));
    fixture.detectChanges();
    expect(component).toBeTruthy();
});
});
