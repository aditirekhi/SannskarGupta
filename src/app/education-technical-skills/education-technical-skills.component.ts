import { Component } from '@angular/core';
import { SectionPageComponent } from "../section-page/section-page.component";
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-education-technical-skills',
  standalone: true,
  imports: [SectionPageComponent, TitleComponent],
  templateUrl: './education-technical-skills.component.html',
  styleUrl: './education-technical-skills.component.css'
})
export class EducationTechnicalSkillsComponent {

}
