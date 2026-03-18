import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { IndiceGeneros } from './generos/indice-generos/indice-generos';

export const routes: Routes = [
    {path: '', component:LandingPage},
    {path:'generos', component:IndiceGeneros}
];
