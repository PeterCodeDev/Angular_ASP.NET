import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormularioCine } from '../formulario-cine/formulario-cine';
import { cineCreacionDTO } from '../cine';


@Component({
  selector: 'app-crear-cine',
  standalone:true,
  imports: [MatButtonModule,FormularioCine],
  templateUrl: './crear-cine.html',
  styleUrl: './crear-cine.css',
})
export class CrearCine implements OnInit{
  constructor(){}

  ngOnInit(): void {
    
  }

  guardarCambios(cine: cineCreacionDTO){
    console.log(cine)
  }
}
