import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { CommonModule } from '@angular/common';
import { FormularioPelicula } from '../formulario-pelicula/formulario-pelicula';
import { PeliculaCreacionDTO } from '../peliculas';
import { PeliculasService } from '../peliculas.service';
import { MultipleSelectorModel } from '../../utilidades/selector-multiple/MultipleSelectorModel';
import { error } from 'console';
import { parsearErroresAPI } from '../../utilidades/utilidades';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-pelicula',
  standalone:true,
  imports: [CommonModule, MaterialModule, FormularioPelicula],
  templateUrl: './crear-pelicula.html',
  styleUrl: './crear-pelicula.css',
})
export class CrearPelicula implements OnInit{
  constructor(private peliculasService: PeliculasService,
    private router: Router
  ){

  }

  errores: string[] =[];
  generosNoSeleccionados: MultipleSelectorModel[];
  cinesNoSeleccionados: MultipleSelectorModel[];

ngOnInit(): void {
  this.peliculasService.postGet()
  .subscribe(resultado => {
    this.generosNoSeleccionados = resultado.generos.map(genero =>{
      return <MultipleSelectorModel>{llave: genero.id, valor: genero.nombre}
    });
    this.cinesNoSeleccionados = resultado.cines.map(cines =>{
      return <MultipleSelectorModel>{llave: cines.id, valor: cines.nombre}
    });
  }, error => console.error(error));
}
guardarCambios(pelicula: PeliculaCreacionDTO){
  this.peliculasService.crear(pelicula)
  .subscribe((id:number) => this.router.navigate(['/pelicula/' + id]),
  error => this.errores = parsearErroresAPI(error));
}

}
