import { Component, OnInit, ViewChild} from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-supporters',
  templateUrl: './supporters.component.html',
  styleUrls: ['./supporters.component.css']
})
export class SupportersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 @ViewChild(SwiperComponent) componentRef: SwiperComponent;
@ViewChild(SwiperDirective) directiveRef: SwiperDirective;




 public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 5,
     // loop: true,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: true,
    spaceBetween: 0,
    grabCursor: true,
    centeredSlides: false,
     slidesPerGroup: 5,


     breakpoints: {
        1024: {
          slidesPerView: 4,
           slidesPerGroup: 4,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        640: {
          slidesPerView: 2,
           slidesPerGroup: 2,
        },
        576: {
          slidesPerView: 2,
           slidesPerGroup: 2,
        },

        480: {
          slidesPerView: 1,
           slidesPerGroup: 1,

         
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
