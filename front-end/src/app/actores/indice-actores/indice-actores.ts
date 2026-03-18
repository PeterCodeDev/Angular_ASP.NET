import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-indice-actores',
  standalone:true,
  imports: [RouterLink,MatButtonModule],
  templateUrl: './indice-actores.html',
  styleUrl: './indice-actores.css',
})
export class IndiceActores {}
