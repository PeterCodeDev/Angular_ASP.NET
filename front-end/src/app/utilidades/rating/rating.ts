import { Component,Input, OnInit } from '@angular/core';
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
  maximoRatingArr: number[] = [];
  votado = false;

  constructor(){}

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index : number): void{
    this.ratingSeleccionado = index + 1;

  }

  manejarMouseLeave(){
    if(!this.votado){
      this.ratingSeleccionado = 0;
    }
  }

  rate(index: number): void {
    this.ratingSeleccionado = index +1;
    this.votado = true;
  }
}
