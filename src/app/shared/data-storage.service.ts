import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap, take, exhaustMap } from "rxjs/operators";
import { environment } from "src/environments/environment";

import { Work } from "../work/work.model";
import { data } from "../work/work-data/work-export.js";
import { Root, Team, Advisors } from "../network/network.model";

import { WorkService } from "../work/work.service";

@Injectable({
  providedIn: "root",
})
export class DataStorageService {
  constructor(protected http: HttpClient, private workService: WorkService) {}

  // getTeam(): Observable<Team[]> {
  //     return this.http.get<Team[]>(environment.apiUrlTeam);

  // }

  //  getAdvisors(): Observable<Advisors[]> {
  //     return this.http.get<Advisors[]>(environment.apiUrlAdvisors);

  // }

  // getWorks(): Observable<Work[]> {
  //     return this.http.get<Work[]>(environment.apiUrlWork);
  // }

  getWorks() {

    const iets = data.map((work) => {
      return {
        ...work,
        picture: work.pictures ? work.pictures : [],
      };
    });

    this.workService.setWorks(iets);
    return iets;

  }
}
