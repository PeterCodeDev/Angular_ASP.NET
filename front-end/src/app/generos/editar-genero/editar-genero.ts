import { Component, OnInit } from '@angular/core';
import { FormularioGenero } from "../formulario-genero/formulario-genero";
import { generoCreacionDTO } from '../genero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-genero',
  standalone:true,
  imports: [FormularioGenero],
  templateUrl: './editar-genero.html',
  styleUrl: './editar-genero.css',
})
export class EditarGenero implements OnInit{
  constructor(private router:Router){}

  modelo:generoCreacionDTO = {nombre: 'Drama'};

  ngOnInit(): void {
    
  }

  guardarCambios(genero: generoCreacionDTO){
    // - - - guardar los cambios
    console.log(genero);
    this.router.navigate(['/generos'])
  }
}
