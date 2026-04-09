import { Component, OnInit } from '@angular/core';
import { ListadoPeliculas } from '../peliculas/listado-peliculas/listado-peliculas';
import { PeliculasService } from '../peliculas/peliculas.service';
import { PeliculaDTO } from '../peliculas/peliculas';

@Component({
  selector: 'app-landing-page',
  standalone:true,
  imports: [ListadoPeliculas],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit {
  constructor(private peliculasService:PeliculasService){}
  ngOnInit(): void {
    this.peliculasService.obtenerLandingPage().subscribe(landingPage => {
      this.peliculaEnCines = landingPage.enCines;
      this.peliculasProximosEstrenos = landingPage.proximosEstrenos;
    })
    }
  peliculaEnCines : PeliculaDTO[];
  peliculasProximosEstrenos : PeliculaDTO[];

  //Gif 2: Proximos Estrenos
    /*setTimeout(() =>{
      this.peliculasProximosEstrenos =[{
      titulo : 'Avengers Endgame',
    fechaLanzamiento: new Date(),
    precio: 1400.99
  },
  {
  titulo : 'Rocky',
    fechaLanzamiento: new Date('2016-11-14'),
    precio: 300.99
  },
  {
    titulo : 'Men in Black',
    fechaLanzamiento: new Date('2016-11-14'),
    precio: 300.99
  }]
    }, 2000);*/
}

