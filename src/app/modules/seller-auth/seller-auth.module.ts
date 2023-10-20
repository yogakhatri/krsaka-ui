import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerAuthRoutingModule } from './seller-auth-routing.module';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerRegisterComponent } from './seller-register/seller-register.component';


@NgModule({
  declarations: [
    SellerLoginComponent,
    SellerRegisterComponent
  ],
  imports: [
    CommonModule,
    SellerAuthRoutingModule
  ]
})
export class SellerAuthModule { }
