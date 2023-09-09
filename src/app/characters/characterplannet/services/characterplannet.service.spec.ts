import { TestBed } from '@angular/core/testing';

import { CharacterplannetService } from './characterplannet.service';

describe('CharacterplannetService', () => {
  let service: CharacterplannetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterplannetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
