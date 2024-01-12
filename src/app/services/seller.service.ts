import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from '../shared/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environment';
import { sellerProfile } from '../shared/server-http-url';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) {}
  getSellerDetails(username: string): Observable<Seller> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<Seller>(`${environment.apiUrl}${sellerProfile}`, {
      headers,
    });
  }
}
