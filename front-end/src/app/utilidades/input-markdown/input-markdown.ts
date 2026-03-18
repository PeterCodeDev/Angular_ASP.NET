import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-input-markdown',
  standalone:true,
  imports: [MaterialModule],
  templateUrl: './input-markdown.html',
  styleUrl: './input-markdown.css',
})
export class InputMarkdown{}
