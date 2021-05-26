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
import { RouteResolverService } from './route-resolver.service';
import { SearchcakeComponent } from './searchcake/searchcake.component';
import { SignupComponent } from './signup/signup.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  // giving path for routing login page component
  {path:'login', component: LoginComponent,canActivate:[AuthGuardService],resolve:[RouteResolverService]},
  // giving path for routing home page component
  {path:'', component: HomeComponent},
  // giving path for routing signup page component
  {path:'signup', component: SignupComponent},
  // giving path for routing forgot password page component
  {path:'forgot', component: ForgotComponent},
  // giving path for routing search item page component
  {path:'search', component:SearchcakeComponent},
  // giving path for routing cakedetail page component
  {path:'cakes/:cakeId', component:CakedetailComponent},
  // giving path for routing cakecart page component
  {path:'cakecart', component:CakecartComponent,canActivate:[AuthGuardService],resolve:[RouteResolverService]},
  // giving path for routing order page component
  {path:'order', component:OrderComponent,canActivate:[AuthGuardService]},
  // giving path for routing checkout page component
  {path: 'checkout', component:CheckoutComponent,
  // giving path for child routing checkout page component
  children:[
    {path: '',component:SummaryComponent},
    {path: 'orderdetail', component: OrderdetailComponent,canDeactivate: [DeactivateService]},
    {path: 'confirm', component: ConfirmComponent}
  ]},
  // giving path for routing orderdetail page component
  {path:'orderdetail', component:OrderdetailComponent},
  // lazy loading for admin component
  {path: 'admin', loadChildren:() => import('./admin/admin.module').then(mod => mod.AdminModule)},
  {path: 'edit/:cakeId', component:EditComponent},
  {path: 'addcake', component: AddcakeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
