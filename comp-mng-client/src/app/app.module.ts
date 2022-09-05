import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {LoginComponent} from './components/login/login.component';
import {UserDashboardComponent} from './pages/dashboard/user-dashboard/user-dashboard.component';
import {TeamOverviewComponent} from './pages/teams/team-overview/team-overview.component';
import {TeamCreationComponent} from './pages/teams/team-creation/team-creation.component';
import {CdsModule} from '@cds/angular';
import {
  ClrDatagridModule,
  ClrDropdownModule,
  ClrInputModule,
  ClrModalModule,
  ClrPasswordModule,
  ClrPopoverToggleService,
  ClrSelectModule,
  ClrSignpostModule,
  ClrTabsModule
} from "@clr/angular";
import {angleIcon, ClarityIcons, minusCircleIcon, plusCircleIcon} from "@cds/core/icon";
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import {ErrorInterceptor} from "./_helpers/error.interceptor";
import {AuthGuard} from "./_helpers/auth.guard";
import {CompetitionOverviewComponent} from './pages/competitions/competition-overview/competition-overview.component';
import {SingleCompetitionOverview} from './pages/competitions/single-comp-view/single-competition-overview.component';
import {SportsTabComponent} from './components/sports-tab/sports-tab.component';
import {InteractiveTableComponent} from './components/interactive-table/interactive-table.component';
import {ForecastOverviewComponent} from './pages/forecast/forecast-overview/forecast-overview.component';
import {ForecastCreationComponent} from './pages/forecast/forecast-creation/forecast-creation.component';
import {PopUpComponent} from './components/pop-up/pop-up.component';
import {ResultsCompSelectionComponent} from './pages/results/results-comp-selection/results-comp-selection.component';
import {ResultsMatchOverviewComponent} from './pages/results/results-match-overview/results-match-overview.component';
import {MarketOverviewComponent} from './pages/market/market-overview/market-overview.component';
import {TradeCreationComponent} from './pages/market/trade-creation/trade-creation.component';
import {LeaderboardComponent} from './pages/leaderboard/leaderboard.component';
import {ManualOverviewComponent} from './pages/manual/manual-overview/manual-overview.component';
import {ManualCompeteComponent} from './pages/manual/manual-compete/manual-compete.component';
import {ManualTeamsComponent} from './pages/manual/manual-teams/manual-teams.component';
import {ManualForecastComponent} from './pages/manual/manual-forecast/manual-forecast.component';
import {ManualMarketComponent} from './pages/manual/manual-market/manual-market.component';
import {NavCardComponent} from './components/nav-card/nav-card.component';
import {ManualGeneralComponent} from './pages/manual/manual-general/manual-general.component';
import {AdminDashboardComponent} from './pages/dashboard/admin-dashboard/admin-dashboard.component';
import {Roles} from "./model/domain/Roles";
import {CompetitionResolver} from "./resolvers/comp-resolver/competition.resolver";
import {TeamOverviewResolver} from "./resolvers/team-resolver/team.overview.resolver";
import {ToastContainerModule, ToastrModule} from "ngx-toastr";

ClarityIcons.addIcons(
  plusCircleIcon,
  minusCircleIcon,
  angleIcon
);

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AppHeaderComponent,
    LoginComponent,
    UserDashboardComponent,
    TeamOverviewComponent,
    TeamCreationComponent,
    CompetitionOverviewComponent,
    SingleCompetitionOverview,
    SportsTabComponent,
    InteractiveTableComponent,
    ForecastOverviewComponent,
    ForecastCreationComponent,
    PopUpComponent,
    ResultsCompSelectionComponent,
    ResultsMatchOverviewComponent,
    MarketOverviewComponent,
    TradeCreationComponent,
    LeaderboardComponent,
    ManualOverviewComponent,
    ManualCompeteComponent,
    ManualTeamsComponent,
    ManualForecastComponent,
    ManualMarketComponent,
    NavCardComponent,
    ManualGeneralComponent,
    AdminDashboardComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
          {
            path: '',
            component: HomepageComponent
          },
          {
            path: 'user-dashboard',
            component: UserDashboardComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          },
          {
            path: 'admin-dashboard',
            component: AdminDashboardComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.Admin]}
          },
          {
            path: 'teams',
            component: TeamOverviewComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]},
            resolve: {teamsResponse: TeamOverviewResolver}
          },
          {
            path: 'teams/aanmaken',
            component: TeamCreationComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          },
          {
            path: 'competities',
            component: CompetitionOverviewComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]},
            resolve: {competitionResponse: CompetitionResolver}
          },
          {
            path: 'competities/meedoen/:id',
            component: SingleCompetitionOverview,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          },
          {
            path: 'voorspellingen',
            component: ForecastOverviewComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          },
          {
            path: 'voorspellingen/doen',
            component: ForecastCreationComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          },
          {
            path: 'resultaten',
            component: ResultsCompSelectionComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          },
          {
            path: 'resultaten/wedstrijden',
            component: ResultsMatchOverviewComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          },
          {
            path: 'markt',
            component: MarketOverviewComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          },
          {
            path: 'markt/aanbieden',
            component: TradeCreationComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          },
          {
            path: 'leaderboard',
            component: LeaderboardComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          },
          {
            path: 'speluitleg',
            component: ManualOverviewComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          },
          {
            path: 'speluitleg/algemeen',
            component: ManualGeneralComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          },
          {
            path: 'speluitleg/competities',
            component: ManualCompeteComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          },
          {
            path: 'speluitleg/teams',
            component: ManualTeamsComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          },
          {
            path: 'speluitleg/voorspellen',
            component: ManualForecastComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          },
          {
            path: 'speluitleg/markt',
            component: ManualMarketComponent,
            canActivate: [AuthGuard],
            data: {role: [Roles.User]}
          }
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
        ClrModalModule,
        ToastrModule.forRoot({
          preventDuplicates: true,
          positionClass: 'toast-top-right',
          progressBar: true
        }),
        ToastContainerModule,
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
