import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from "../../material/material-module";
import { RouterLink } from "@angular/router";
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  standalone:true,
  imports: [ReactiveFormsModule, MaterialModule, RouterLink],
  templateUrl: './formulario-actores.html',
  styleUrl: './formulario-actores.css',
})
export class FormularioActores implements OnInit {
constructor(private formBuilder: FormBuilder){}

form: FormGroup;

@Input()
modelo:actorCreacionDTO;

@Output()
submit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

ngOnInit(): void {
  this.form = this.formBuilder.group({
    nombre: [
      '',
      {
      validators:[Validators.required],
    },
  ],
  fechaNacimiento: ''
  });

  if(this.modelo !== undefined){
    this.form.patchValue(this.modelo)
  }
}
onSubmit(){
  this.submit.emit(this.form.value);
}

}
