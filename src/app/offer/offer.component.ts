import { Component } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent {
  offerUrl: string = 'https://www.oriontools.pl/pl_PL/offer';

  offerLink(): void {
    const w = window.open(this.offerUrl, '_blank');
    if (w) {
      w.focus();
    }
  }
}
