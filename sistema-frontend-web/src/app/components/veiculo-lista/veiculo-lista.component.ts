import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Veiculo, VeiculoService } from '../../services/veiculo.service';
import { Router } from '@angular/router';

// IMPORTS DO ANGULAR MATERIAL
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-veiculo-lista',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './veiculo-lista.component.html',
  styleUrl: './veiculo-lista.component.css'
})
export class VeiculoListaComponent implements OnInit {
  veiculos: Veiculo[] = [];

  displayedColumns: string[] = [
    'id',
    'marca',
    'modelo',
    'ano',
    'cor',
    'preco',
    'placa',
    'status',
    'acoes'
  ];

  constructor(
    private veiculoService: VeiculoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarVeiculos();
  }

  carregarVeiculos(): void {
    this.veiculoService.getVeiculos().subscribe(
      (data) => {
        this.veiculos = data;
      },
      (error) => {
        console.error('Erro ao carregar veículos:', error);
        alert('Erro ao carregar veículos. Verifique o console do navegador e o backend.');
      }
    );
  }

  onEdit(id: number | undefined): void {
    if (id) {
      this.router.navigate(['/veiculos/editar', id]);
    } else {
      alert('ID do veículo não encontrado para edição.');
    }
  }

  onDelete(id: number | undefined): void {
    if (id && confirm('Tem certeza que deseja excluir este veículo?')) {
      this.veiculoService.deleteVeiculo(id).subscribe(
        () => {
          alert('Veículo excluído com sucesso!');
          this.carregarVeiculos();
        },
        (error) => {
          console.error('Erro ao excluir veículo:', error);
          alert('Erro ao excluir veículo. Verifique o console.');
        }
      );
    }
  }
}