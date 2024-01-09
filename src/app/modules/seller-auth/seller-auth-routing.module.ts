import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: SellerLoginComponent,
  },
  {
    path: 'register',
    component: SellerRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerAuthRoutingModule {}
