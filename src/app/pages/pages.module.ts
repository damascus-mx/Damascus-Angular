import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './root/pages.component';
import { MaterialModule } from '../common/modules/material.module';
/*import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';*/
import { ProductsComponent } from './shared/products/products.component';
import { FragmentPolyfillModule } from '../common/modules/fragment-polyfill.module';
import { ServicesComponent } from './shared/services/services.component';
import { FooterComponent } from './shared/footer/footer.component';

/*const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};*/

@NgModule({
  declarations: [PagesComponent, ProductsComponent, ServicesComponent, FooterComponent],
  providers: [
    /*{
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }*/
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    // SwiperModule,
    FragmentPolyfillModule.forRoot({
      smooth: true
  }),
  ]
})
export class PagesModule { }
