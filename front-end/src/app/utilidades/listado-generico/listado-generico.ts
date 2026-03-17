import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-generico',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './listado-generico.html',
  styleUrl: './listado-generico.css',
})
export class ListadoGenerico implements OnInit{
  @Input()
  listado;
  constructor(){}

  ngOnInit(): void {
    
  }
}
