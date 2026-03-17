/*import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Rating } from "../utilidades/rating/rating";
import { clearInterval } from 'timers';

@Component({
  selector: 'app-ciclo-de-vida',
  standalone:true,
  imports: [Rating],
  templateUrl: './ciclo-de-vida.html',
  styleUrl: './ciclo-de-vida.css',
})
export class CicloDeVida implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit{
//No es un evento del ciclo de vida de un componente
  constructor(private changeDetectorRef: ChangeDetectorRef){}

  @Input()
  titulo:string;

  @ViewChild(Rating)
  ratingComponent : Rating;

  timer: ReturnType<typeof setInterval>;


ngOnChanges(changes: SimpleChanges): void {
console.log('on changes');
console.log(changes);
}
ngOnDestroy(): void {
console.log('on destroy');
clearInterval(this.timer);
}
ngDoCheck(): void {
console.log('on check');
}
ngAfterViewInit(): void {
console.log('on after view init');
this.ratingComponent.ratingSeleccionado = 3;
this.changeDetectorRef.detectChanges();
}
ngOnInit(): void {
  console.log('on init');
  this.timer = setInterval(() => console.log(new Date(), 1000));
}

}*/
