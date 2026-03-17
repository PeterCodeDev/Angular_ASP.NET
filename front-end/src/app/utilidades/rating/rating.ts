import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  standalone:true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './rating.html',
  styleUrl: './rating.css',
})
export class Rating implements OnInit {
  @Input()
  maximoRating = 5;
  @Input()
  ratingSeleccionado = 0;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  maximoRatingArr: number[] = [];
  votado = false;
  ratingAnterior;

  constructor(){}

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index : number): void{
    this.ratingSeleccionado = index + 1;

  }

  manejarMouseLeave(){
    if(this.ratingAnterior !== 0){
      this.ratingSeleccionado = this.ratingAnterior;
    }else{
      this.ratingSeleccionado = 0;
    }
  }

  rate(index: number): void {
    this.ratingSeleccionado = index +1;
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }
}
