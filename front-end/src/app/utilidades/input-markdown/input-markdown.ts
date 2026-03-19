import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { MarkdownComponent } from "ngx-markdown";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-markdown',
  standalone:true,
  imports: [MaterialModule, MarkdownComponent,FormsModule],
  templateUrl: './input-markdown.html',
  styleUrl: './input-markdown.css',
})
export class InputMarkdown implements OnInit{
  @Input()
  contenidoMarkdown = '';

  @Input()
  placeHolderTextArea:string = 'Texto';

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  constructor(){}

  ngOnInit(): void {
    console.log(this.contenidoMarkdown);
  }



}
