import { TestBed } from '@angular/core/testing';

import { LazyFeatureService } from './lazy-feature.service';
import { HttpClientModule } from '@angular/common/http';

describe('FeatureOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientModule]}));

  it('should be created', () => {
    const service: LazyFeatureService = TestBed.get(LazyFeatureService);
    expect(service).toBeTruthy();
  });
});
