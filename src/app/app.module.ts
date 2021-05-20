import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarousalComponent } from './carousal/carousal.component';
import { CakecardComponent } from './cakecard/cakecard.component';
import { ZoomhoverDirective } from './zoomhover.directive';
import { NavDirective } from './nav.directive';
import { SearchComponent } from './search/search.component';
import { SearchingDirective } from './searching.directive';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';
import { PasswordComponent } from './password/password.component';
import { SearchcakeComponent } from './searchcake/searchcake.component';
import { CakedetailComponent } from './cakedetail/cakedetail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CakecartComponent } from './cakecart/cakecart.component';
import { AuthenticationService } from './authentication.service';
import { OrderComponent } from './order/order.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SummaryComponent } from './summary/summary.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AuthGuardService } from './auth-guard.service';
import { DeactivateService } from './deactivate.service';
import { AddcakeComponent } from './addcake/addcake.component';
import { DiscountPipe } from './discount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarousalComponent,
    CakecardComponent,
    ZoomhoverDirective,
    NavDirective,
    SearchComponent,
    SearchingDirective,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ForgotComponent,
    PasswordComponent,
    SearchcakeComponent,
    CakedetailComponent,
    CakecartComponent,
    OrderComponent,
    OrderdetailComponent,
    AdminComponent,
    EditComponent,
    CheckoutComponent,
    SummaryComponent,
    PaymentComponent,
    ConfirmComponent,
    AddcakeComponent,
    DiscountPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthenticationService,
    multi:true
  },AuthGuardService,DeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
