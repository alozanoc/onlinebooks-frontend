import { Component } from '@angular/core';
import { AuthenticationService } from "../../services/authentication/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = ""

  password: string = ""

  message: string = ""

  constructor(
    private authenticationService: AuthenticationService,
  ) {
  }
  async login() {
    const result = await this.authenticationService.login(this.username, this.password)
    if(!result) {
      this.message = "Usuario y/o contraseña incorrectos"
    } else {
      this.message = ""
    }
  }
}
