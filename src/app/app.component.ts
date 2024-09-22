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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IntroComponent, ProjectsComponent, ExperienceComponent, EducationTechnicalSkillsComponent, InterestsLanguagesComponent, ConnectWithMeComponent, TitleComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild('Home') homeTab!: ElementRef<HTMLElement>;

  title = 'SanskaarPortfolio';
  homeTabActive = false;
  experienceTabActive = false;
  educationTechnicalSkillsTabActive = false;
  projectsTabActive = false;
  interestLanguagesTabActive = false;
  connectWithMeTabActive = false;
  lastScrollTop = 0;
  browserRefresh!: boolean;

  constructor(private router: Router) { }

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
    this.activeTabCheck(tab);
    tab.scrollIntoView();
  }

  activeTabCheck(tab: HTMLElement) {
    switch (tab.id) {
      case 'Home': {
        this.homeTabActive = true;
        this.experienceTabActive = false;
        this.educationTechnicalSkillsTabActive = false;
        this.projectsTabActive = false;
        this.interestLanguagesTabActive = false;
        this.connectWithMeTabActive = false;
        break;
      }
      case 'Experience': {
        this.homeTabActive = false;
        this.experienceTabActive = true;
        this.educationTechnicalSkillsTabActive = false;
        this.projectsTabActive = false;
        this.interestLanguagesTabActive = false;
        this.connectWithMeTabActive = false;
        break;
      }
      case 'EducationAndTechnicalSkills': {
        this.homeTabActive = false;
        this.experienceTabActive = false;
        this.educationTechnicalSkillsTabActive = true;
        this.projectsTabActive = false;
        this.interestLanguagesTabActive = false;
        this.connectWithMeTabActive = false;
        break;
      }
      case 'Projects': {
        this.homeTabActive = false;
        this.experienceTabActive = false;
        this.educationTechnicalSkillsTabActive = false;
        this.projectsTabActive = true;
        this.interestLanguagesTabActive = false;
        this.connectWithMeTabActive = false;
        break;
      }
      case 'InterestAndLanguages': {
        this.homeTabActive = false;
        this.experienceTabActive = false;
        this.educationTechnicalSkillsTabActive = false;
        this.projectsTabActive = false;
        this.interestLanguagesTabActive = true;
        this.connectWithMeTabActive = false;
        break;
      }
      case 'ConnectWithMe': {
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
