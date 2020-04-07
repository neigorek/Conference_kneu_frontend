import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TezisViewComponent } from './tezis-view.component';

describe('TezisViewComponent', () => {
  let component: TezisViewComponent;
  let fixture: ComponentFixture<TezisViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TezisViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TezisViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
