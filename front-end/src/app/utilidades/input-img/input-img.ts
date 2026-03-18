import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { toBase64 } from '../utilidades';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-img',
  standalone:true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './input-img.html',
  styleUrl: './input-img.css',
})
export class InputImg implements OnInit{
constructor(){}

imagenBase64:string;

@Input()
urlImagenActual: string;

@Output()
archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>();

ngOnInit(): void {
  
}
change(event){
  if(event.target.files.length > 0){
    const file: File = event.target.files[0];
    toBase64(file).then((value:string) =>this.imagenBase64 = value)
    .catch(error => console.log(error));
    this.archivoSeleccionado.emit(file);
    this.urlImagenActual = null;
  }
}
}
