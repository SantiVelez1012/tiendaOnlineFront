import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {FormCreateUserComponent} from "./components/form-create-user/form-create-user.component";
import {FormLoginComponent} from "./components/form-login/form-login.component";
import {CarritoComponent} from "./components/carrito/carrito.component";
import {FormPayComponent} from "./components/form-pay/form-pay.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'create-user', component: FormCreateUserComponent},
  {path: 'login', component: FormLoginComponent},
  {path: 'car-shop', component: CarritoComponent},
  {path: 'pays', component: FormPayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
