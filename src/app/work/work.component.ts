import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Work, Root } from './work.model';
import { DataStorageService } from '../shared/data-storage.service';
import { WorkService } from '../work/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

 works: Work[];

  constructor(private dsService: DataStorageService,
    private workService: WorkService) { }

  ngOnInit() {
   

          // this.dsService.getWorks()
          //   .subscribe(
          //       // (response: Work[]) => {
          //       //     this.works = response;
          //       //     // this.works.sort((a: Work, b: Work) => b.id - a.id);

          //       //     this.workService.setWorks(this.works);


          //       //     // console.log( 'projects', response)  
          //       //     console.log('works', this.works)              
          //       // },
          //       // (error: HttpErrorResponse) => console.log(error)
          //   );




  }

}
