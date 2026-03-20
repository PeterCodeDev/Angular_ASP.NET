import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators  } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'
import { MaterialModule } from "../../material/material-module";
import { primeraLetraMayuscula } from '../../utilidades/validadores/primeraLetraMayuscula';
import { FormularioGenero } from "../formulario-genero/formulario-genero";
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  standalone:true,
  imports: [ReactiveFormsModule, MaterialModule, FormularioGenero],
  templateUrl: './crear-genero.html',
  styleUrl: './crear-genero.css',
})
export class CrearGenero{

  errores:string[] = [];
  
  constructor(private router: Router, private generosService: GenerosService){}

  guardarCambios(genero: generoCreacionDTO){
    this.generosService.crear(genero).subscribe(() =>{
    this.router.navigate(['/generos']);
    }, error => console.error(error));
  
  }
}
