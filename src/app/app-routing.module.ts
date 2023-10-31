import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user-auth/user-auth.module').then(
        (m) => m.UserAuthModule
      ),
  },
  {
    path: 'seller',
    loadChildren: () =>
      import('./modules/seller-auth/seller-auth.module').then(
        (m) => m.SellerAuthModule
      ),
  },
  {
    path: 'userProfile',
    loadChildren: () =>
      import('./modules/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
