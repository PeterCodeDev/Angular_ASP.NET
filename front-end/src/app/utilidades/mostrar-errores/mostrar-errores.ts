import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-mostrar-errores',
  standalone:true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './mostrar-errores.html',
  styleUrl: './mostrar-errores.css',
})
export class MostrarErrores implements OnInit{
  constructor(){}

  @Input()
  errores :string[]=[];
  
  ngOnInit(): void {
    
  }
}
