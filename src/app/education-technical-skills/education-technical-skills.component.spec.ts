import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationTechnicalSkillsComponent } from './education-technical-skills.component';

describe('EducationTechnicalSkillsComponent', () => {
  let component: EducationTechnicalSkillsComponent;
  let fixture: ComponentFixture<EducationTechnicalSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationTechnicalSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationTechnicalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
