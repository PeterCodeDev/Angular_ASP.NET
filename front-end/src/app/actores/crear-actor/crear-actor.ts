import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormularioGenero } from "../../generos/formulario-genero/formulario-genero";
import { FormularioActores } from '../formulario-actores/formulario-actores';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-crear-actor',
  standalone:true,
  imports: [MatButtonModule, FormularioActores],
  templateUrl: './crear-actor.html',
  styleUrl: './crear-actor.css',
})
export class CrearActor implements OnInit{
  constructor(){}

  ngOnInit(): void {
    
  }
  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
  }
}
