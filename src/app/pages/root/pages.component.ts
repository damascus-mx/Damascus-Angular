import { Component, OnInit, HostListener, ViewChild, ElementRef, OnDestroy, LOCALE_ID, Inject } from '@angular/core';
// import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Router, NavigationStart, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import smoothscroll from 'smoothscroll-polyfill';
import { Subject } from 'rxjs';
import { takeUntil, filter, flatMap, map } from 'rxjs/operators';

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
  disposer: Subject<void> = new Subject();

  constructor(private router: Router, private snackbar: MatSnackBar, @Inject(LOCALE_ID) private localeId: string,
              private route: ActivatedRoute) {
    smoothscroll.polyfill();

    this.router.events
    .pipe(takeUntil(this.disposer))
    .pipe(filter(event => event instanceof NavigationStart))
    .pipe(flatMap((event: NavigationStart) => this.route.queryParams.pipe(map((params: Params) =>
                    params.hl ? { locale: params.hl, router: event.url } : { router: event.url }))
                  )
    )
    .subscribe((event: any) => {
      console.log(event);
    });
  }

  ngOnInit() {
    this.router.navigate([], {
      queryParams: { hl: this.localeId },
      queryParamsHandling: 'merge'
    });
    this.openSnackBar();
  }

  ngOnDestroy(): void {
    this.disposer.next();
    this.disposer.complete();
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
