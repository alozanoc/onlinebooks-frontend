import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './skeleton/sidebar/sidebar.component';
import { NavbarComponent } from './skeleton/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { LoginComponent } from './pages/login/login.component';
import { IntranetSkeletonComponent } from './skeleton/intranet-skeleton/intranet-skeleton.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { GeneralSettingsComponent } from './pages/settings/components/general-settings/general-settings.component';
import { ProfileSettingsComponent } from './pages/settings/components/profile-settings/profile-settings.component';
import { SidebarSettingsComponent } from './pages/settings/components/sidebar-settings/sidebar-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    AboutComponent,
    LoginComponent,
    IntranetSkeletonComponent,
    LandingComponent,
    SettingsComponent,
    GeneralSettingsComponent,
    ProfileSettingsComponent,
    SidebarSettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
