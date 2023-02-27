import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmFormComponent } from './confirm-form.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { UserService } from 'src/app/services/user.service';

describe('ConfirmFormComponent', () => {
  let component: ConfirmFormComponent;
    let fixture: ComponentFixture<ConfirmFormComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({declarations: [ ConfirmFormComponent ],imports:[TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory
            }
        })],
            providers: [
              { provide: UserService,TranslateService}
            ]}).compileComponents();

        fixture = TestBed.createComponent(ConfirmFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
});
