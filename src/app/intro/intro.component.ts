import { Component } from '@angular/core';
import { SectionPageComponent } from "../section-page/section-page.component";
import { ConstantsService } from '../constants/constants.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [SectionPageComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
  providers: [ConstantsService]
})

export class IntroComponent {
  portfolio_alt_text = '';

  constructor(private _constants: ConstantsService) {
    this.portfolio_alt_text = this._constants.PORTFOLIO_ALT_TEXT;
  }
}
