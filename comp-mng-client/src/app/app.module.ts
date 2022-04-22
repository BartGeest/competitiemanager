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
    ClrInputModule, ClrModalModule,
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
import { ForecastOverviewComponent } from './pages/forecast/forecast-overview/forecast-overview.component';
import { ForecastCreationComponent } from './pages/forecast/forecast-creation/forecast-creation.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { ResultsCompSelectionComponent } from './pages/results/results-comp-selection/results-comp-selection.component';
import { ResultsMatchOverviewComponent } from './pages/results/results-match-overview/results-match-overview.component';
import { MarketOverviewComponent } from './pages/market/market-overview/market-overview.component';
import { TradeCreationComponent } from './pages/market/trade-creation/trade-creation.component';

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
    ForecastOverviewComponent,
    ForecastCreationComponent,
    PopUpComponent,
    ResultsCompSelectionComponent,
    ResultsMatchOverviewComponent,
    MarketOverviewComponent,
    TradeCreationComponent,
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
          {path: 'voorspellingen', component: ForecastOverviewComponent, canActivate: [AuthGuard]},
          {path: 'voorspellingen/doen', component: ForecastCreationComponent, canActivate: [AuthGuard]},
          {path: 'resultaten', component: ResultsCompSelectionComponent, canActivate: [AuthGuard]},
          {path: 'resultaten/wedstrijden', component: ResultsMatchOverviewComponent, canActivate: [AuthGuard]},
          {path: 'markt', component: MarketOverviewComponent, canActivate: [AuthGuard]},
          {path: 'markt/aanbieden', component: TradeCreationComponent, canActivate: [AuthGuard]},
            //TODO: meer paths toevoegen
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
        ClrDatagridModule,
        ClrModalModule
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
