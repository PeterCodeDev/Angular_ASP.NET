import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { CommonModule } from '@angular/common';
import { cineCreacionDTO, cineDTO } from '../cine';
import { FormularioCine } from '../formulario-cine/formulario-cine';

@Component({
  selector: 'app-editar-cine',
  standalone:true,
  imports: [MaterialModule,CommonModule,FormularioCine],
  templateUrl: './editar-cine.html',
  styleUrl: './editar-cine.css',
})
export class EditarCine implements OnInit{
  constructor(){}
  modelo: cineDTO = {nombre: "Sambil"};

  ngOnInit(): void {
    
  }

  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }
}
