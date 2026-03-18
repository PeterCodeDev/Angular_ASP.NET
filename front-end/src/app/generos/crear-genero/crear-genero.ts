import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators  } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'
import { MaterialModule } from "../../material/material-module";
import { primeraLetraMayuscula } from '../../utilidades/validadores/primeraLetraMayuscula';
import { FormularioGenero } from "../formulario-genero/formulario-genero";
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-crear-genero',
  standalone:true,
  imports: [ReactiveFormsModule, MaterialModule, FormularioGenero],
  templateUrl: './crear-genero.html',
  styleUrl: './crear-genero.css',
})
export class CrearGenero{
  constructor(private router: Router){}

  guardarCambios(genero: generoCreacionDTO){
    // - - - guardar los cambios
    console.log(genero);
    this.router.navigate(['/generos']);
  }
}
