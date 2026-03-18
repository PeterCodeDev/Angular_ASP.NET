import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { IndiceGeneros } from './generos/indice-generos/indice-generos';
import { CrearGenero } from './generos/crear-genero/crear-genero';
import { IndiceActores } from './actores/indice-actores/indice-actores';
import { IndiceCines } from './cines/indice-cines/indice-cines';
import { CrearActor } from './actores/crear-actor/crear-actor';
import { CrearCine } from './cines/crear-cine/crear-cine';
import { CrearPelicula } from './peliculas/crear-pelicula/crear-pelicula';

export const routes: Routes = [
    {path: '', component:LandingPage},
    {path:'generos', component:IndiceGeneros},
    {path:'generos/crear', component:CrearGenero},

    //Actores
    {path:'actores', component:IndiceActores},
    {path:'actores/crear', component:CrearActor},

    //Cines
    {path:'cines', component:IndiceCines},
    {path:'cines/crear', component:CrearCine},
    
    //Peliculas
    {path:'peliculas/crear', component:CrearPelicula},
];
