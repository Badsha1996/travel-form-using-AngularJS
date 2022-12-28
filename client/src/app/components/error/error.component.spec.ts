import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorComponent} from './error.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('ErrorComponent', () => {
    let component: ErrorComponent;
    let fixture: ComponentFixture<ErrorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({declarations: [ErrorComponent]}).compileComponents();

        fixture = TestBed.createComponent(ErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should call back button', () => {
        let backButton: DebugElement = fixture.debugElement.query(By.css('button[type=submit]'));
        fixture.detectChanges();
        expect(component).toBeTruthy();
    })

});
