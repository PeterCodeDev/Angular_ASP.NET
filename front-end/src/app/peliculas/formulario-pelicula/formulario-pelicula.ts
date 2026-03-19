import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material-module';
import { RouterLink } from "@angular/router";
import { InputMarkdown } from '../../utilidades/input-markdown/input-markdown';
import { InputImg } from '../../utilidades/input-img/input-img';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { SelectorMultiple } from '../../utilidades/selector-multiple/selector-multiple';
import { MultipleSelectorModel } from '../../utilidades/selector-multiple/MultipleSelectorModel';

@Component({
  selector: 'app-formulario-pelicula',
  imports: [ReactiveFormsModule, CommonModule, MaterialModule, RouterLink, InputImg, InputMarkdown,SelectorMultiple],
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


  generosNoSeleccionados: MultipleSelectorModel[]= [
    { llave: 1, valor: 'Drama'},
    { llave: 2, valor: 'Accion'},
    { llave: 3, valor: 'Comedia'}
  ];

  generosSeleccionados: MultipleSelectorModel[] = [];

  cinesNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor: 'Sambil'},
    {llave: 2, valor: 'Agora'},
    {llave: 3, valor: 'Acropolis'}
  ]

  cinesSeleccionados : MultipleSelectorModel[]=[];

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
      poster:'',
      generosId: '',
      cinesId:''
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
    const generosIds = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosId').setValue(generosIds);

    const cinesIds = this.generosSeleccionados.map(val => val.llave);
    this.form.get('cinesId').setValue(cinesIds);

    this.OnSubmit.emit(this.form.value);
  }
}
