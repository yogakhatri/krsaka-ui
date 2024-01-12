import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EMPTY, Observable, map, switchMap } from 'rxjs';

import { SellerService } from 'src/app/services/seller.service';

interface Transaction {
  name: string;
  value: string;
}

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.scss'],
})
export class SellerProfileComponent implements OnInit {
  seller$: Observable<Transaction[]> = EMPTY;
  constructor(
    private route: ActivatedRoute,
    private sellerService: SellerService
  ) {}

  displayedColumns: string[] = ['name', 'value'];

  ngOnInit(): void {
    this.seller$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const username = params.get('username');
        return username
          ? this.sellerService
              .getSellerDetails(username)
              .pipe(map((data: any) => this.convertObjectToArray(data)))
          : EMPTY;
      })
    );
  }

  goBack() {}

  private convertObjectToArray(
    inputObject: any
  ): { name: string; value: any }[] {
    return Object.entries(inputObject).map(([name, value]) => ({
      name,
      value,
    }));
  }
}
