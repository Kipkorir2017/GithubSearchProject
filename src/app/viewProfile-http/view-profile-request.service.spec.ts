import { TestBed } from '@angular/core/testing';

import { ViewProfileRequestService } from './view-profile-request.service';

describe('ViewProfileRequestService', () => {
  let service: ViewProfileRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewProfileRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
