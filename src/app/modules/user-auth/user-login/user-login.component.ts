import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { userProfile } from 'src/app/shared/http-url';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {
    this.loginHandler();
  }

  loginHandler() {
    this.authService
      .login({ username: 'admin', password: 'Admin#@12345' })
      .subscribe(async () => {
        if (await this.storageService.getItem('accessToken')) {
          this.router.navigate([userProfile]);
        } else {
          // Do later: handle all possible errors
        }
      });
  }
}
