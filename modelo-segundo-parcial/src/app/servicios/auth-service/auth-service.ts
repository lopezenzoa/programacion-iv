import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: WritableSignal<boolean> = signal(false);

  setLogged(isLogged: boolean): void {
    this.isLogged.set(isLogged);
  }
}
