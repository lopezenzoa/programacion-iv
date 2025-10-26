import { Component, inject } from '@angular/core';
import { AuthService } from '../../servicios/auth-service/auth-service';

@Component({
  selector: 'app-login-component',
  imports: [],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  servicio: AuthService = inject(AuthService);
}
