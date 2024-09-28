import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  public readonly APP_TITLE: string = 'Sannskar Gupta';
  public readonly PORTFOLIO_ALT_TEXT: string = 'Portfolio Image';

  // Tab name constants
  public readonly HOME_TAB: string = 'Home';
  public readonly EXPERIENCE_TAB: string = 'Experience';
  public readonly EDUCATION_TECHNICAL_SKILLS_TAB: string = "EducationAndTechnicalSkills";
  public readonly PROJECTS_TAB: string = "Projects";
  public readonly INTERESTS_LANGUAGES_TAB: string = "InterestAndLanguages";
  public readonly CONNECT_WITH_ME_TAB: string = "ConnectWithMe";

  // emailjs constants
  public readonly EMAILJS_INIT_KEY: string = 'wKP6VugKyi9QQCAiw';
  public readonly EMAILJS_SERVICE_KEY: string = "service_ten88fl";
  public readonly EMAILJS_TEMPLATE_KEY: string = "template_947owhn";
}
