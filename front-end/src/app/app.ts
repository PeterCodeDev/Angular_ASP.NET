import { CommonModule } from '@angular/common';
import { Component, OnInit, signal} from '@angular/core';
import { ListadoPeliculas } from './peliculas/listado-peliculas/listado-peliculas';
import { ListadoGenerico } from './utilidades/listado-generico/listado-generico';
import { MaterialModule } from './material/material-module';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import {NgModule} from '@angular/core'
import { Menu } from "./menu/menu";
import { Rating } from "./utilidades/rating/rating";
import { RouterOutlet } from "@angular/router";
/*import { CicloDeVida } from "./ciclo-de-vida/ciclo-de-vida";*/


@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  imports: [CommonModule, ListadoPeliculas, MaterialModule, Menu, RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent{

}
  

