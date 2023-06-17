import { Component, inject } from '@angular/core';
import { AuthenticationService } from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  readonly authenticationService = inject(AuthenticationService)

  async logout() {
    await this.authenticationService.logout()
  }
}
