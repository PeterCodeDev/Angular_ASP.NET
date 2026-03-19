import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { MarkdownComponent } from "ngx-markdown";

@Component({
  selector: 'app-input-markdown',
  standalone:true,
  imports: [MaterialModule, MarkdownComponent],
  templateUrl: './input-markdown.html',
  styleUrl: './input-markdown.css',
})
export class InputMarkdown implements OnInit{

  contenidoMarkdown = '';


  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  constructor(){}

  ngOnInit(): void {
    
  }

  inputTextArea(texto:string){
    this.contenidoMarkdown = texto;
    this.changeMarkdown.emit(texto);
  }

}
