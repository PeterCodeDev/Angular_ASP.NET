import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormularioActores } from '../formulario-actores/formulario-actores';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  standalone:true,
  imports: [FormularioActores],
  templateUrl: './editar-actor.html',
  styleUrl: './editar-actor.css',
})
export class EditarActor implements OnInit {
  constructor(private activatedRoute: ActivatedRoute){}

modelo: actorDTO
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      alert(params.id);
    })
  }
  guardarCambios(actor:actorCreacionDTO){
    console.log(actor);
  }
}

