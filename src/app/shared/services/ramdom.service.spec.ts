import { TestBed } from '@angular/core/testing';

import { RamdomService } from './ramdom.service';

describe('RamdomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RamdomService = TestBed.get(RamdomService);
    expect(service).toBeTruthy();
  });
});
