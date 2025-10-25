import { Component, computed, effect, inject, signal } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../../modelos/User';
import { UsuariosService } from '../../servicios/usuarios-service';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-registro-page',
  imports: [ReactiveFormsModule],
  templateUrl: './registro-page.html',
  styleUrl: './registro-page.css',
})
export class RegistroPage {
  fb = inject(NonNullableFormBuilder);
  http = inject(HttpClient);
  servicio: UsuariosService = inject(UsuariosService);

  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.required, Validators.email], [this.emailUnico()]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    confirmPassword: ["", Validators.required]
  });

  mensajeExito = signal<boolean>(false);

  isValid = computed(() => this.form.valid);

  // 👇 agregás el validador de grupo manualmente
  constructor() {
    this.form.addValidators(this.validarPass());

    const formValue = toSignal(this.form.valueChanges, {
      initialValue: this.form.value
    });

    effect(() => {
      console.log(formValue());
      console.log(this.isValid());
    });
  }

  submit(): void {
    // Esto no es muy buena practica, deberia mandar el formular completo y que el servicio valide
    const dto: User = {
      // No me parece mal usar ! porque ya la validación previa del formulario evita que los valores sean indefinidos
      nombre: this.form.value.nombre!,
      email: this.form.value.email!,
      password: this.form.value.password!
    };

    this.servicio.register(dto).subscribe((res) => {
        this.mensajeExito.set(res);
    });

    this.form.reset();
  }

  // Validadores de grupo (cross-field)
  // Se usan cuando querés validar la relación entre varios campos
  validarPass(): ValidatorFn {
    // En este caso, para el NoNullabeFormBuilder necesito retornar un ValidatorFn
    return (control: AbstractControl): ValidationErrors | null => {
      const pass = control.get("password")?.value;
      const passConfirmation = control.get("confirmPassword")?.value;

      return pass === passConfirmation ? null : { noCoinciden: true };
    }
  }

  // Validadores asincrónicos
  emailUnico(): AsyncValidatorFn {
    return (control: AbstractControl<string, string>): Observable<ValidationErrors | null> => {
      const email = control.value; // 💡 nunca será null con NonNullableFormBuilder

      // Evita llamadas innecesarias si el campo está vacío
      if (!email) {
        return new Observable<null>(observer => {
          observer.next(null);
          observer.complete();
        });
      }

      // Petición HTTP que busca usuarios con ese email
      return this.http
        .get<User[]>(`http://localhost:3000/users?email=${email}`)
        .pipe(
          map(users => (users.length > 0 ? { emailExistente: true } : null))
        );
    };
  }
}