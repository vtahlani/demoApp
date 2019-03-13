import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AaeHomeComponent } from './aae-home/aae-home.component';
import { PortfolioConstructorComponent } from './portfolio-constructor/portfolio-constructor.component';

const routes: Routes = [
  { path: 'home', component: AaeHomeComponent },
  { path: 'apps/portfolio-constructor', component: PortfolioConstructorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'explore',
    // Any random component
    component: AaeHomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'http://gitlab-hackathon.centralus.cloudapp.azure.com'
    }
}
];

@NgModule({
  providers: [
      {
          provide: 'externalUrlRedirectResolver',
          useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
          {
              window.location.href = (route.data as any).externalUrl;
          }
      }
  ],
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }