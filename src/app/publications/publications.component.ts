import { Component, OnInit } from "@angular/core";

import { HttpErrorResponse } from "@angular/common/http";
import { Publication, Root } from "./publications.model";
import { DataStorageService } from "../shared/data-storage.service";
import { PublicationsService } from "./publications.service";

@Component({
  selector: "app-publications",
  templateUrl: "./publications.component.html",
  styleUrls: ["./publications.component.css"],
})
export class PublicationsComponent implements OnInit {
  publications: Publication[];

  constructor(
    private dsService: DataStorageService,
    private workService: PublicationsService
  ) {}
  ngOnInit() {}
}

// @Component({
//   selector: "app-work",
//   templateUrl: "./work.component.html",
//   styleUrls: ["./work.component.css"],
// })
// export class WorkComponent implements OnInit {
//   works: Work[];

//   constructor(
//     private dsService: DataStorageService,
//     private workService: WorkService
//   ) {}

//   ngOnInit() {

//   }
// }
