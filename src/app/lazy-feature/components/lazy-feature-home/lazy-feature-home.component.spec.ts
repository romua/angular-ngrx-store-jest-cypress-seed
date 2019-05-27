import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureOneHomeComponent } from './feature-one-home.component';

describe('FeatureOneHomeComponent', () => {
  let component: FeatureOneHomeComponent;
  let fixture: ComponentFixture<FeatureOneHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureOneHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureOneHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
