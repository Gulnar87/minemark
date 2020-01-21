import { Component, OnInit, Input  } from '@angular/core';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import { Work, Root } from '../../work.model';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent implements OnInit {

  constructor() { }

   @Input() work: Work;
   @Input() index: number;
   faAngleDoubleRight = faAngleDoubleRight;



  ngOnInit() {


  }

}
