import { Component } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-indice-generos',
  imports: [MatAnchor, RouterLink],
  templateUrl: './indice-generos.html',
  styleUrl: './indice-generos.css',
})
export class IndiceGeneros {}
