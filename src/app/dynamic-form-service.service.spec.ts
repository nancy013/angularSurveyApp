import { TestBed, inject } from '@angular/core/testing';

import { DynamicFormServiceService } from './dynamic-form-service.service';

describe('DynamicFormServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicFormServiceService]
    });
  });

  it('should be created', inject([DynamicFormServiceService], (service: DynamicFormServiceService) => {
    expect(service).toBeTruthy();
  }));
});
