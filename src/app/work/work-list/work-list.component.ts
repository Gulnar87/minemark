import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Work } from '../work.model';
import { WorkService } from '../../work/work.service';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit, OnDestroy {

 subscription: Subscription;
 public works: Work[];

  workEl: Work;
  faAngleDoubleRight = faAngleDoubleRight;



  constructor(private workService: WorkService) { }

  ngOnInit() {
  	 this.subscription = this.workService.worksChanged
  	.subscribe(
        (works: Work[]) => {
          this.works = works;
           // this.works.sort((a: Work, b: Work) => b.id - a.id);
             console.log('list1', this.works)
        }
      );
      
      this.works = this.workService.getWorks();
    
  }


   ngOnDestroy(){

   	 this.subscription.unsubscribe();

  }

}
