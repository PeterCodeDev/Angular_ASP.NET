import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { generoCreacionDTO } from '../genero';
import { primeraLetraMayuscula } from '../../utilidades/validadores/primeraLetraMayuscula';
import { MaterialModule } from '../../material/material-module';
import { MostrarErrores } from '../../utilidades/mostrar-errores/mostrar-errores';

@Component({
  selector: 'app-formulario-genero',
  standalone:true,
  imports: [ReactiveFormsModule, MaterialModule,MostrarErrores],
  templateUrl: './formulario-genero.html',
  styleUrl: './formulario-genero.css',
})
export class FormularioGenero implements OnInit{
  constructor(private formBuilder : FormBuilder){}

  form: FormGroup;

  @Input()
  errores:string[] =[];

  @Input()
  modelo: generoCreacionDTO;

  @Output()
  onSubmit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3),primeraLetraMayuscula()]
      }]
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if (campo?.hasError('required')){
      return 'El campo nombre es necesario';
    }
    if(campo.hasError('minlength')){
      return 'La longuitud minima es de 3 caracteres';
    }
    if(campo?.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }

}
