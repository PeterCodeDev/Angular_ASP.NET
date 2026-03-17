import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
    //Gif 1: Peliculas en cines
    
      this.peliculaEnCines =[{
      titulo : 'Spider-man',
    fechaLanzamiento: new Date(),
    precio: 1400.99,
    poster:'https://tse4.mm.bing.net/th/id/OIP.jHQDng3iC4l-VWFxpLA6GgHaK9?pid=Api&P=0&h=180'
  },
  {
  titulo : 'Black Phanter',
    fechaLanzamiento: new Date('2016-11-14'),
    precio: 300.99,
    poster:'https://tse3.mm.bing.net/th/id/OIP.tnzR4SNgzUnPCIB1fFa16QHaLH?pid=Api&P=0&h=180'
  }];
    }

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
  

  peliculaEnCines : any;
  peliculasProximosEstrenos =[];

  pelicula = {
    titulo : 'Spider-man',
    fechaLanzamiento: new Date(),
    precio: 1400.99
  }
}

