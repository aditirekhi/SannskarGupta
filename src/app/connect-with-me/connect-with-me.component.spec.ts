import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectWithMeComponent } from './connect-with-me.component';

describe('ConnectWithMeComponent', () => {
  let component: ConnectWithMeComponent;
  let fixture: ComponentFixture<ConnectWithMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectWithMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectWithMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
