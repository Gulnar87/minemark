import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Publication } from "./publications.model";

@Injectable({
  providedIn: "root",
})
export class PublicationsService {
  worksChanged = new Subject<Publication[]>();

  private works: Publication[] = [];

  constructor() {}

  getWorks() {
    return this.works.slice();
  }

  getWork(index: number) {
    return this.works[index];
  }

  setWorks(works: Publication[]) {
    this.works = works;
    this.worksChanged.next(this.works.slice());
  }
}
