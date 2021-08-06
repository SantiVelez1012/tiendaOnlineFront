import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormCreateUserComponent } from './components/form-create-user/form-create-user.component';
import { FormPayComponent } from './components/form-pay/form-pay.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarritoComponent,
    FormLoginComponent,
    FormCreateUserComponent,
    FormPayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
