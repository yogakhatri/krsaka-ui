import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user$!: Observable<User>;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const username = params.get('username');
        return username ? this.userService.getUserDetails(username) : EMPTY;
      })
    );
  }
}
