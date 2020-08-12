import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { LoginServiceService } from './login-service.service';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
   { path: 'main', component: MainPageComponent},
   { path: 'addcustomer', component: AddCustomerComponent },
   { path: 'orderdetails', component: OrderDetailsComponent },
   { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    AddCustomerComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginServiceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
