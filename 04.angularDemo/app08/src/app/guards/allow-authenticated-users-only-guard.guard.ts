import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthStore } from '../services/auth.store';

export const allowAuthenticatedUsersOnlyGuardGuard: CanActivateFn = (route, state) => {  
  return inject(AuthStore).isAuthenticated();    
};
