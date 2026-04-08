import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormularioCine } from '../formulario-cine/formulario-cine';
import { cineCreacionDTO } from '../cine';
import { CinesService } from '../cines.service';
import { Router } from '@angular/router';
import { parsearErroresAPI } from '../../utilidades/utilidades';


@Component({
  selector: 'app-crear-cine',
  standalone:true,
  imports: [MatButtonModule,FormularioCine],
  templateUrl: './crear-cine.html',
  styleUrl: './crear-cine.css',
})
export class CrearCine{
  errores:string[] = [];
  
  constructor(private router: Router, private generosService: CinesService){}

  guardarCambios(cine: cineCreacionDTO){
    this.generosService.crear(cine).subscribe(() =>{
    this.router.navigate(['/cines']);
    }, 
    (error) => this.errores = parsearErroresAPI(error)
    );
  }
}
