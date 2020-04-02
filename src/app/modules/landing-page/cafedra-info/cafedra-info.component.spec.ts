import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafedraInfoComponent } from './cafedra-info.component';

describe('CafedraInfoComponent', () => {
  let component: CafedraInfoComponent;
  let fixture: ComponentFixture<CafedraInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafedraInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafedraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
