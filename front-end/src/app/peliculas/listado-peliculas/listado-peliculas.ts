import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListadoGenerico } from "../../utilidades/listado-generico/listado-generico";
import { MaterialModule } from '../../material/material-module';
import { RouterLink } from "@angular/router";
import { PeliculaDTO } from '../peliculas';

@Component({
  selector: 'app-listado-peliculas',
  standalone:true,
  imports: [CommonModule, ListadoGenerico, MaterialModule, RouterLink],
  templateUrl: './listado-peliculas.html',
  styleUrl: './listado-peliculas.css',
})
export class ListadoPeliculas implements OnInit{

  constructor(){}
    @Input()
    peliculas: PeliculaDTO[];

  ngOnInit(): void {
  
  }
  remove(indicePelicula: number): void{
    this.peliculas.splice(indicePelicula,1);
  }
}
