import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AboutComponent } from "./pages/about/about.component";
import { LoginComponent } from "./pages/login/login.component";
import { IntranetSkeletonComponent } from "./skeleton/intranet-skeleton/intranet-skeleton.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { GeneralSettingsComponent } from "./pages/settings/components/general-settings/general-settings.component";
import { ProfileSettingsComponent } from "./pages/settings/components/profile-settings/profile-settings.component";
import { AuthenticationService } from "./services/authentication/authentication.service";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'intranet', component: IntranetSkeletonComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'about', component: AboutComponent },
      { path: 'settings', component: SettingsComponent, children: [
          { path: 'general', component: GeneralSettingsComponent },
          { path: 'profile', component: ProfileSettingsComponent },
        ] }
    ], canActivate: [() => {
          return inject(AuthenticationService).isAuthenticated()
    }]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
