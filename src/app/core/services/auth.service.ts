import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { IDecode } from '../interfaces/idecode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: IDecode = {} as IDecode;

  private readonly _HttpClient = inject(HttpClient);
  private readonly _Router = inject(Router);

  setRegisterForm(data: object): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/auth/signup`,
      data,
      { observe: 'response' }
    );
  }

  setLoginForm(data: object): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/auth/signin`,
      data,
      { observe: 'response' }
    );
  }

  setUserData(): void {
    if (
      localStorage.getItem('userToken') !== null &&
      localStorage.getItem('userToken') !== undefined
    ) {
      this.userData = jwtDecode(localStorage.getItem('userToken')!);
    }
  }

  logOut(): void {
    localStorage.clear();
    this.userData = {} as IDecode;
    this._Router.navigate(['/login']);
  }

  forgotPassword(email: object): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/auth/forgotPasswords`,
      email,
      { observe: 'response' }
    );
  }

  VerifyResetCode(code: object): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/auth/verifyResetCode`,
      code,
      { observe: 'response' }
    );
  }

  resetNewPassword(pass: object): Observable<any> {
    return this._HttpClient.put(
      `${environment.baseUrl}/api/v1/auth/resetPassword`,
      pass,
      { observe: 'response' }
    );
  }
}
