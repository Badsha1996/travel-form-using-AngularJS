import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmFormComponent } from './components/confirm-form/confirm-form.component';
import { ErrorComponent } from './components/error/error.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { TravelFormComponent } from './components/travel-form/travel-form.component';
const routes: Routes = [
  {path: "", component : TravelFormComponent},
  {path:"travel-form", component : TravelFormComponent},
  {path:"review-form", component : ReviewFormComponent},
  {path:"confirm-form",  component : ConfirmFormComponent},
  {path:"error", component: ErrorComponent},
  {path:"**", component: TravelFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
