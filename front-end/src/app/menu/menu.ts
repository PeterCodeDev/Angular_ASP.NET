import { Component } from '@angular/core';
import { MaterialModule } from "../material/material-module";
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone:true,
  imports: [MaterialModule, MatAnchor, MatIcon, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {}
