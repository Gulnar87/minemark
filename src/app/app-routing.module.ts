import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { WhatComponent } from "./what/what.component";
import { NetworkComponent } from "./network/network.component";
import { TeamComponent } from "./network/team/team.component";
import { WorkComponent } from "./work/work.component";
import { PublicationsComponent } from "./publications/publications.component";
import { PublicationsDetailComponent } from "./publications/publications-detail/publications-detail.component";
import { PublicationsHomeComponent } from "./publications/publications-home/publications-home.component";
// import { PublicationsResolverService } from "./publications/publications-resolver.service";
import { WorkListComponent } from "./work/work-list/work-list.component";
import { WorkDetailedComponent } from "./work/work-detailed/work-detailed.component";
import { WorkResolverService } from "./work/work-resolver.service";
import { DonateComponent } from "./donate/donate.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "what", component: WhatComponent },
  { path: "network", component: NetworkComponent },
  {
    path: "work",
    component: WorkComponent,
    children: [
      { path: "", component: WorkListComponent },
      {
        path: ":id",
        component: WorkDetailedComponent,
        resolve: [WorkResolverService],
      },
    ],
  },
  {
    path: "publications",
    component: PublicationsComponent,
    children: [
      {
        path: "",
        component: PublicationsHomeComponent,
      },
      {
        path: ":id",
        component: PublicationsDetailComponent,
      },
    ],
  },

  { path: "donate", component: DonateComponent },
  { path: "**", component: PublicationsDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
