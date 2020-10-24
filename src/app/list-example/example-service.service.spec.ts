import { TestBed } from '@angular/core/testing';

import { ExampleServiceService } from './example-service.service';

describe('ExampleServiceService', () => {
  let service: ExampleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
