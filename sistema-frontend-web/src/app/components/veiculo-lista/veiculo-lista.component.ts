import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Necessário para usar routerLink no template
import { Veiculo, VeiculoService } from '../../services/veiculo.service';
import { Router } from '@angular/router'; // Importe o Router para navegação programática

@Component({
  selector: 'app-veiculo-lista',
  standalone: true,
  imports: [CommonModule, RouterLink], // MANTENHA RouterLink AQUI pois é usado no HTML nos botões Detalhes/Editar
  templateUrl: './veiculo-lista.component.html',
  styleUrl: './veiculo-lista.component.css'
})
export class VeiculoListaComponent implements OnInit {
  veiculos: Veiculo[] = [];

  constructor(
    private veiculoService: VeiculoService,
    private router: Router // Injeta o Router
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

  // Método para navegar para a tela de edição
  onEdit(id: number | undefined): void {
    if (id) {
      this.router.navigate(['/veiculos/editar', id]);
    } else {
      alert('ID do veículo não encontrado para edição.');
    }
  }

  // Método para lidar com a exclusão de um veículo
  onDelete(id: number | undefined): void {
    if (id && confirm('Tem certeza que deseja excluir este veículo?')) {
      this.veiculoService.deleteVeiculo(id).subscribe(
        () => {
          alert('Veículo excluído com sucesso!');
          this.carregarVeiculos(); // Recarrega a lista para mostrar as mudanças
        },
        (error) => {
          console.error('Erro ao excluir veículo:', error);
          alert('Erro ao excluir veículo. Verifique o console.');
        }
      );
    }
  }
}