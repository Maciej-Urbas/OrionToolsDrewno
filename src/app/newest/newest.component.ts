import { Component } from '@angular/core';

import SwiperCore, {
  Keyboard,
  Pagination,
  Navigation,
  Virtual,
  SwiperOptions,
  Autoplay,
} from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual, Autoplay]);

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css'],
})
export class NewestComponent {
  constructor() {}

  newestCaptions: Array<string> = [
    'CHIPPER KNIFE VEISTO\n86X30X10 MM',
    'SPECIAL SCREW KOMPTECH\nCRAMBO M20X70',
    'SHEAR BLADE LOURITEX\n410X120X50 MM',
    'COUNTER KNFE BAR LINDNER\nPOWERKOMET/KOMET 2800',
    'RCLAMPING PLATE LINDNER\nPOLARIS 344X223X72 MM R',
    'CLAMPING PLATE LINDNER\nPOLARIS 344X223X72 MM M',
    'SIEVE LINDNER POLARIS\n841/793X340X25 MM HEX50 MM',
    'KNIFE GETECHA\n1220X79X23 MM',
  ];

  newestSwiperConfigSmall1: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.newest-card-buttons_right1',
      prevEl: '.newest-card-buttons_left1',
    },
  };
  newestSwiperConfigSmall2: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.newest-card-buttons_right2',
      prevEl: '.newest-card-buttons_left2',
    },
  };

  newestSwiperConfigMedium: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: -60,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      clickable: true,
    },
    navigation: true,
  };

  newestSwiperConfigLarge: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: -90,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      clickable: true,
    },
    navigation: true,
  };

  newestUrl: string = 'https://www.oriontools.pl/pl_PL/offer';

  newestLink(): void {
    const w = window.open(this.newestUrl, '_blank');
    if (w) {
      w.focus();
    }
  }
}
