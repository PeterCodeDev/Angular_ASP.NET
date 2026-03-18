import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-crear-genero',
  imports: [],
  templateUrl: './crear-genero.html',
  styleUrl: './crear-genero.css',
})
export class CrearGenero implements OnInit{
  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

  guardarCambios(){
    // - - - guardar los cambios
    this.router.navigate(['/generos'])
  }
}
