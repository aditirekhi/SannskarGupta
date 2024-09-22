import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsLanguagesComponent } from './interests-languages.component';

describe('InterestsLanguagesComponent', () => {
  let component: InterestsLanguagesComponent;
  let fixture: ComponentFixture<InterestsLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestsLanguagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestsLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
