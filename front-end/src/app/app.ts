import { CommonModule } from '@angular/common';
import { Component, OnInit, signal} from '@angular/core';
import {NgModule} from '@angular/core'
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  imports:[CommonModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculas =[]
    }, 2000);
  }
  protected readonly title = signal('Este es el titulo que yo quiero');

  peliculas;

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
