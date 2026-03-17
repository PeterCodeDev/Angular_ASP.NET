import { Component } from '@angular/core';
import { MaterialModule } from "../material/material-module";
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-menu',
  standalone:true,
  imports: [MaterialModule, MatAnchor, MatIcon],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {}
