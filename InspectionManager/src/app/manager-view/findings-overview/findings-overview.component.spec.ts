import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindingsOverviewComponent } from './findings-overview.component';

describe('FindingsOverviewComponent', () => {
  let component: FindingsOverviewComponent;
  let fixture: ComponentFixture<FindingsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindingsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindingsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
