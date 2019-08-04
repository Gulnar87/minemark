import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Work } from '../work/work.model';


@Injectable({
  providedIn: 'root'
})
export class WorkService {

    worksChanged = new Subject<Work[]>();
   
	private	works : Work[] = [

  ];

	constructor() {}


  getWorks(){
  	return this.works.slice();
  }

  getWork(index: number){
    return this.works[index];
  }

  setWorks(works: Work[]){
    this.works = works;
    this.worksChanged.next(this.works.slice());

  }
}
