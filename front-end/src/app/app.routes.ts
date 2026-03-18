import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { IndiceGeneros } from './generos/indice-generos/indice-generos';
import { CrearGenero } from './generos/crear-genero/crear-genero';
import { IndiceActores } from './actores/indice-actores/indice-actores';
import { IndiceCines } from './cines/indice-cines/indice-cines';
import { CrearActor } from './actores/crear-actor/crear-actor';
import { CrearCine } from './cines/crear-cine/crear-cine';
import { CrearPelicula } from './peliculas/crear-pelicula/crear-pelicula';
import { EditarActor } from './actores/editar-actor/editar-actor';
import { EditarCine } from './cines/editar-cine/editar-cine';
import { EditarPelicula } from './peliculas/editar-pelicula/editar-pelicula';
import { EditarGenero } from './generos/editar-genero/editar-genero';

export const routes: Routes = [
    {path: '', component:LandingPage},
    {path:'generos', component:IndiceGeneros},
    {path:'generos/crear', component:CrearGenero},
    {path:'generos/editar/:id', component:EditarGenero},

    //Actores
    {path:'actores', component:IndiceActores},
    {path:'actores/crear', component:CrearActor},
    {path:'actores/editar/:id', component:EditarActor},

    //Cines
    {path:'cines', component:IndiceCines},
    {path:'cines/crear', component:CrearCine},
    {path:'cines/editar/:id', component:EditarCine},
    
    //Peliculas
    {path:'peliculas/crear', component:CrearPelicula},
    {path:'peliculas/editar/:id', component:EditarPelicula},

    {path:'**', redirectTo:''},
];
