import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-actor',
  standalone:true,
  imports: [],
  templateUrl: './editar-actor.html',
  styleUrl: './editar-actor.css',
})
export class EditarActor implements OnInit {
  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      alert(params.id);
    })
  }

}

