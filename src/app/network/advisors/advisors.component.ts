import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Advisors } from '../network.model';
import { NetworkService } from '../../network/network.service';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.css']
})
export class AdvisorsComponent implements OnInit {

 subscription: Subscription;
 public advisors: Advisors[];
 faExternalLinkAlt = faExternalLinkAlt;

  constructor(private networkService: NetworkService) { }

  ngOnInit() {
  	this.subscription = this.networkService.teamChanged
    .subscribe(
        (advisors: Advisors[]) => {
          this.advisors = advisors;
  
        }
      );
      
      this.advisors = this.networkService.getAdvisors();
  }

}
