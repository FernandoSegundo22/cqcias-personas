import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';

import { Persona } from './models/persona';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  private readonly personaService = inject(PersonaService);
  private readonly cdr = inject(ChangeDetectorRef);

  personas: Persona[] = [];
  personaSeleccionada: Persona | null = null;
  cargando = true;
  error = '';


  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas(): void {

    this.personaService.obtenerPersonasActivas().subscribe({

      next: (personas) => {
        this.personas = personas;
        this.cargando = false;

        this.cdr.detectChanges();
      },

      error: (error) => {
        console.error('Error al consultar personas:', error);

        this.error = 'No fue posible cargar las personas.';
        this.cargando = false;

        this.cdr.detectChanges();
      }

    });

  }

  verDetalle(persona: Persona): void {
    this.personaSeleccionada = persona;
  }

  cerrarDetalle(): void {
    this.personaSeleccionada = null;
  }
  
}