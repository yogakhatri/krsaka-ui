import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';

import { Observable } from 'rxjs';
import { User } from '../shared/interfaces';
import { userProfile } from '../shared/server-http-url';
import { usersProfile } from '../shared/ui-http-url';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserDetails(username: string): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<User>(`${environment.apiUrl}${usersProfile}`, {
      headers,
    });
  }
}
