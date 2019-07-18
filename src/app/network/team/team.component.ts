import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Team } from '../network.model';
import { NetworkService } from '../../network/network.service';



@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

 subscription: Subscription;
 public team: Team[];

  constructor(private networkService: NetworkService) { }

  ngOnInit() {

     this.subscription = this.networkService.teamChanged
    .subscribe(
        (team: Team[]) => {
          this.team = team;
  
        }
      );
      
      this.team = this.networkService.getTeam();

}
}



