import { Component, inject, signal, WritableSignal } from '@angular/core';
import { AuthService } from '../../services/AuthService/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  authService = inject(AuthService);
  username: WritableSignal<string> = signal<string>("");
  password: WritableSignal<string> = signal<string>("");
  router = inject(Router);

  setUsername(event: Event): void {
    const inputElement: HTMLInputElement = event.target as HTMLInputElement;
    this.username.set(inputElement.value);
  }

  setPassword(event: Event): void {
    const inputElement: HTMLInputElement = event.target as HTMLInputElement;
    this.password.set(inputElement.value);
  }

  login(event: Event): void {
    event.preventDefault();

    this.authService.login(this.username(), this.password()).subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(["/users"]);
      } else {
        alert("Credenciales inválidas");
      }
    });
  }
}
