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

 @ViewChild(SwiperComponent) componentRef?: SwiperComponent;
@ViewChild(SwiperDirective) directiveRef?: SwiperDirective;


 public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 5,
     // loop: true,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: true,
    spaceBetween: 0,
    grabCursor: true,
    centeredSlides: false,

     breakpoints: {
        1024: {
          slidesPerView: 4,
          // spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          // spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          // spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
         
        },

        480: {
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
