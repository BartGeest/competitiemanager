import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardButtonComponent } from './components/dashboard-button/dashboard-button.component';
import { TeamOverviewComponent } from './pages/teams/team-overview/team-overview.component';
import { TeamCreationComponent } from './pages/teams/team-creation/team-creation.component';
import { CdsModule } from '@cds/angular';
import {
    ClrDatagridModule,
    ClrDropdownModule,
    ClrInputModule,
    ClrPasswordModule,
    ClrPopoverToggleService,
    ClrSelectModule,
    ClrSignpostModule, ClrTabsModule
} from "@clr/angular";
import {ClarityIcons, plusCircleIcon, angleIcon, minusCircleIcon} from "@cds/core/icon";
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import {ErrorInterceptor} from "./_helpers/error.interceptor";
import {AuthGuard} from "./_helpers/auth.guard";
import { CompetitionOverviewComponent } from './pages/competitions/competition-overview/competition-overview.component';
import { CompetitionParticipateComponent } from './pages/competitions/competition-participate/competition-participate.component';
import { SportsTabComponent } from './components/sports-tab/sports-tab.component';
import { DashboardSignpostComponent } from './components/dashboard-signpost/dashboard-signpost.component';
import { InteractiveTableComponent } from './components/interactive-table/interactive-table.component';
import { ForecastSelectionComponent } from './pages/forecast-selection/forecast-selection.component';

ClarityIcons.addIcons(
  plusCircleIcon,
  minusCircleIcon,
  angleIcon
); //TODO: andere icons toevoegen?

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
    CompetitionOverviewComponent,
    CompetitionParticipateComponent,
    SportsTabComponent,
    DashboardSignpostComponent,
    InteractiveTableComponent,
    ForecastSelectionComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            {path: '', component: HomepageComponent},
            {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
            {path: 'teams', component: TeamOverviewComponent, canActivate: [AuthGuard]},
            {path: 'teams/aanmaken', component: TeamCreationComponent, canActivate: [AuthGuard]},
            {path: 'competities', component: CompetitionOverviewComponent, canActivate: [AuthGuard]},
            {path: 'competities/meedoen', component: CompetitionParticipateComponent, canActivate: [AuthGuard]},
            //TODO: meer paths toevoegen
            // ook nog met auth guard
        ]),
        ReactiveFormsModule,
        HttpClientModule,
        CdsModule,
        ClrInputModule,
        ClrPasswordModule,
        ClrDropdownModule,
        ClrSelectModule,
        FormsModule,
        ClrSignpostModule,
        ClrTabsModule,
        ClrDatagridModule
    ],
  providers: [
    HttpClientModule,
    ClrPopoverToggleService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule { }
