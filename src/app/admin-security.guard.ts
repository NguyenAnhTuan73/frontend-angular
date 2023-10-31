import { CanActivateFn } from '@angular/router';

export const adminSecurityGuard: CanActivateFn = (route, state) => {
  return true;
};
