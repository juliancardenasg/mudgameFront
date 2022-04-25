import { TestBed } from '@angular/core/testing';

import { DecorativeObjectService } from './decorative-object.service';

describe('DecorativeObjectService', () => {
  let service: DecorativeObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecorativeObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
