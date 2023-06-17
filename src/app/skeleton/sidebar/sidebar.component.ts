import { Component, inject } from '@angular/core';
import { AuthenticationService } from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  readonly authenticationService = inject(AuthenticationService)

  async logout() {
    await this.authenticationService.logout()
  }

}
