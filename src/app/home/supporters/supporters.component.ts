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




 public swiperconfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerGroup: 1,
     // loop: true,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    pagination: true,
    spaceBetween: 0,
    grabCursor: true,
    centeredSlides: false,


    breakpoints: {
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      480: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      0: {
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
    nextEl: '.swiper-button-nextt',
    prevEl: '.swiper-button-prevv',
  };
}
