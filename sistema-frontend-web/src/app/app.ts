import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar'; 

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule 
  ],
  templateUrl: './app.html', 
  styleUrl: './app.css' 
})
export class App { 
  title = 'Sistema de Gestão de Revenda de Veículos'; 
}