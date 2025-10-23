import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../servicios/AuthService/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  servicio: AuthService = inject(AuthService);
  router = inject(Router);

  logout(): void {
    this.servicio.isLogged.set(false);
    this.router.navigate(["/"]);
  }

  login(): void {
    this.servicio.isLogged.set(true);
  }
}
