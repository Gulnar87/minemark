import { Component, OnInit, OnDestroy } from '@angular/core';
import { Work } from '../work/work.model';

import { Subscription } from 'rxjs';

import { WorkService } from './../work/work.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

 subscription: Subscription;


 public works: Work[];

  constructor(private workService: WorkService) { }


  ngOnInit() {
     this.subscription = this.workService.worksChanged
    .subscribe(
        (works: Work[]) => {
          this.works = works.slice(0, 3);

        }
      );

      this.works = this.workService.getWorks().slice(0, 3);

  }


   ngOnDestroy(){

      this.subscription.unsubscribe();

  }

}
