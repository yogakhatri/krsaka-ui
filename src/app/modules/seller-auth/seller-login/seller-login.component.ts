import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { sellerProfile } from 'src/app/shared/server-http-url';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.scss'],
})
export class SellerLoginComponent {
  constructor(
    private fb: FormBuilder,
    private loginService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    const { username, password } = this.loginForm.value;
    if (this.loginForm.valid && username && password) {
      this.loginService.login({ username, password }).subscribe({
        next: async (response) => {
          if (await this.storageService.getItem('accessToken')) {
            this.router.navigate([sellerProfile, `${username}`]);
          }
        },
        error: (error: any) => {
          // Handle specific errors if needed
          console.error('Login failed:', error);
        },
      });
    }
  }
}
