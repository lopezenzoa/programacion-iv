import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../servicios/auth-service/auth-service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const servicio: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  
  return servicio.isLogged() || router.createUrlTree(["/login"]);
};
