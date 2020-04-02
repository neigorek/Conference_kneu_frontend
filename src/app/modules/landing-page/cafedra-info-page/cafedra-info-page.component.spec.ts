import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafedraInfoPageComponent } from './cafedra-info-page.component';

describe('CafedraInfoPageComponent', () => {
  let component: CafedraInfoPageComponent;
  let fixture: ComponentFixture<CafedraInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafedraInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafedraInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
