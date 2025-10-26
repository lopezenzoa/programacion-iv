import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../../servicios/movie-service/movie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargar-pelicula-component',
  imports: [ReactiveFormsModule],
  templateUrl: './cargar-pelicula-component.html',
  styleUrl: './cargar-pelicula-component.css',
})
export class CargarPeliculaComponent {
  fb: FormBuilder = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    title: new FormControl("", [Validators.required, Validators.minLength(3)]),
    description: new FormControl("", [Validators.required]),
    duration: new FormControl(null, [Validators.required, Validators.min(30), Validators.max(300)])
  });

  servicio: MovieService = inject(MovieService);
  router: Router = inject(Router);

  guardarPelicula(): void {
    this.servicio.guardarPelicula(this.form.value).subscribe((res) => {
      if (res)
        this.router.navigate(["/peliculas"]);
    });
  }
}
