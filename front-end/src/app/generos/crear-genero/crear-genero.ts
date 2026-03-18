import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule  } from '@angular/forms';
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
      nombre: ''
    });
  }

  guardarCambios(){
    // - - - guardar los cambios
    this.router.navigate(['/generos']);
  }
}
