/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SampleService } from './Sample.service';

describe('Service: Sample', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleService]
    });
  });

  it('should ...', inject([SampleService], (service: SampleService) => {
    expect(service).toBeTruthy();
  }));
});
