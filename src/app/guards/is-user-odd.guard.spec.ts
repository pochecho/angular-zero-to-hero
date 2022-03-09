import { TestBed } from '@angular/core/testing';

import { IsUserOddGuard } from './is-user-odd.guard';

describe('IsUserOddGuard', () => {
  let guard: IsUserOddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsUserOddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
