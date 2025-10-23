import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../../servicios/AuthService/auth-service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const servicio: AuthService = inject(AuthService);
  const router = inject(Router);

  return servicio.isLogged() || router.createUrlTree(["/users"]);
};
