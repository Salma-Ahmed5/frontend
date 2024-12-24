import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyordersComponent } from './myorders/myorders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AllSystemOrdersComponent } from './all-system-orders/all-system-orders.component';
import { CourierOrdersComponent } from './courier-orders/courier-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AccountComponent,
    OrderpageComponent,
    NavbarComponent,
    MyordersComponent,
    OrderDetailsComponent,
    AllSystemOrdersComponent,
    CourierOrdersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
