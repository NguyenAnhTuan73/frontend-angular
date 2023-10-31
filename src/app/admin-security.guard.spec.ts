import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminSecurityGuard } from './admin-security.guard';

describe('adminSecurityGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminSecurityGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
