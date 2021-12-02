import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgotComponent } from './forgot/forgot.component';
import { AllbrandsComponent } from './products/allbrands/allbrands.component';
import { TopbrandsComponent } from './products/topbrands/topbrands.component';
import { MainpageComponent } from './layout/mainpage/mainpage.component';
import { BannerComponent } from './layout/banner/banner.component';
import { CartComponent } from './store/cart/cart.component';
import { WishlistComponent } from './store/wishlist/wishlist.component';
import { AddressComponent } from './store/address/address.component';
import { ShippingcostComponent } from './shipping/shippingcost/shippingcost.component';
import { FeaturedComponent } from './products/featured/featured.component';
import { BestsellingComponent } from './products/bestselling/bestselling.component';
import { OrdersComponent } from './store/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    MainComponent,
    ForgotComponent,
    AllbrandsComponent,
    TopbrandsComponent,
    MainpageComponent,
    BannerComponent,
    CartComponent,
    WishlistComponent,
    AddressComponent,
    ShippingcostComponent,
    FeaturedComponent,
    BestsellingComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
