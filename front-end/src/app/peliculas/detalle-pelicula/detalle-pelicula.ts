import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasService } from '../peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { PeliculaDTO } from '../peliculas';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CoordenadaConMensaje } from '../../utilidades/mapa/coordenada';

@Component({
  selector: 'app-detalle-pelicula',
  imports: [CommonModule],
  templateUrl: './detalle-pelicula.html',
  styleUrl: './detalle-pelicula.css',
})
export class DetallePelicula implements OnInit {
  constructor(
    private peliculasService: PeliculasService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  pelicula: PeliculaDTO;
  fechaLanzamiento: Date;
  trailerURL: SafeResourceUrl;
  coordenadas: CoordenadaConMensaje[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.peliculasService.obtenerPorId(params['id']).subscribe((pelicula) => {
        console.log(pelicula);
        this.pelicula = pelicula;
        this.fechaLanzamiento = new Date(this.pelicula.fechaLanzamiento);
        this.trailerURL = this.generarURLYouTubeEmbed(this.pelicula.trailer);
        this.coordenadas = pelicula.cines.map((cine) => {
          return {
            longitud: cine.longitud,
            latitud: cine.latitud,
            mensaje: cine.nombre,
          };
        });
      });
    });
  }

  generarURLYouTubeEmbed(url: any): SafeResourceUrl {
    if (!url) {
      return '';
    }

    let video_id = '';

    // 1. Validar si es un enlace corto (ej: https://youtu.be/ID_DEL_VIDEO)
    if (url.includes('youtu.be/')) {
      video_id = url.split('youtu.be/')[1];
      // Si tiene parámetros extra al final (como ?si=...), los quitamos
      if (video_id.includes('?')) {
        video_id = video_id.split('?')[0];
      }
    } 
    // 2. Validar si es un enlace clásico (ej: https://www.youtube.com/watch?v=ID_DEL_VIDEO)
    else if (url.includes('v=')) {
      video_id = url.split('v=')[1];
      const posicionAmpersand = video_id.indexOf('&');
      if (posicionAmpersand !== -1) {
        video_id = video_id.substring(0, posicionAmpersand);
      }
    } else {
      // Si no es ninguno de los formatos esperados, devolvemos vacío
      return '';
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${video_id}`
    );
  }
}