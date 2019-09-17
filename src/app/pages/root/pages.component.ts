import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
// import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import smoothscroll from 'smoothscroll-polyfill';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  // Swipper
  /*
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
  };*/
  @ViewChild('navbar_desktop', {static: false}) navbar: ElementRef;

  constructor(private router: Router, private snackbar: MatSnackBar) {
    smoothscroll.polyfill();
  }

  ngOnInit() {
    this.router.navigate([], {
      queryParams: { hl: 'en' },
      queryParamsHandling: 'merge'
    });
    this.openSnackBar();
  }

  openSnackBar(): void {
    this.snackbar.open('This site uses cookies to improve user experience.', 'OK', {
      duration: 15000
    });
  }

  @HostListener('document:scroll', [])
    onScroll(): void {
    }

}
