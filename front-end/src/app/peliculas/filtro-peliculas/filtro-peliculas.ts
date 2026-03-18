import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../../material/material-module";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-filtro-peliculas',
  standalone:true,
  imports: [ReactiveFormsModule, MaterialModule, MatInputModule, MatFormFieldModule, CommonModule, MatCheckboxModule],
  templateUrl: './filtro-peliculas.html',
  styleUrl: './filtro-peliculas.css',
})
export class FiltroPeliculas implements OnInit{
  constructor(private formBuilder: FormBuilder){}

  form: FormGroup;

  generos = [
    {id:1, nombre: 'Drama'},
    {id:2, nombre: 'Accion'},
    {id:3, nombre: 'Comedia'}
  ];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: '',
      generoId:0,
      proximoEstrenos: false,
      enCines:false
    });
  }
  limpiar(){
    
  }

}
