import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from "../../material/material-module";
import { RouterLink } from "@angular/router";
import { actorCreacionDTO, actorDTO } from '../actor';
import { InputImg } from '../../utilidades/input-img/input-img';
import { InputMarkdown } from '../../utilidades/input-markdown/input-markdown';
import { MostrarErrores } from '../../utilidades/mostrar-errores/mostrar-errores';

@Component({
  selector: 'app-formulario-actores',
  standalone:true,
  imports: [ReactiveFormsModule, MaterialModule, RouterLink, InputImg,InputMarkdown,MostrarErrores],
  templateUrl: './formulario-actores.html',
  styleUrl: './formulario-actores.css',
})
export class FormularioActores implements OnInit {
constructor(private formBuilder: FormBuilder){}

form: FormGroup;

@Input()
modelo:actorDTO;

@Input()
errores: string[] =[];

@Output()
OnSubmit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

ngOnInit(): void {
  this.form = this.formBuilder.group({
    nombre: [
      '',
      {
      validators:[Validators.required],
    },
  ],
  fechaNacimiento: '',
  foto:'',
  biografia:''
  });

  if(this.modelo !== undefined){
    this.form.patchValue(this.modelo)
  }
}
archivoSeleccionado(file){
this.form.get('foto').setValue(file);
}

cambioMarkdown(texto:string){
this.form.get('biografia').setValue(texto);
}

onSubmit() {
  console.log("1. Clic en el botón. ¿Es válido el form?: ", this.form.valid);
  console.log("2. Datos del formulario: ", this.form.value);
  this.OnSubmit.emit(this.form.value);
}

}
