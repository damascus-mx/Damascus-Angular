import { Component, OnInit, HostListener, ViewChild, ElementRef, OnDestroy, 
  LOCALE_ID, Inject, Renderer2 } from '@angular/core';
// import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import smoothscroll from 'smoothscroll-polyfill';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, OnDestroy {
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
  @ViewChild('header', {static: true}) header: ElementRef;
  disposer: Subject<void> = new Subject();

  constructor(private router: Router, private snackbar: MatSnackBar, @Inject(LOCALE_ID) private localeId: string,
              private route: ActivatedRoute, private render: Renderer2 ) {
    smoothscroll.polyfill();
  }

  ngOnInit() {
    this.openSnackBar();
  }

  ngOnDestroy(): void {
    this.disposer.next();
    this.disposer.complete();
  }

  openSnackBar(): void {
    this.snackbar.open('This site uses cookies to improve user experience.', 'OK', {
      duration: 7000
    });
  }

  @HostListener('document:scroll', [])
  onScroll(): void {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      this.render.addClass(this.header.nativeElement, 'navbar-alt');
    } else {
      this.render.removeClass(this.header.nativeElement, 'navbar-alt');
    }
  }

}
