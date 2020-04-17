import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceProgramComponent } from './conference-program.component';

describe('ConferenceProgramComponent', () => {
  let component: ConferenceProgramComponent;
  let fixture: ComponentFixture<ConferenceProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
