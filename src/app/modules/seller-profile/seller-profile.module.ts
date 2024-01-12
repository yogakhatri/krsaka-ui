import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { SellerProfileComponent } from './seller-profile/seller-profile.component';

@NgModule({
  declarations: [SellerProfileComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
  ],
})
export class SellerProfileModule {}
