import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { StorageService } from './storage.service';
import { environment } from 'environment';
import { auth } from '../shared/server-http-url';
import { LoginDetails } from '../shared/interfaces';

// "username": "admin",
// "password": "Admin#@12345"

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  login(loginDetails: LoginDetails): Observable<void> {
    return this.http.post(`${environment.apiUrl}${auth}`, loginDetails).pipe(
      tap((response: any) => {
        if (response && response.accessToken) {
          this.storageService.setItem('accessToken', response.accessToken);
        } else {
          console.error(response.error);
        }
      })
    );
  }
}
