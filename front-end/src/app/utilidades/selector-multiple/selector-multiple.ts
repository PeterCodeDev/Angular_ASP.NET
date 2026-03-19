import { Component, Input, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { CommonModule } from '@angular/common';
import { MultipleSelectorModel } from './MultipleSelectorModel';

@Component({
  selector: 'app-selector-multiple',
  standalone:true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './selector-multiple.html',
  styleUrl: './selector-multiple.css',
})
export class SelectorMultiple implements OnInit{
  constructor(){

  }
  @Input()
  Seleccionados: MultipleSelectorModel[]=[];

  @Input()
  NoSeleccionados: MultipleSelectorModel[]=[];

  ngOnInit(): void {
    
  }

  seleccionar(item: MultipleSelectorModel, index:number){
    this.Seleccionados.push(item);
    this.NoSeleccionados.splice(index,1)
  }

  deseleccionar(item:MultipleSelectorModel, index:number){
    this.NoSeleccionados.push(item);
    this.Seleccionados.splice(index,1)
  }

  seleccionarTodo(){
    this.Seleccionados.push(...this.NoSeleccionados);
    this.NoSeleccionados = [];
  }

  deseleccionarTodo(){
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados = [];
  }
}
