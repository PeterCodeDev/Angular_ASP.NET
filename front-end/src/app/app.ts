import { CommonModule } from '@angular/common';
import { Component, OnInit, signal} from '@angular/core';
import { ListadoPeliculas } from './peliculas/listado-peliculas/listado-peliculas';
import {NgModule} from '@angular/core'
//import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  imports:[CommonModule, ListadoPeliculas],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculaEnCines =[{
      titulo : 'Spider-man',
    fechaLanzamiento: new Date(),
    precio: 1400.99
  },
  {
  titulo : 'Black Phanter',
    fechaLanzamiento: new Date('2016-11-14'),
    precio: 300.99
  }]
    }, 2000);
  }
  protected readonly title = signal('Este es el titulo que yo quiero');

  peliculaEnCines;
  peliculasProximosEstrenos = [{
      titulo : 'Avengers Endgame',
    fechaLanzamiento: new Date(),
    precio: 1400.99
  },
  {
  titulo : 'Rocky',
    fechaLanzamiento: new Date('2016-11-14'),
    precio: 300.99
  },
  {
    titulo : 'Men in Black',
    fechaLanzamiento: new Date('2016-11-14'),
    precio: 300.99
  }]

  manejarClick(){
    // Hacer lo que yo quiera
  }
  duplicarNumero(valor:number): number{
    return valor*2;
  }

  pelicula = {
    titulo : 'Spider-man',
    fechaLanzamiento: new Date(),
    precio: 1400.99
  }
  
}
