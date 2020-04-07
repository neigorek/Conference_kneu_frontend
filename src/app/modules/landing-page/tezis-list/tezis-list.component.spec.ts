import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TezisListComponent } from './tezis-list.component';

describe('TezisListComponent', () => {
  let component: TezisListComponent;
  let fixture: ComponentFixture<TezisListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TezisListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TezisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
