import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo, VeiculoService } from '../../services/veiculo.service';

@Component({
  selector: 'app-veiculo-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './veiculo-detalhe.component.html',
  styleUrl: './veiculo-detalhe.component.css'
})
export class VeiculoDetalheComponent implements OnInit {
  veiculo: Veiculo | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private veiculoService: VeiculoService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        const veiculoId = +idParam; // Converte a string do ID para número
        this.veiculoService.getVeiculoById(veiculoId).subscribe(
          veiculo => {
            this.veiculo = veiculo; // Atribui o veículo encontrado
          },
          error => {
            console.error('Erro ao carregar detalhes do veículo:', error);
            alert('Erro ao carregar detalhes do veículo. Verifique o console.');
            this.router.navigate(['/veiculos']); // Volta para a lista se der erro
          }
        );
      } else {
        alert('ID do veículo não fornecido.');
        this.router.navigate(['/veiculos']); // Volta para a lista se não tiver ID
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/veiculos']); // Botão para voltar para a lista
  }
}