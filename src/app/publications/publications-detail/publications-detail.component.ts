import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PublicationsService } from "../publications.service";
import { Publication, Pictures } from "../publications.model";
import { Subscription } from "rxjs";
import { DataStorageService } from "../../shared/data-storage.service";

@Component({
  selector: "app-work-detail",
  templateUrl: "./publications-detail.component.html",
  styleUrls: ["./publications-detail.component.css"],
})
export class PublicationsDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private publicationsService: PublicationsService
  ) {}

  // pictures: Pictures [] = [];
  publication: Publication;
  id: string;
  works: Publication[];
  subscription: Subscription;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      //this.work = this.workService.getWork(this.id);
      console.log(this.id);
      this.publication = this.publicationsService.getPublication(this.id);
    });

    // this.dsService.getWorks()
    //       .subscribe(
    //           (response: Work[]) => {
    //               this.works = response;

    //               this.work = this.works.find(p => p.id.toString() === project_id.toString());

    //               console.log(this.works, project_id);

    //           },
    //           // (error: HttpErrorResponse) => console.log(error)
    //       );
    console.log("ik besta");
    // this.publication = {
    //   title: "Invisible Risks: Living with Landmines in Bosnia ",
    //   body: `<p>More than a quarter of a century after the war, there are still deadly hidden dangers lurking in the fields of Bosnia and Herzegovina (BiH). What makes them even more dangerous is the fact they are being overlooked, especially in times of COVID-19.
    //     </p>
    //     <img src="assets/images/articles/invisible-risks/class.png">
    //     <p>We spoke to Svjetlana Pavlovic, President of "Posavina without Mines", an NGO based in BiH, about the challenges of mine action and why education is a scalable solution that offers immediate help to vulnerable communities.
    //     </p>
    //     <div class="question-container">
    //       <h4 class="question">It will take years to completely clear Bosnia and Herzegovina of land mines which makes explosive ordnance risk education (EORE) vital in the meantime. What is your view on this?
    //       </h4>
    //       <p>"It’s a necessary measure, yet it’s often complicated to implement and achieve positive results. The population living in mine-affected communities receive a lot of communication from EORE organizations with reluctance because they just want demining to be done. They are tired of repeatedly being informed that demining will not take place soon. That makes them less approachable for EORE. The reason for this behavior lies in the fact that the war ended so long ago, and so many people feel that EORE is no longer relevant."
    //       </p>
    //     </div>
    //     <div class="question-container">
    //       <h4 class="question"></h4>
    //       <p></p>
    //     </div>
    //     <div class="question-container">
    //       <h4 class="question">Knowing these attitudes, what is your approach towards these communities?
    //       </h4>
    //       <p>EORE is necessary, but we need to tailor our communications and activities with these attitudes in mind. For instance, we have a poster that explains how we have no visible signs of war, yet we still have the most contaminated land in all of Europe.
    //       </p>
    //     </div>
    //     <div class="question-container">
    //       <h4 class="question">So people are growing more complacent to the risks as the dangers get forgotten or overlooked?
    //       </h4>
    //       <p>Bosnia's biggest challenge is that the number of mines still buried in the ground – around 75,000 – is still larger than the number of found and destroyed mines during the last 25 years. The demining process has been slowing down, especially in 2020, as the COVID-19 outbreak lifted focus from landmines.
    //       </p>
    //     </div>
    //     <div class="question-container">
    //       <h4 class="question">Are there also activities people take for granted that can't be safely done in some parts of BiH?
    //       </h4>
    //       <p>In a modern world, people can freely explore the woods, visit rivers, hike, or cultivate a farm. Unfortunately, men, women, and children here simply can't enjoy the countryside without fear of landmines.
    //       </p>
    //     </div>
    //     <div class="question-container">
    //       <h4 class="question">What are some projects your organization has carried out?
    //       </h4>
    //       <p>We have implemented over 70 projects with the aid of donors from all around the world. We first implemented pilot projects together with municipalities on mine action and risk education which we then developed into a methodology.
    //       In addition, our organization has developed its own database on mine victims for the area of Brcko District and implemented projects providing economic support to the families of mine victims in the area of Northeast Bosnia.
    //       </p>
    //     </div>
    //     <div class="question-container">
    //       <img src="assets/images/articles/invisible-risks/class-2.png">
    //     </div>
    //     <div class="goodbye">
    //       <p>Together, we can help change that by creating greater mine risk awareness and spreading safety knowledge. Thank you, Svjetlana !
    //       </p>
    //     </div>

    //     `,
    //   id: "invisible-risks",
    //   picTop: "",
    //   picCard: "",
    // };

    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params["id"];
    //   this.publication = { title: "hoi", id: 2, picTop: "", picCard: "" };
    // });
  }
}
