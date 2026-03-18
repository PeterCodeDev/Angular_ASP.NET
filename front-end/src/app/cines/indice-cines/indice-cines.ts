import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice-cines',
  standalone:true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './indice-cines.html',
  styleUrl: './indice-cines.css',
})
export class IndiceCines {}
