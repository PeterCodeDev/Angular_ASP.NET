import { Component, OnInit } from '@angular/core';
import { FormularioGenero } from "../formulario-genero/formulario-genero";
import { generoCreacionDTO, generoDTO } from '../genero';
import { Router } from '@angular/router';
import { GenerosService } from '../generos.service';
import { ActivatedRoute } from '@angular/router';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { parsearErroresAPI } from '../../utilidades/utilidades';

@Component({
  selector: 'app-editar-genero',
  standalone:true,
  imports: [FormularioGenero, MatProgressSpinner,CommonModule],
  templateUrl: './editar-genero.html',
  styleUrl: './editar-genero.css',
})
export class EditarGenero implements OnInit{
  constructor(private router:Router, private generosService: GenerosService,private activatedRoute: ActivatedRoute){}

  modelo:generoDTO;
  errores:string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id);
      this.generosService.obtenerPorId(params.id)
      .subscribe(genero => {
        this.modelo = genero;
      }, () => this.router.navigate(['/generos']))
    });
  }

  guardarCambios(genero: generoCreacionDTO){
    this.generosService.editar(this.modelo.id,genero)
    .subscribe(() =>{
      this.router.navigate(['/generos']);
    }, error => this.errores = parsearErroresAPI(error))
    
  }
}
