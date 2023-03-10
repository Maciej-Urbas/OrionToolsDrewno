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
  selector: 'app-wood',
  templateUrl: './wood.component.html',
  styleUrls: ['./wood.component.css'],
})
export class WoodComponent {
  constructor() {}

  WoodCaptions: Array<string> = [
    'COUNTER KNIFE SKORPION\n506X76X20 MM',
    'CHIPPER KNIFE SKORPION\n516X89X18 MM',
    'CHIPPER KNIFE JENZ\n210x120x12 MM 30*',
    'EWD KNIFE LEFT\n75X39X15,9/9 MM',
    'EWD RIGHT KNIFE\n75X39X15,9/9 MM',
    'CHIPPER KNIFE EWD\n289X115X12 MM',
    'CHIPPER KNIFE ESCHLBOCK\n124x62x8 MM',
    'CHIPPER KNIFE ESCHLBOCK\n230X140X18 MM 30/35*',
  ];

  woodSwiperConfigSmall1: SwiperOptions = {
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
      nextEl: '.wood-card-buttons_right1',
      prevEl: '.wood-card-buttons_left1',
    },
  };
  woodSwiperConfigSmall2: SwiperOptions = {
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
      nextEl: '.wood-card-buttons_right2',
      prevEl: '.wood-card-buttons_left2',
    },
  };

  woodSwiperConfigMedium: SwiperOptions = {
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

  woodSwiperConfigLarge: SwiperOptions = {
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

  woodUrl: string = 'https://www.oriontools.pl/pl_PL/offer';

  woodLink(): void {
    const w = window.open(this.woodUrl, '_blank');
    if (w) {
      w.focus();
    }
  }
}
