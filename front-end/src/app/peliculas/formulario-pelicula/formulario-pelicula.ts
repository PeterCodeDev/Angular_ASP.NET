import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material-module';
import { RouterLink } from "@angular/router";
import { InputMarkdown } from '../../utilidades/input-markdown/input-markdown';
import { InputImg } from '../../utilidades/input-img/input-img';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';

@Component({
  selector: 'app-formulario-pelicula',
  imports: [ReactiveFormsModule, CommonModule, MaterialModule, RouterLink, InputImg, InputMarkdown],
  templateUrl: './formulario-pelicula.html',
  styleUrl: './formulario-pelicula.css',
})
export class FormularioPelicula implements OnInit{

  constructor(private formBuilder: FormBuilder){}

  form: FormGroup;

  @Input()
  modelo: PeliculaDTO;

  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      resumen:'',
      enCines:false,
      trailer:'',
      fechaLanzamiento:'',
      poster:''
    });
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  changeMarkdown(texto){
    this.form.get('poster').setValue(texto);
  }

  archivoSeleccionado(archivo: File){
    this.form.get('poster').setValue(archivo);
  }

  guardarCambios(){
    this.OnSubmit.emit(this.form.value);
  }
}
