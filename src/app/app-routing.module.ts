import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './layout/banner/banner.component';
import { MainpageComponent } from './layout/mainpage/mainpage.component';
import { MainComponent } from './main/main.component';
import { AllbrandsComponent } from './products/allbrands/allbrands.component';
import { TopbrandsComponent } from './products/topbrands/topbrands.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: HomeComponent },
  { path: 'Signup', component: SignupComponent },
   { path: 'main', component: MainComponent },
   { path: 'forgot', component: ForgotComponent },
  { path: '',   redirectTo: '/banner', pathMatch: 'full' },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'allbrands', component: AllbrandsComponent },
  { path: 'topbrands', component: TopbrandsComponent },
  { path: 'banner', component: BannerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
