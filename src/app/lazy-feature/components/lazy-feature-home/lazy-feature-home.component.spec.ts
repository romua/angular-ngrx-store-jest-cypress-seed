import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyFeatureHomeComponent } from './lazy-feature-home.component';
import { Store } from '@ngrx/store';
import { LazyFeatureService } from '../../services/lazy-feature/lazy-feature.service';
import { LoadData } from '../../store/actions/lazy-feature.actions';

describe('LazyFeatureHomeComponent', () => {
  let component: LazyFeatureHomeComponent;
  let fixture: ComponentFixture<LazyFeatureHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LazyFeatureHomeComponent],
      // imports: [StoreModule.forFeature('featureOne', reducer)],
      providers: [{
        provide: Store,
        useValue: {
          dispatch: jest.fn(),
          pipe: jest.fn(),
          select: jest.fn()
        },
      },
        LazyFeatureService]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyFeatureHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an the LoadUsers action in ngOnInit lifecycle', () => {
    const action = new LoadData(11);
    const store = TestBed.get(Store);
    const spy = jest.spyOn(store, 'dispatch');

    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith(action);
  });
});
