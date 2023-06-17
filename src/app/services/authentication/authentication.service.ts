import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationApiService } from "../api/authentication-api.service";
import { SimpleUserResponse } from "../api/authentication.interfaces";

const authenticationKey = 'AUTHKEY';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {

  constructor(private router: Router, private authenticationApiService: AuthenticationApiService) {
  }

  get credentials(): SimpleUserResponse | undefined {
    return JSON.parse(localStorage.getItem(authenticationKey) ?? 'undefined') as SimpleUserResponse | undefined;
  }

  set credentials(response: SimpleUserResponse | undefined ) {
    localStorage.setItem(authenticationKey, JSON.stringify(response));
  }

  isAuthenticated() {
    return this.credentials !== undefined;
  }

  async login(username: string, password: string) {
    try {
      this.credentials = await this.authenticationApiService.login(username, password);
      await this.router.navigate(["intranet"])
      return true;
    } catch (e) {
      this.credentials = undefined;
      return false;
    }
  }

  async logout() {
    this.credentials = undefined
    await this.router.navigate(["login"])
  }
}
