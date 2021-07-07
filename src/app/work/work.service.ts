import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Work } from "../work/work.model";
import { data } from "./work-data/work-export.js";

@Injectable({
  providedIn: "root",
})
export class WorkService {
  worksChanged = new Subject<Work[]>();
  dat = data;
  private works: Work[] = [];

  constructor() {}

  getWorks() {
    return this.works.slice();
  }

  getWork(index: number) {
    return this.works[index];
  }

  setWorks(works: Work[]) {
    this.works = this.dat;
    console.log(works);
    console.log(this.dat);
    this.worksChanged.next(this.works.slice());
  }
}
