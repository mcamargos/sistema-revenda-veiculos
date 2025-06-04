import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { Veiculo, VeiculoService } from '../../services/veiculo.service';
import { MatTableDataSource } from '@angular/material/table';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator'; 
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { CustomPaginatorIntl } from '../../shared/custom-paginator-intl'; 

@Component({
  selector: 'app-veiculo-lista',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: CustomPaginatorIntl } // Adicione esta linha
  ],
  templateUrl: './veiculo-lista.component.html',
  styleUrl: './veiculo-lista.component.css'
})
export class VeiculoListaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'marca', 'modelo', 'ano', 'cor', 'preco', 'placa', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Veiculo>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private veiculoService: VeiculoService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.carregarVeiculos();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  carregarVeiculos(): void {
    this.veiculoService.getVeiculos().subscribe(
      (data: Veiculo[]) => {
        this.dataSource.data = data;
      },
      (error) => {
        console.error('Erro ao carregar veículos:', error);
        this.snackBar.open('Erro ao carregar veículos. Verifique o console do navegador e o backend.', 'Fechar', { duration: 5000 });
      }
    );
  }

  onEdit(id: number | undefined): void {
    if (id) {
      this.router.navigate(['/veiculos/editar', id]);
    } else {
      this.snackBar.open('ID do veículo não encontrado para edição.', 'Fechar', { duration: 3000 });
    }
  }

  onDelete(id: number | undefined): void {
    if (id && confirm('Tem certeza que deseja excluir este veículo?')) {
      this.veiculoService.deleteVeiculo(id).subscribe(
        () => {
          this.snackBar.open('Veículo excluído com sucesso!', 'Fechar', { duration: 3000 });
          this.carregarVeiculos();
        },
        (error) => {
          console.error('Erro ao excluir veículo:', error);
          this.snackBar.open('Erro ao excluir veículo. Verifique o console.', 'Fechar', { duration: 5000 });
        }
      );
    }
  }

  getStatusColor(status: string): 'primary' | 'accent' | 'warn' | '' {
    switch (status.toUpperCase()) {
      case 'DISPONIVEL':
        return 'accent';
      case 'VENDIDO':
        return 'primary';
      case 'RESERVADO':
        return '';
      case 'MANUTENCAO':
        return 'warn';
      default:
        return '';
    }
  }
}