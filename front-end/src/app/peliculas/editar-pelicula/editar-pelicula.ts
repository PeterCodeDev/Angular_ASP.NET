import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { CommonModule } from '@angular/common';
import { FormularioPelicula } from '../formulario-pelicula/formulario-pelicula';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';

@Component({
  selector: 'app-editar-pelicula',
  imports: [MaterialModule, CommonModule, FormularioPelicula],
  templateUrl: './editar-pelicula.html',
  styleUrl: './editar-pelicula.css',
})
export class EditarPelicula implements OnInit{
  constructor(){

  }
  modelo:PeliculaDTO;
  
  ngOnInit(): void {
    
  }
  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log(pelicula); 
  }
}
