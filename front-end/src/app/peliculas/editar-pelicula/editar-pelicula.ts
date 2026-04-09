import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { CommonModule } from '@angular/common';
import { FormularioPelicula } from '../formulario-pelicula/formulario-pelicula';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { PeliculasService } from '../peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MultipleSelectorModel } from '../../utilidades/selector-multiple/MultipleSelectorModel';
import { actorPeliculaDTO } from '../../actores/actor';
import { parsearErroresAPI } from '../../utilidades/utilidades';

@Component({
  selector: 'app-editar-pelicula',
  imports: [MaterialModule, CommonModule, FormularioPelicula],
  templateUrl: './editar-pelicula.html',
  styleUrl: './editar-pelicula.css',
})
export class EditarPelicula implements OnInit{

  errores: string[]=[];
  constructor(private peliculasService: PeliculasService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){

  }
  modelo:PeliculaDTO;
  generosNoSeleccionados: MultipleSelectorModel[];
  generosSeleccionados: MultipleSelectorModel[];
  cinesNoSeleccionados: MultipleSelectorModel[];
  cinesSeleccionados: MultipleSelectorModel[];
  actoresSeleccionados : actorPeliculaDTO[];
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parms => {
      this.peliculasService.putGet(parms.id)
      .subscribe(peliculaPutGet => {
        this.modelo = peliculaPutGet.pelicula;

        this.generosNoSeleccionados = peliculaPutGet.generosNoSeleccionados.map(genero =>{
              return <MultipleSelectorModel>{llave: genero.id, valor: genero.nombre}
            });

            this.generosSeleccionados = peliculaPutGet.generosSeleccionados.map(genero =>{
              return <MultipleSelectorModel>{llave: genero.id, valor: genero.nombre}
            });

            this.cinesNoSeleccionados = peliculaPutGet.cinesNoSeleccionados.map(cines =>{
              return <MultipleSelectorModel>{llave: cines.id, valor: cines.nombre}
            });
            this.cinesSeleccionados = peliculaPutGet.cinesSeleccionados.map(cines =>{
              return <MultipleSelectorModel>{llave: cines.id, valor: cines.nombre}
      });
      this.actoresSeleccionados = peliculaPutGet.actores;
      });
    })
  }
  guardarCambios(pelicula: PeliculaCreacionDTO){
    this.peliculasService.editar(this.modelo.id ,pelicula)
    .subscribe(() =>{
      this.router.navigate(['/pelicula/'+this.modelo.id])
    },error => this.errores = parsearErroresAPI(error));
  }
}
