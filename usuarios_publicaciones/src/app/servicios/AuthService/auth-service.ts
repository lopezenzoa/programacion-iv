import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: WritableSignal<boolean> = signal<boolean>(false);
}
