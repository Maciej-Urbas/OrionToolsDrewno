import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent {
  @HostListener('window:resize', ['$event'])
  onResize() {
    const offerTitle = document.querySelectorAll('.offer-item-title_title');
    if (window.innerWidth > 776) {
      if (offerTitle != null) {
        offerTitle[0].innerHTML =
          '<span class="color_primary">KNIVES AND SPARE PARTS</span> FOR<br>WOOD INDUSTRY';

        offerTitle[1].innerHTML =
          '<span class="color_primary">KNIVES AND SPARE PARTS</span> FOR<br>METAL INDUSTRY';

        offerTitle[2].innerHTML =
          '<span class="color_primary">KNIVES AND SPARE PARTS</span> FOR <br>RECYCLING';

        offerTitle[3].innerHTML =
          '<span class="color_primary">REGENERATION OF</span> TWO AND FOUR <br>SHAFT SHREDDERS';

        offerTitle[3]?.classList.remove('regenMarginSmall');
      }
    } else {
      if (offerTitle != null) {
        offerTitle[0].innerHTML =
          '<span class="color_primary">KNIVES AND SPARE PARTS</span> FOR WOOD INDUSTRY';

        offerTitle[1].innerHTML =
          '<span class="color_primary">KNIVES AND SPARE PARTS</span> FOR METAL INDUSTRY';

        offerTitle[2].innerHTML =
          '<span class="color_primary">KNIVES AND SPARE PARTS</span> FOR RECYCLING';

        offerTitle[3].innerHTML =
          '<span class="color_primary">REGENERATION OF</span> TWO AND FOUR SHAFT SHREDDERS';

        offerTitle[3]?.classList.add('regenMarginSmall');
      }
    }
  }

  offerUrl: string = 'https://www.oriontools.pl/pl_PL/offer';

  offerLink(): void {
    const w = window.open(this.offerUrl, '_blank');
    if (w) {
      w.focus();
    }
  }

  ngOnInit(): void {
    const offerTitle = document.querySelectorAll('.offer-item-title_title');
    if (window.innerWidth > 776) {
      if (offerTitle != null) {
        offerTitle[0].innerHTML =
          '<span class="color_primary">KNIVES AND SPARE PARTS</span> FOR<br>WOOD INDUSTRY';

        offerTitle[1].innerHTML =
          '<span class="color_primary">KNIVES AND SPARE PARTS</span> FOR<br>METAL INDUSTRY';

        offerTitle[2].innerHTML =
          '<span class="color_primary">KNIVES AND SPARE PARTS</span> FOR <br>RECYCLING';

        offerTitle[3].innerHTML =
          '<span class="color_primary">REGENERATION OF</span> TWO AND FOUR <br>SHAFT SHREDDERS';

        offerTitle[3]?.classList.remove('regenMarginSmall');
      }
    } else {
      if (offerTitle != null) {
        offerTitle[0].innerHTML =
          '<span class="color_primary">KNIVES AND SPARE PARTS</span> FOR WOOD INDUSTRY';

        offerTitle[1].innerHTML =
          '<span class="color_primary">KNIVES AND SPARE PARTS</span> FOR METAL INDUSTRY';

        offerTitle[2].innerHTML =
          '<span class="color_primary">KNIVES AND SPARE PARTS</span> FOR RECYCLING';

        offerTitle[3].innerHTML =
          '<span class="color_primary">REGENERATION OF</span> TWO AND FOUR SHAFT SHREDDERS';

        offerTitle[3]?.classList.add('regenMarginSmall');
      }
    }
  }
}
