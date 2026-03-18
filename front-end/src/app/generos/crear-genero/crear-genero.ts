import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators  } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'
import { MaterialModule } from "../../material/material-module";

@Component({
  selector: 'app-crear-genero',
  standalone:true,
  imports: [ReactiveFormsModule, MaterialModule, RouterLink],
  templateUrl: './crear-genero.html',
  styleUrl: './crear-genero.css',
})
export class CrearGenero implements OnInit{
  constructor(private router: Router, private formBuilder : FormBuilder){}

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }]
    });
  }

  guardarCambios(){
    // - - - guardar los cambios
    this.router.navigate(['/generos']);
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if (campo?.hasError('required')){
      return 'El campo nombre es necesario';
    }
    if(campo.hasError('minlength')){
      return 'La longuitud minima es de 3 caracteres';
    }
    return '';
  }

 
}
