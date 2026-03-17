import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './listado-peliculas.html',
  styleUrl: './listado-peliculas.css',
})
export class ListadoPeliculas implements OnInit{

  constructor(){}
    @Input()
    peliculas;

  ngOnInit(): void {
  
  }
}
