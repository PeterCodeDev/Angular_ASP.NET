import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crear-actor',
  standalone:true,
  imports: [MatButtonModule],
  templateUrl: './crear-actor.html',
  styleUrl: './crear-actor.css',
})
export class CrearActor {}
