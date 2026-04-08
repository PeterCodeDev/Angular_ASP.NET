import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListadoGenerico } from '../../utilidades/listado-generico/listado-generico';
import { MatTableModule } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ActoresService } from '../actores.service';
import { actorDTO } from '../actor';

// 👇 Asegúrate de importar tu servicio de actores y la interfaz (ajusta la ruta si es necesario)
// import { ActoresService } from '../actores.service';
// import { actorDTO } from '../actor';

@Component({
  selector: 'app-indice-actores',
  standalone: true,
  imports: [RouterLink, MatButtonModule, CommonModule, MatPaginatorModule, ListadoGenerico, MatTableModule],
  templateUrl: './indice-actores.html',
  styleUrl: './indice-actores.css',
})
export class IndiceActores implements OnInit {
  
  // constructor(private actoresService: ActoresService) {}
  constructor(private actoresService: ActoresService) {}

  
  actores: actorDTO[]; 
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros: any;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  // 3. Método para cargar los datos
  cargarRegistros(pagina: number, cantidadElementosAMostrar: number) {
    
    this.actoresService.obtenerTodos(pagina, cantidadElementosAMostrar)
      .subscribe((respuesta: HttpResponse<actorDTO[]>) => {
        this.actores = respuesta.body;
        this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
      }, error => console.error(error));
    
  }

  // 4. Método de Paginación que daba error
  actualizarPaginacion(datos: PageEvent) {
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  // 5. Método de Borrar que daba error
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
      if (result.isConfirmed) {
        /* 👇 Descomenta esto cuando tengas el servicio listo
        this.actoresService.borrar(id).subscribe({
          next: () => {
            Swal.fire('¡Borrado!', 'El actor ha sido eliminado correctamente.', 'success');
            this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
          },
          error: (error) => {
            console.error(error);
            Swal.fire('Error', 'Hubo un problema al intentar borrar el registro.', 'error');
          }
        });
        */
      }
    });
  }
}