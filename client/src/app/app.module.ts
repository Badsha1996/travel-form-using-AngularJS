import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelFormComponent } from './components/travel-form/travel-form.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ConfirmFormComponent } from './components/confirm-form/confirm-form.component';
import { ErrorComponent } from './components/error/error.component';
import { UserService } from './services/user.service';
import { GlobalErrorComponent } from './components/global-error/global-error.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelFormComponent,
    ReviewFormComponent,
    ConfirmFormComponent,
    ErrorComponent,
    GlobalErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
