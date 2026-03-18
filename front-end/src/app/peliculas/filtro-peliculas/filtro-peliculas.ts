import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../../material/material-module";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { ListadoPeliculas } from '../listado-peliculas/listado-peliculas';

@Component({
  selector: 'app-filtro-peliculas',
  standalone:true,
  imports: [ReactiveFormsModule, MaterialModule, MatInputModule, MatFormFieldModule, CommonModule, MatCheckboxModule,ListadoPeliculas],
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

  peliculas =[
    {titulo: 'Spider-Man: Far From Home', enCines: false, proximosEstrenos:true, generos:[1,2], poster: 'https://tse2.mm.bing.net/th/id/OIP.sxm7t0xBM0Y-T_9iyHlyMQHaKF?pid=Api&P=0&h=180'},
    {titulo: 'Batman', enCines: true, proximosEstrenos:false, generos:[3], poster:"https://tse2.mm.bing.net/th/id/OIP.k3Blfo_Srl4OI0HPLSvoXAHaJ4?pid=Api&P=0&h=180"},
    {titulo: 'Assassins Creed', enCines: false, proximosEstrenos:false, generos:[1,3], poster:"https://tse1.mm.bing.net/th/id/OIP.QdOpdwtlzfdzyGJnPsebUgHaLH?pid=Api&P=0&h=180"}
  ]

  peliculasOriginal = this.peliculas;

  formularioOriginal = {
      titulo: '',
      generoId:0,
      proximosEstrenos: false,
      enCines:false,
    };

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);

    this.form.valueChanges
      .subscribe(valores =>{
        this.peliculas = this.peliculasOriginal;
        this.buscarPeliculas(valores);
      })
  }

  buscarPeliculas(valores:any){
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }

    if (valores.generoId !== 0){
  this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }

    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }

    if(valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }

}
