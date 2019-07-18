import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { WorkService } from '../../work/work.service';
import { Work, Pictures  } from '../work.model';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../../shared/data-storage.service';




@Component({
  selector: 'app-work-detailed',
  templateUrl: './work-detailed.component.html',
  styleUrls: ['./work-detailed.component.css']
})
export class WorkDetailedComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router, private workService: WorkService, private dsService: DataStorageService) { }

 
   // pictures: Pictures [] = [];
   work: Work;
   id: number;
   works: Work[];
   subscription: Subscription;


  ngOnInit(){

    // const project_id = this.route.snapshot.paramMap.get('id');

    // this.dsService.getWorks()
    //       .subscribe(
    //           (response: Work[]) => {
    //               this.works = response;

    //               this.work = this.works.find(p => p.id.toString() === project_id.toString());


    //               console.log(this.works, project_id);
             
    //           },
    //           // (error: HttpErrorResponse) => console.log(error)
    //       );



        this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.work = this.workService.getWork(this.id);
        }
      );
  }








}
