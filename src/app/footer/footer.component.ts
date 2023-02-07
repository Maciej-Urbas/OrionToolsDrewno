import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor() {}

  footerForm = new FormGroup({
    email: new FormControl(''),
    message: new FormControl(''),
  });

  async onSubmit() {}
}
