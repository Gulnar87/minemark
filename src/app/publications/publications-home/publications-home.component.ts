import { Component, OnInit } from "@angular/core";

import { Publication, Root } from "./publications.model";
import { DataStorageService } from "../../shared/data-storage.service";
import { PublicationsService } from "./publications.service";

@Component({
  selector: "app-publications",
  templateUrl: "./publications.component.html",
  styleUrls: ["./publications.component.css"],
})
export class PublicationsHomeComponent implements OnInit {
  publications: Publication[];

  constructor(
    private dsService: DataStorageService,
    private workService: PublicationsService
  ) {}
  ngOnInit() {}
}
