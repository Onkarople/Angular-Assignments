import { TestBed } from '@angular/core/testing';

import { ArthematicService } from './arthematic.service';

describe('ArthematicService', () => {
  let service: ArthematicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArthematicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
