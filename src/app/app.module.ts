import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { WhatComponent } from "./what/what.component";
import { MissionComponent } from "./what/mission/mission.component";
import { NetworkComponent } from "./network/network.component";
import { TeamComponent } from "./network/team/team.component";
import { PublicationsComponent } from "./publications/publications.component";
import { PublicationsDetailComponent } from "./publications/publications-detail/publications-detail.component";
import { PublicationsHomeComponent } from "./publications/publications-home/publications-home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from "./core/header/header.component";
import { FooterComponent } from "./core/footer/footer.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { SupportersComponent } from "./home/supporters/supporters.component";
import { NgxGalleryModule } from "ngx-gallery";
import {
  SwiperModule,
  SwiperConfigInterface,
  SWIPER_CONFIG,
} from "ngx-swiper-wrapper";
import { MissionHomeComponent } from "./what/mission/mission-home/mission-home.component";
import { WorkComponent } from "./work/work.component";
import { TeamHomeComponent } from "./network/team-home/team-home.component";
import { WorkListComponent } from "./work/work-list/work-list.component";
import { WorkItemComponent } from "./work/work-list/work-item/work-item.component";
import { WorkService } from "./work/work.service";
import { PublicationsService } from "./publications/publications.service";
import { NetworkService } from "./network/network.service";
import { AdvisorsComponent } from "./network/advisors/advisors.component";
import { WorkDetailedComponent } from "./work/work-detailed/work-detailed.component";
import { DonateComponent } from "./donate/donate.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: "horizontal",
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: true,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WhatComponent,

    MissionComponent,
    NetworkComponent,
    PublicationsComponent,
    PublicationsDetailComponent,
    PublicationsHomeComponent,
    TeamComponent,
    HomeComponent,
    SupportersComponent,
    MissionHomeComponent,
    WorkComponent,
    TeamHomeComponent,
    WorkListComponent,
    WorkItemComponent,
    AdvisorsComponent,
    WorkDetailedComponent,
    DonateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    SwiperModule,
    FontAwesomeModule,
    NgxGalleryModule,
    FormsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    // Ng2PageScrollModule.forRoot()

    // CoreModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    WorkService,
    PublicationsService,
    NetworkService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
