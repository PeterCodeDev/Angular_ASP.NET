import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListadoGenerico } from "../../utilidades/listado-generico/listado-generico";
import { MaterialModule } from '../../material/material-module';
import { RouterLink } from "@angular/router";
import { PeliculaDTO } from '../peliculas';
import Swal from 'sweetalert2';
// 👇 Importamos el servicio de películas 👇
import { PeliculasService } from '../peliculas.service'; 

@Component({
  selector: 'app-listado-peliculas',
  standalone:true,
  imports: [CommonModule, ListadoGenerico, MaterialModule, RouterLink],
  templateUrl: './listado-peliculas.html',
  styleUrl: './listado-peliculas.css',
})
export class ListadoPeliculas implements OnInit {

  // 👇 Inyectamos el servicio en el constructor 👇
  constructor(private peliculasService: PeliculasService) {} 
  
  @Input()
  peliculas: PeliculaDTO[];

  ngOnInit(): void {}

  borrar(id: number) {
    Swal.fire({
      title: 'Confirmación',
      text: '¿Estás seguro que deseas borrar la película?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
        
      if (result.isConfirmed) {
        // 1. Usamos PeliculasService (no cinesService)
        this.peliculasService.borrar(id).subscribe({
          next: () => {
            // 2. Alerta de éxito
            Swal.fire('¡Borrado!', 'La película ha sido eliminada correctamente.', 'success');
              
            // 3. Removemos la película visualmente de la lista actual (sin recargar la página)
            const indice = this.peliculas.findIndex(p => p.id === id);
            if (indice !== -1) {
               this.peliculas.splice(indice, 1);
            }
          },
          error: (error) => {
            console.error(error);
            Swal.fire('Error', 'Hubo un problema al intentar borrar la película.', 'error');
          }
        });
      }
    });
  }
}