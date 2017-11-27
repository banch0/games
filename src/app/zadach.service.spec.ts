import { TestBed, inject } from '@angular/core/testing';

import { ZadachService } from './zadach.service';

describe('ZadachService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZadachService]
    });
  });

  it('should be created', inject([ZadachService], (service: ZadachService) => {
    expect(service).toBeTruthy();
  }));
});
