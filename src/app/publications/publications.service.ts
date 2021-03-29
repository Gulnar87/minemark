import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Publication, Pictures } from "./publications.model";

@Injectable({
  providedIn: "root",
})
export class PublicationsService {
  publicationsChanged = new Subject<Publication[]>();

  private publications: Publication[] = [];

  private myPublications = [
    {
      title: "Invisible Risks: Living with Landmines in Bosnia ",
      body: `
      <p class="intro">
        More than a quarter of a century after the war, there are still
        deadly hidden dangers lurking in the fields of Bosnia and
        Herzegovina (BiH). What makes them even more dangerous is the fact
        they are being overlooked, especially in times of COVID-19.
      </p>
      <img
        class="article-image"
        src="assets/images/articles/invisible-risks/class.png"
      />
      <p class="questions-intro">
        We spoke to Svjetlana Pavlovic, President of "Posavina without
        Mines", an NGO based in BiH, about the challenges of mine action and
        why education is a scalable solution that offers immediate help to
        vulnerable communities.
      </p>
      <div class="question-container">
        <h4 class="question">
          It will take years to completely clear Bosnia and Herzegovina of
          land mines which makes explosive ordnance risk education (EORE)
          vital in the meantime. What is your view on this?
        </h4>
        <p>
          "It’s a necessary measure, yet it’s often complicated to implement
          and achieve positive results. The population living in
          mine-affected communities receive a lot of communication from EORE
          organizations with reluctance because they just want demining to
          be done. They are tired of repeatedly being informed that demining
          will not take place soon. That makes them less approachable for
          EORE. The reason for this behavior lies in the fact that the war
          ended so long ago, and so many people feel that EORE is no longer
          relevant." 
        </p>
      </div>
      <div class="question-container">
        <h4 class="question">
          Knowing these attitudes, what is your approach towards these
          communities?
        </h4>
        <p>
          EORE is necessary, but we need to tailor our communications and
          activities with these attitudes in mind. For instance, we have a
          poster that explains how we have no visible signs of war, yet we
          still have the most contaminated land in all of Europe.
        </p>
      </div>
      <div class="question-container">
        <h4 class="question">
          So people are growing more complacent to the risks as the dangers
          get forgotten or overlooked?
        </h4>
        <p>
          Bosnia's biggest challenge is that the number of mines still
          buried in the ground – around 75,000 – is still larger than the
          number of found and destroyed mines during the last 25 years. The
          demining process has been slowing down, especially in 2020, as the
          COVID-19 outbreak lifted focus from landmines.
        </p>
      </div>
      <div class="question-container">
        <h4 class="question">
          Are there also activities people take for granted that can't be
          safely done in some parts of BiH?
        </h4>
        <p>
          In a modern world, people can freely explore the woods, visit
          rivers, hike, or cultivate a farm. Unfortunately, men, women, and
          children here simply can't enjoy the countryside without fear of
          landmines.  
        </p>
      </div>
      <div class="question-container">
        <h4 class="question">
          What are some projects your organization has carried out?  
        </h4>
        <div class="image-row">
          <img src="assets/images/articles/invisible-risks/logo.png" />
        </div>
        <p>
          We have implemented over 70 projects with the aid of donors from
          all around the world. We first implemented pilot projects together
          with municipalities on mine action and risk education which we
          then developed into a methodology.   In addition, our organization
          has developed its own database on mine victims for the area
          of Brcko District and implemented projects providing economic
          support to the families of mine victims in the area of Northeast
          Bosnia.  
        </p>
      </div>
      <img
        class="article-image"
        src="assets/images/articles/invisible-risks/class-2.png"
      />
      <div class="goodbye">
        <p class="outro">
          Together, we can help change that by creating greater mine risk
          awareness and spreading safety knowledge.
          <br /><br />
          Thank you, Svjetlana !  
        </p>
      </div>

        `,
      id: "invisible-risks",
    },
    {
      title: "Not found",
      body: `<p>No article was found at this location...</p>
        `,
      id: "not-found",
    },
  ];

  constructor() {}

  getPublication(id: string): Publication {
    let test = {
      title: "Not found",
      body: `<p>No article was found at this location...</p>
        `,
      id: "not-found",
    };

    const len = this.myPublications.length;

    for (let item = 0; item < len; item++) {
      if (this.myPublications[item].id === id) {
        test = this.myPublications[item];
      }
    }

    return test;
    // return this.myPublications.map((item) => item.id === id);
  }
}
