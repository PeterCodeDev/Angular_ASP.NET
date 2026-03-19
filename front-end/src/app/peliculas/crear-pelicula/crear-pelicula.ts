import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { CommonModule } from '@angular/common';
import { FormularioPelicula } from '../formulario-pelicula/formulario-pelicula';
import { PeliculaCreacionDTO } from '../peliculas';

@Component({
  selector: 'app-crear-pelicula',
  standalone:true,
  imports: [CommonModule, MaterialModule, FormularioPelicula],
  templateUrl: './crear-pelicula.html',
  styleUrl: './crear-pelicula.css',
})
export class CrearPelicula implements OnInit{
  constructor(){

  }
ngOnInit(): void {
  
}
guardarCambios(pelicula: PeliculaCreacionDTO){
  console.log(pelicula)
}

}
