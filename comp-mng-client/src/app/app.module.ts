import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardButtonComponent } from './components/dashboard-button/dashboard-button.component';
import { TeamOverviewComponent } from './pages/teams/team-overview/team-overview.component';
import { TeamCreationComponent } from './pages/teams/team-creation/team-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AppHeaderComponent,
    LoginComponent,
    DashboardComponent,
    DashboardButtonComponent,
    TeamOverviewComponent,
    TeamCreationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'teams', component: TeamOverviewComponent},
      {path: 'teams/aanmaken', component: TeamCreationComponent},
      //TODO: meer paths toevoegen
      // ook nog met auth guard
    ]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
