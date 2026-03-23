import { Component, OnInit } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import {GenerosService} from '../generos.service'
import { generoDTO } from '../genero';
import { ListadoGenerico } from '../../utilidades/listado-generico/listado-generico';
import { MatColumnDef, MatHeaderCellDef, MatCellDef,MatTableModule } from "@angular/material/table";

@Component({
  selector: 'app-indice-generos',
  standalone:true,
  imports: [MatAnchor, RouterLink, ListadoGenerico, MatColumnDef, MatHeaderCellDef, MatCellDef, MatTableModule],
  templateUrl: './indice-generos.html',
  styleUrl: './indice-generos.css',
})
export class IndiceGeneros implements OnInit{
  constructor(private generosService: GenerosService){
  }

  generos: generoDTO[];
  columnasAMostrar=['id','nombre','acciones'];

  ngOnInit(): void {
    this.generosService.obtenerTodos()
    .subscribe(generos => {
      this.generos = generos;
    }, error => console.error(error));
  }
}
