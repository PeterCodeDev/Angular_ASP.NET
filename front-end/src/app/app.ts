import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {NgModule} from '@angular/core'
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  imports:[CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es el titulo que yo quiero');

  manejarClick(){
    // Hacer lo que yo quiera
  }
  duplicarNumero(valor:number): number{
    return valor*2;
  }

  pelicula = {
    titulo : 'Spider-man',
    fechaLanzamiento: new Date()
  };
}
