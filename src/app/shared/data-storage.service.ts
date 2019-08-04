import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Work } from '../work/work.model';

import { Root, Team, Advisors } from '../network/network.model';

import { WorkService } from '../work/work.service';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {


  constructor(protected http: HttpClient, private workService: WorkService) { }

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
    return this.http
      .get<Work[]>(
        environment.apiUrlWork
      )
      .pipe(
        map(works => {
          return works.map(work => {

            return {
              ...work,
              picture: work.pictures ? work.pictures : []
            };
          });
        }),
        tap(works => {

             works.sort((a: Work, b: Work) => b.id - a.id);

          this.workService.setWorks(works);
        })
      );
  }



    // getWork(id: string): Observable<Work[]> {
    //     return this.http.get<Work[]>(`${environment.apiUrlWork}/${id}`);

    // }
}
