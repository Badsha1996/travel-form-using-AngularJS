import {ComponentFixture, TestBed, fakeAsync, inject, tick} from '@angular/core/testing';
import {ReviewFormComponent} from './review-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from "../../services/user.service";
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
;

describe('ReviewFormComponent', () => {
    let component: ReviewFormComponent;
    let fixture: ComponentFixture<ReviewFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ReviewFormComponent],
            imports: [ReactiveFormsModule, AppRoutingModule, HttpClientModule,AngularFireModule.initializeApp(environment.firebase),
                AngularFireDatabaseModule,
                AngularFireStorageModule,TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory
                    }
                })],
                providers: [
                    { provide: UserService,TranslateService,AngularFireStorage}
                  ]
        }).compileComponents();

        fixture = TestBed.createComponent(ReviewFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
    it('should have a percentage of 0 by default', () => {
        expect(component.percentage).toEqual(0);
      });
    
    it('should have uploaded set to false by default', () => {
        expect(component.uploaded).toBeFalse();
      });
      
    

});
