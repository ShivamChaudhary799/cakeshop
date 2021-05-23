import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcakeComponent } from './addcake/addcake.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { CakecardComponent } from './cakecard/cakecard.component';
import { CakecartComponent } from './cakecart/cakecart.component';
import { CakedetailComponent } from './cakedetail/cakedetail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { DeactivateService } from './deactivate.service';
import { EditComponent } from './edit/edit.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { PasswordComponent } from './password/password.component';
import { RouteResolverService } from './route-resolver.service';
import { SearchcakeComponent } from './searchcake/searchcake.component';
import { SignupComponent } from './signup/signup.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path:'login', component: LoginComponent,canActivate:[AuthGuardService],resolve:[RouteResolverService]},
  {path:'', component: HomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'forgot', component: ForgotComponent},
  {path:'password', component: PasswordComponent},
  {path:'search', component:SearchcakeComponent},
  {path:'cakes/:cakeId', component:CakedetailComponent},
  {path:'cakecart', component:CakecartComponent,canActivate:[AuthGuardService],resolve:[RouteResolverService]},
  {path:'order', component:OrderComponent,canActivate:[AuthGuardService]},
  {path: 'checkout', component:CheckoutComponent,
  children:[
    {path: '',component:SummaryComponent},
    {path: 'orderdetail', component: OrderdetailComponent,canDeactivate: [DeactivateService]},
    {path: 'confirm', component: ConfirmComponent}
  ]},
  {path:'orderdetail', component:OrderdetailComponent},
  {path: 'admin', loadChildren:() => import('./admin/admin.module').then(mod => mod.AdminModule)},
  {path: 'edit/:cakeId', component:EditComponent},
  {path: 'addcake', component: AddcakeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
