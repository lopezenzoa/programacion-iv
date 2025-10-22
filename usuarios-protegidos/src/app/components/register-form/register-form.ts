import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/UsersService/users-service';
import { User } from '../../models/User';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [RouterLink, ReactiveFormsModule], // TENGO QUE IMPORTAR ReactiveFormsModule
  templateUrl: './register-form.html',
  styleUrl: './register-form.css'
})
export class RegisterForm {
  usersService: UsersService = inject(UsersService);
  successMsg: WritableSignal<boolean> = signal<boolean>(false); // Esta señal la voy a usar para mostrar un mensaje en pantalla de creacion exitosa
  newUser: WritableSignal<User> = signal<User>({ id: null, name: undefined, email: undefined });

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email])
  });

  createUser(event: Event): void {
    event.preventDefault();

    this.newUser.set({
      id: String(Date.now()),
      name: this.form.value.name!, // Puedo poner el ! porque ya el Validators.required me asegura que no va a venir como null o undefined
      email: this.form.value.email!
    })

    this.usersService.create(this.newUser()).subscribe({
      next: () => {
        // Manejar la respuesta exitosa
        this.successMsg.set(true);
      },
      error: (err) => {
        // Manejar el error
        throw new Error("Error en la petición:", err);
      }
    });
  }
}
