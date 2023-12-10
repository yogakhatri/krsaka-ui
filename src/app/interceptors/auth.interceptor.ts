import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const cleanedToken = token.replace(/^"(.*)"$/, '$1');

      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${cleanedToken}`,
        },
      });
    }

    return next.handle(req);
  }
}
