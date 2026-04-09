import { Component, OnInit } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import {GenerosService} from '../generos.service'
import { generoDTO } from '../genero';
import { ListadoGenerico } from '../../utilidades/listado-generico/listado-generico';
import { MatColumnDef, MatHeaderCellDef, MatCellDef,MatTableModule } from "@angular/material/table";
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

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
    this.generosService.obtenerPaginado(pagina, cantidadElementosAMostrar)
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

 borrar(id: number) {
    Swal.fire({
      title: 'Confirmación',
      text: '¿Estás seguro que deseas borrar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      
      // Si el usuario hace clic en "Sí, borrar"
      if (result.isConfirmed) {
        
        // 1. Llamamos a tu servicio para que se lo pida al backend
        this.generosService.borrar(id).subscribe({
          next: () => {
            // 2. Mostramos una alerta de éxito
            Swal.fire('¡Borrado!', 'El género ha sido eliminado correctamente.', 'success');
            
            // 3. Recargamos la tabla para que el elemento desaparezca de la vista
            this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
          },
          error: (error) => {
            console.error(error);
            Swal.fire('Error', 'Hubo un problema al intentar borrar el registro.', 'error');
          }
        });

      }
    });
  }}
