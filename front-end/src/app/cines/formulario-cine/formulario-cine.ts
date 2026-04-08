import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../../material/material-module";
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { cineCreacionDTO, cineDTO } from '../cine';
import { MostrarErrores } from "../../utilidades/mostrar-errores/mostrar-errores";


@Component({
  selector: 'app-formulario-cine',
  imports: [ReactiveFormsModule, CommonModule, MaterialModule, RouterLink, MostrarErrores],
  templateUrl: './formulario-cine.html',
  styleUrl: './formulario-cine.css',
})
export class FormularioCine implements OnInit{
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }

  @Input()
  errores: string[] = [];

  @Input()
  modelo:cineCreacionDTO;

  @Output()
  guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre:[
        '',
        {
          validators:[Validators.required],
        },
      ],
    });
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
  OnSubmit(){
this.guardarCambios.emit(this.form.value);
  }
}
