import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { VeiculoListaComponent } from './components/veiculo-lista/veiculo-lista.component'; // Importe esta linha

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, VeiculoListaComponent], // Adicione VeiculoListaComponent aqui
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'sistema-frontend-web';
}