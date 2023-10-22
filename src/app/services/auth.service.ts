import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { StorageService } from './storage.service'; // Import the StorageService
import { environment } from 'environment';
import { login } from '../shared/http-url';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  login(loginDetails: LoginDetails): Observable<void> {
    return this.http.post(`${environment.apiUrl}${login}`, loginDetails).pipe(
      tap((response: any) => {
        console.log(
          '🚀 ~ file: auth.service.ts:21 ~ LoginService ~ tap ~ response:',
          response
        );
        if (response && response.token) {
          this.storageService.setItem('bearer', response.token);
        } else {
          console.error(response.error);
        }
      })
    );
  }
}
