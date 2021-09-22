import { Component } from "@angular/core";

import { HttpErrorResponse } from "@angular/common/http";
import { Work, Root } from "./work/work.model";
import { DataStorageService } from "./shared/data-storage.service";
import { WorkService } from "./work/work.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "minemark";
  works: Work[];

  constructor(
    private dsService: DataStorageService,
    private workService: WorkService
  ) {}

  ngOnInit() {
    this.dsService.getWorks();
  }
}
