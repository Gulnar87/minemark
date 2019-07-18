import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
 import { Subscription } from 'rxjs';
import { Team } from '../network.model';
import { NetworkService } from '../../network/network.service';

@Component({
  selector: 'app-team-home',
  templateUrl: './team-home.component.html',
  styleUrls: ['./team-home.component.css']
})
export class TeamHomeComponent implements OnInit {

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

@ViewChild(SwiperComponent) componentRef?: SwiperComponent;
@ViewChild(SwiperDirective) directiveRef?: SwiperDirective;




public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 3,
     // loop: true,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: true,
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: false,

     breakpoints: {

        1500: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 1,
         
        }
      }

  };


  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination', 
    clickable: true,
    hideOnClick: false,

     
  };

    private navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        
      }; 

}
