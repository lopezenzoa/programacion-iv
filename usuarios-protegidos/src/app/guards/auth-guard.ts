import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { AuthService } from '../services/AuthService/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  // replaceUrl: true --> Hace que la URL se limpie
  return new RedirectCommand(router.parseUrl("/login"), { replaceUrl: true })
};
