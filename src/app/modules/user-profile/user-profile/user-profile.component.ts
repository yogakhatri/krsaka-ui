import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

interface Transaction {
  name: string;
  value: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user$: Observable<Transaction[]> = EMPTY; // Fix: Initialize with EMPTY or another default value
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  displayedColumns: string[] = ['name', 'value'];

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const username = params.get('username');
        return username
          ? this.userService
              .getUserDetails(username)
              .pipe(map((data: any) => this.convertObjectToArray(data)))
          : EMPTY;
      })
    );
  }

  private convertObjectToArray(
    inputObject: any
  ): { name: string; value: any }[] {
    return Object.entries(inputObject).map(([name, value]) => ({
      name,
      value,
    }));
  }
}
