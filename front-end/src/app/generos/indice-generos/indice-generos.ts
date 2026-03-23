import { Component, OnInit } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import {GenerosService} from '../generos.service'
import { generoDTO } from '../genero';
import { ListadoGenerico } from '../../utilidades/listado-generico/listado-generico';
import { MatColumnDef, MatHeaderCellDef, MatCellDef,MatTableModule } from "@angular/material/table";
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-indice-generos',
  standalone:true,
  imports: [MatAnchor, RouterLink, ListadoGenerico, MatColumnDef, MatHeaderCellDef, MatCellDef, MatTableModule,MatPaginatorModule],
  templateUrl: './indice-generos.html',
  styleUrl: './indice-generos.css',
})
export class IndiceGeneros implements OnInit{
  constructor(private generosService: GenerosService){
  }

  generos: generoDTO[];
  columnasAMostrar=['id','nombre','acciones'];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar){
    this.generosService.obtenerTodos(pagina, cantidadElementosAMostrar)
    .subscribe((respuesta: HttpResponse<generoDTO[]>) => {
      this.generos = respuesta.body;
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));
  }
  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex +1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }
}
