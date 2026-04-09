import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from "../../material/material-module";
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { actorPeliculaDTO } from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-autocomplete-actores',
  imports: [MaterialModule,ReactiveFormsModule,CommonModule, FormsModule],
  templateUrl: './autocomplete-actores.html',
  styleUrl: './autocomplete-actores.css',
})
export class AutocompleteActores implements OnInit{
  constructor(private actoresService:ActoresService){}

  control: FormControl = new FormControl();

  @Input()
  actoresSeleccionados:actorPeliculaDTO[] = [];

  actoresAMostrar: actorPeliculaDTO[]=[];

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
  this.control.valueChanges.subscribe(nombre => {
    // MAGIA: Solo buscar si el valor es un string (texto)
    if (typeof nombre === 'string' && nombre) {
      this.actoresService.obtenerPorNombre(nombre).subscribe(actores => {
        this.actoresAMostrar = actores;
      });
    }
  });
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
