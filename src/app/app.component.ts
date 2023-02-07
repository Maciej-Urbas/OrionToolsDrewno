import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'OrionToolsDrewno';

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    let navlogoHeightValue;

    const navlogoHeight = document.querySelector('.baner');
    navlogoHeightValue = navlogoHeight?.clientHeight;

    if (navlogoHeightValue != undefined) {
      if (window.scrollY >= navlogoHeightValue - 10) {
        document
          .querySelector('.scroll-to-top_button')
          ?.classList.add('show-scroll-to-top_button');
      } else {
        document
          .querySelector('.scroll-to-top_button')
          ?.classList.remove('show-scroll-to-top_button');
      }
    }
  }

  scrollTop() {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 100);
  }

  scrollToAbout() {
    let scrollHeight: number = 0;
    let heightHelper: any = 0;

    heightHelper = document.querySelector('.baner')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = heightHelper;
    }

    setTimeout(() => {
      this.isExpanded = !this.isExpanded;

      window.scroll({
        top: scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 800);
  }
  scrollToWood() {
    let scrollHeight: number = 0;
    let heightHelper: any = 0;

    heightHelper = document.querySelector('.baner')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = heightHelper;
    }
    heightHelper = document.querySelector('.about')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = scrollHeight + heightHelper;
    }
    heightHelper = document.querySelector('.wood-img')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = scrollHeight + heightHelper;
    }

    scrollHeight = scrollHeight + window.innerWidth * 0.07;

    setTimeout(() => {
      this.isExpanded = !this.isExpanded;

      window.scroll({
        top: scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 800);
  }
  scrollToOffer() {
    let scrollHeight: number = 0;
    let heightHelper: any = 0;

    heightHelper = document.querySelector('.baner')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = heightHelper;
    }
    heightHelper = document.querySelector('.about')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = scrollHeight + heightHelper;
    }
    heightHelper = document.querySelector('.wood')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = scrollHeight + heightHelper;
    }

    scrollHeight = scrollHeight + window.innerWidth * 0.07;

    setTimeout(() => {
      this.isExpanded = !this.isExpanded;

      window.scroll({
        top: scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 800);
  }
  scrollToNewest() {
    let scrollHeight: number = 0;
    let heightHelper: any = 0;

    heightHelper = document.querySelector('.baner')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = heightHelper;
    }
    heightHelper = document.querySelector('.about')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = scrollHeight + heightHelper;
    }
    heightHelper = document.querySelector('.wood')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = scrollHeight + heightHelper;
    }
    heightHelper = document.querySelector('.offer')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = scrollHeight + heightHelper;
    }

    scrollHeight = scrollHeight + window.innerWidth * 0.07;

    setTimeout(() => {
      this.isExpanded = !this.isExpanded;

      window.scroll({
        top: scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 800);
  }
  scrollToFooter() {
    let scrollHeight: number = 0;
    let heightHelper: any = 0;

    heightHelper = document.querySelector('.baner')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = heightHelper;
    }
    heightHelper = document.querySelector('.about')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = scrollHeight + heightHelper;
    }
    heightHelper = document.querySelector('.wood')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = scrollHeight + heightHelper;
    }
    heightHelper = document.querySelector('.offer')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = scrollHeight + heightHelper;
    }
    heightHelper = document.querySelector('.newest')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = scrollHeight + heightHelper;
    }

    scrollHeight = scrollHeight + window.innerWidth * 0.07;

    if (window.innerWidth >= 777) {
      setTimeout(() => {
        this.isExpanded = !this.isExpanded;

        window.scroll({
          top: scrollHeight,
          left: 0,
          behavior: 'smooth',
        });
      }, 800);
    } else {
      heightHelper = document.querySelector('.footer-contact')?.clientHeight;
      if (heightHelper != undefined) {
        scrollHeight = scrollHeight + heightHelper;
      }

      setTimeout(() => {
        this.isExpanded = !this.isExpanded;

        window.scroll({
          top: scrollHeight,
          left: 0,
          behavior: 'smooth',
        });
      }, 800);
    }
  }
}
