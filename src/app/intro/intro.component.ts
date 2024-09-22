import { Component } from '@angular/core';
import { SectionPageComponent } from "../section-page/section-page.component";

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [SectionPageComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

}
