import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { CommonModule } from '@angular/common';
import { cineCreacionDTO, cineDTO } from '../cine';
import { FormularioCine } from '../formulario-cine/formulario-cine';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from '../../utilidades/utilidades';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-editar-cine',
  standalone:true,
  imports: [MaterialModule,CommonModule,FormularioCine],
  templateUrl: './editar-cine.html',
  styleUrl: './editar-cine.css',
})
export class EditarCine implements OnInit{
  constructor(private router:Router, private cinesService: CinesService,private activatedRoute: ActivatedRoute){}

  modelo:cineDTO;
  errores:string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id);
      this.cinesService.obtenerPorId(params.id)
      .subscribe(genero => {
        this.modelo = genero;
      }, () => this.router.navigate(['/cines']))
    });
  }

  guardarCambios(cine: cineCreacionDTO){
    this.cinesService.editar(this.modelo.id,cine)
    .subscribe(() =>{
      this.router.navigate(['/cines']);
    }, error => this.errores = parsearErroresAPI(error))
    
  }
}
