import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login() {
    localStorage.setItem('routeguard-app-login', "1");
  }

  logout() {
    localStorage.removeItem('routeguard-app-login');
  }

  isLoggedIn() {
    if (localStorage.getItem('routeguard-app-login') != null)
      return true;
    else
      return false;
  }
}
