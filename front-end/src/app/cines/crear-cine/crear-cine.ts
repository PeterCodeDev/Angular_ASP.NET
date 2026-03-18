import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-crear-cine',
  standalone:true,
  imports: [MatButtonModule],
  templateUrl: './crear-cine.html',
  styleUrl: './crear-cine.css',
})
export class CrearCine {}
