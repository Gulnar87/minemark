import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhatComponent } from './what/what.component';
import { NetworkComponent } from './network/network.component';
import { TeamComponent } from './network/team/team.component';
import { WorkComponent } from './work/work.component';
import { WorkListComponent } from './work/work-list/work-list.component';
import { WorkDetailedComponent } from './work/work-detailed/work-detailed.component';
import { DonateComponent } from './donate/donate.component';
import { WorkResolverService } from './work/work-resolver.service';


const routes: Routes = [
 
  { path: '', component: HomeComponent},
  { path: 'what', component: WhatComponent},
  { path: 'network', component: NetworkComponent},
  { path: 'work', component: WorkComponent, children:[
    { path: '', component: WorkListComponent},
    {path: ':id', component: WorkDetailedComponent, resolve: [WorkResolverService] },
 
  ]},

 { path: 'donate', component: DonateComponent},
      { path: ':id', component:  WorkDetailedComponent, resolve: [WorkResolverService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
