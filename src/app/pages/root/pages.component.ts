import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  // Swipper
  mainSwiper: SwiperConfigInterface = {
    observer: true,
    slidesPerView: 1,
    autoHeight: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    zoom: true,
    preloadImages: false,
    lazy: {
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: true,
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader',
    }
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate([], {
      queryParams: { lang: 'en' },
      queryParamsHandling: 'preserve'
    });
  }

}
