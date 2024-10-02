import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IntroComponent } from "./intro/intro.component";
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from "./projects/projects.component";
import { EducationTechnicalSkillsComponent } from "./education-technical-skills/education-technical-skills.component";
import { InterestsLanguagesComponent } from "./interests-languages/interests-languages.component";
import { ConnectWithMeComponent } from "./connect-with-me/connect-with-me.component";
import { TitleComponent } from "./title/title.component";
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { ConstantsService } from './constants/constants.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IntroComponent, ProjectsComponent, ExperienceComponent, EducationTechnicalSkillsComponent, InterestsLanguagesComponent, ConnectWithMeComponent, TitleComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ConstantsService]
})
export class AppComponent {

  @ViewChild('Home') homeTab!: ElementRef<HTMLElement>;

  title = '';
  homeTabActive = false;
  experienceTabActive = false;
  educationTechnicalSkillsTabActive = false;
  projectsTabActive = false;
  interestLanguagesTabActive = false;
  connectWithMeTabActive = false;
  lastScrollTop = 0;
  browserRefresh!: boolean;
  showNavMenu: boolean = true;

  constructor(private router: Router, private _constants: ConstantsService) {
    this.title = this._constants.APP_TITLE;
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe(event => {
        if (
          event.id === 1 &&
          event.url === event.urlAfterRedirects
        ) {
          this.scrollToTab(this.homeTab.nativeElement);
        }
      })
  }

  onScroll(source: HTMLElement) {
    this.activeTabCheck(source);
  }

  scrollToTab(tab: HTMLElement) {
    if (window.innerWidth < 600) {
      this.showNavMenu = false;
    }
    this.activeTabCheck(tab);
    tab.scrollIntoView();
  }

  activeTabCheck(tab: HTMLElement) {
    switch (tab.id) {
      case this._constants.HOME_TAB: {
        this.homeTabActive = true;
        this.experienceTabActive = false;
        this.educationTechnicalSkillsTabActive = false;
        this.projectsTabActive = false;
        this.interestLanguagesTabActive = false;
        this.connectWithMeTabActive = false;
        break;
      }
      case this._constants.EXPERIENCE_TAB: {
        this.homeTabActive = false;
        this.experienceTabActive = true;
        this.educationTechnicalSkillsTabActive = false;
        this.projectsTabActive = false;
        this.interestLanguagesTabActive = false;
        this.connectWithMeTabActive = false;
        break;
      }
      case this._constants.EDUCATION_TECHNICAL_SKILLS_TAB: {
        this.homeTabActive = false;
        this.experienceTabActive = false;
        this.educationTechnicalSkillsTabActive = true;
        this.projectsTabActive = false;
        this.interestLanguagesTabActive = false;
        this.connectWithMeTabActive = false;
        break;
      }
      case this._constants.PROJECTS_TAB: {
        this.homeTabActive = false;
        this.experienceTabActive = false;
        this.educationTechnicalSkillsTabActive = false;
        this.projectsTabActive = true;
        this.interestLanguagesTabActive = false;
        this.connectWithMeTabActive = false;
        break;
      }
      case this._constants.INTERESTS_LANGUAGES_TAB: {
        this.homeTabActive = false;
        this.experienceTabActive = false;
        this.educationTechnicalSkillsTabActive = false;
        this.projectsTabActive = false;
        this.interestLanguagesTabActive = true;
        this.connectWithMeTabActive = false;
        break;
      }
      case this._constants.CONNECT_WITH_ME_TAB: {
        this.homeTabActive = false;
        this.experienceTabActive = false;
        this.educationTechnicalSkillsTabActive = false;
        this.projectsTabActive = false;
        this.interestLanguagesTabActive = false;
        this.connectWithMeTabActive = true;
        break;
      }
    }
  }
}
