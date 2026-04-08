import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormularioGenero } from "../../generos/formulario-genero/formulario-genero";
import { FormularioActores } from '../formulario-actores/formulario-actores';
import { actorCreacionDTO } from '../actor';
import { ActoresService } from '../actores.service';
import { parsearErroresAPI } from '../../utilidades/utilidades';

@Component({
  selector: 'app-crear-actor',
  standalone:true,
  imports: [MatButtonModule, FormularioActores],
  templateUrl: './crear-actor.html',
  styleUrl: './crear-actor.css',
})
export class CrearActor implements OnInit{
  constructor(private actoresService: ActoresService, private router: Router){}

  ngOnInit(): void {
  }

  errores: string[] = [];

  guardarCambios(actor: actorCreacionDTO) {
    this.actoresService.crear(actor)
      .subscribe(() => {
        // Si todo va bien, navegamos a la lista de actores
        this.router.navigate(['/actores']); 
      }, errores => this.errores = parsearErroresAPI(errores)) // Si hay error, lo mostramos
  }
}

