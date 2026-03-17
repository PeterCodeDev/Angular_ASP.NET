import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListadoGenerico } from "../../utilidades/listado-generico/listado-generico";

@Component({
  selector: 'app-listado-peliculas',
  standalone:true,
  imports: [CommonModule, ListadoGenerico],
  templateUrl: './listado-peliculas.html',
  styleUrl: './listado-peliculas.css',
})
export class ListadoPeliculas implements OnInit{

  constructor(){}
    @Input()
    peliculas;

  ngOnInit(): void {
  
  }
  remove(indicePelicula: number): void{
    this.peliculas.splice(indicePelicula,1);
  }
}
