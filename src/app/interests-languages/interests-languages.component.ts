import { Component } from '@angular/core';
import { SectionPageComponent } from "../section-page/section-page.component";
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-interests-languages',
  standalone: true,
  imports: [SectionPageComponent, TitleComponent],
  templateUrl: './interests-languages.component.html',
  styleUrl: './interests-languages.component.css'
})
export class InterestsLanguagesComponent {

}
