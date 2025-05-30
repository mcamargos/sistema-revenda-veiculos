import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe CommonModule para usar ngFor
import { Veiculo, VeiculoService } from '../../services/veiculo.service'; // Importe o serviço e a interface Veiculo

@Component({
  selector: 'app-veiculo-lista',
  standalone: true, // Indica que é um componente standalone
  imports: [CommonModule], // Adicione CommonModule aqui
  templateUrl: './veiculo-lista.component.html', // Caminho para o HTML
  styleUrl: './veiculo-lista.component.css'   // Caminho para o CSS
})
export class VeiculoListaComponent implements OnInit {
  veiculos: Veiculo[] = []; // Array para armazenar os veículos

  constructor(private veiculoService: VeiculoService) { } // Injeta o serviço

  ngOnInit(): void {
    this.carregarVeiculos(); // Carrega os veículos quando o componente é inicializado
  }

  carregarVeiculos(): void {
    this.veiculoService.getVeiculos().subscribe(
      (data) => {
        this.veiculos = data; // Atribui os dados recebidos ao array de veículos
      },
      (error) => {
        console.error('Erro ao carregar veículos:', error);
        // Implemente um tratamento de erro mais amigável aqui (ex: exibir mensagem para o usuário)
      }
    );
  }
}