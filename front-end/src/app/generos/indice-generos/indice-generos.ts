import { Component, OnInit } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import {GenerosService} from '../generos.service'

@Component({
  selector: 'app-indice-generos',
  imports: [MatAnchor, RouterLink],
  templateUrl: './indice-generos.html',
  styleUrl: './indice-generos.css',
})
export class IndiceGeneros implements OnInit{
  constructor(private generosService: GenerosService){

  }

  ngOnInit(): void {
    const generos = this.generosService.obtenerTodos();
    console.log(generos);
  }
}
