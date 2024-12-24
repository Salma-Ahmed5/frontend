import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { NavbarComponent } from './navbar/navbar.component';
import{ OrderpageComponent } from './orderpage/orderpage.component'
import { MyordersComponent } from './myorders/myorders.component';
import {OrderDetailsComponent } from './order-details/order-details.component';

import{ AllSystemOrdersComponent } from './all-system-orders/all-system-orders.component';
import { CourierOrdersComponent } from './courier-orders/courier-orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'navbar', component:NavbarComponent},
  {path: 'account', component:AccountComponent},
  {path: 'orderpage', component: OrderpageComponent},
  { path: 'myorders', component: MyordersComponent },//hena
  { path: 'order-details/:id', component: OrderDetailsComponent } ,
  { path: 'all-system-orders', component: AllSystemOrdersComponent } ,
  { path: 'courier-orders', component: CourierOrdersComponent } ,
  { path: 'order-details/:id', component: OrderDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
