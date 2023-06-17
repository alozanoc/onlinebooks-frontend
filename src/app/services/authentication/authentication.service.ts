import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

const authenticationKey = 'AUTHKEY';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {


  constructor(private router: Router) {
  }
  get isLogued() {
    return JSON.parse(localStorage.getItem(authenticationKey) ?? 'false') as boolean;
  }

  set isLogued(status ) {
    localStorage.setItem(authenticationKey, JSON.stringify(status));
  }

  isAuthenticated() {
    return this.isLogued;
  }

  async login(username: string, password: string) {
    if(username === 'admin') {
      this.isLogued = true
      await this.router.navigate(["intranet"])
      return true;
    }
    return false;
  }

  async logout() {
    this.isLogued = false
    await this.router.navigate(["login"])
  }
}
