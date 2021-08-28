import { TestBed } from '@angular/core/testing';

import { GitsearchServiceService } from './gitsearch-service.service';

describe('GitsearchServiceService', () => {
  let service: GitsearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitsearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
