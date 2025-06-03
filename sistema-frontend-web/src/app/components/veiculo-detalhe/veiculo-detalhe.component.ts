import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo, VeiculoService } from '../../services/veiculo.service';

// IMPORTS DO ANGULAR MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-veiculo-detalhe',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
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
        const veiculoId = +idParam;
        this.veiculoService.getVeiculoById(veiculoId).subscribe(
          veiculo => {
            this.veiculo = veiculo;
          },
          error => {
            console.error('Erro ao carregar detalhes do veículo:', error);
            alert('Erro ao carregar detalhes do veículo. Verifique o console.');
            this.router.navigate(['/veiculos']);
          }
        );
      } else {
        alert('ID do veículo não fornecido.');
        this.router.navigate(['/veiculos']);
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/veiculos']);
  }
}