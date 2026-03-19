import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from "../../material/material-module";
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  imports: [MaterialModule,ReactiveFormsModule,CommonModule, FormsModule],
  templateUrl: './autocomplete-actores.html',
  styleUrl: './autocomplete-actores.css',
})
export class AutocompleteActores implements OnInit{
  constructor(){}

  control: FormControl = new FormControl();

  actores = [
    {nombre: 'Will Smith', personaje:'', foto: 'https://tse2.mm.bing.net/th/id/OIP.JNhieu6PaMircqOMyeNhVgHaJy?pid=Api&P=0&h=180'},
    {nombre: 'Eddy Murphy', personaje:'',foto: 'https://tse1.mm.bing.net/th/id/OIP.rhKXPqwaLFMKl_Yx-mK3QAHaKZ?pid=Api&P=0&h=180'},
    {nombre: 'Tom Hanks', personaje:'',foto: 'https://tse2.mm.bing.net/th/id/OIP.LaiGMyID4gVz8AZegmU5rwHaE7?pid=Api&P=0&h=180'}
  ]

  actoresOriginal = this.actores;

  actoresSeleccionados = [];

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1)
    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if(this.table != undefined){
      this.table.renderRows();
    }
  }

  eliminar(actor){
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre === actor.nombre);
    this.actoresSeleccionados.splice(indice,1);
    this.table.renderRows();
  }

}
