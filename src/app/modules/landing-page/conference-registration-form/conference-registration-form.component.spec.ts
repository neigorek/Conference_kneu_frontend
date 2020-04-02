import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceRegistrationFormComponent } from './conference-registration-form.component';

describe('ConferenceRegistrationFormComponent', () => {
  let component: ConferenceRegistrationFormComponent;
  let fixture: ComponentFixture<ConferenceRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
