import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';

// DEMO PAGES

import {AnalyticsComponent} from './DemoPages/Dashboards/analytics/analytics.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      // Dashboads
      {path: '', component: AnalyticsComponent, data: {extraParameter: 'dashboardsMenu'}},
    ]

  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
