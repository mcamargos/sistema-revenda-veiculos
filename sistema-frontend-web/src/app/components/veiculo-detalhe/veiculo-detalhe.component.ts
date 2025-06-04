import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo, VeiculoService } from '../../services/veiculo.service';

// Importações do Angular Material para componente standalone
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-veiculo-detalhe',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,      
    MatButtonModule,     
    MatIconModule,     
    MatListModule,       
    MatDividerModule,    
    MatChipsModule,      
    MatSnackBarModule     
  ],
  templateUrl: './veiculo-detalhe.component.html',
  styleUrl: './veiculo-detalhe.component.css'
})
export class VeiculoDetalheComponent implements OnInit {
  veiculo: Veiculo | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private veiculoService: VeiculoService,
    private snackBar: MatSnackBar 
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
            this.snackBar.open('Erro ao carregar detalhes do veículo. Verifique o console.', 'Fechar', {
              duration: 5000,
              panelClass: ['snackbar-error']
            });
            this.router.navigate(['/veiculos']); 
          }
        );
      } else {
        this.snackBar.open('ID do veículo não fornecido.', 'Fechar', {
          duration: 3000,
          panelClass: ['snackbar-warning'] 
        });
        this.router.navigate(['/veiculos']);
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/veiculos']);
  }
}