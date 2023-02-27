import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorComponent} from './error.component';
import {DebugElement, NgModule} from '@angular/core';
import {By} from '@angular/platform-browser';
import { HttpBackend } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { AppModule, HttpLoaderFactory } from 'src/app/app.module';
import { UserService } from 'src/app/services/user.service';


describe('ErrorComponent', () => {
    let component: ErrorComponent;
    let fixture: ComponentFixture<ErrorComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({declarations: [ ErrorComponent ],imports:[TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory
            }
        })],
            providers: [
              { provide: UserService,TranslateService}
            ]}).compileComponents();

        fixture = TestBed.createComponent(ErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    
});
