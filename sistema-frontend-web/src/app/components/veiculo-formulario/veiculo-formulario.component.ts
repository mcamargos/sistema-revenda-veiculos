import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo, VeiculoService } from '../../services/veiculo.service';

// IMPORTS DO ANGULAR MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-veiculo-formulario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './veiculo-formulario.component.html',
  styleUrl: './veiculo-formulario.component.css'
})
export class VeiculoFormularioComponent implements OnInit {
  veiculoForm!: FormGroup;
  isEditMode = false;
  veiculoId: number | null = null;
  
  anos: number[] = [];

  constructor(
    private veiculoService: VeiculoService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.gerarAnos();

    this.veiculoForm = new FormGroup({
      marca: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required),
      ano: new FormControl(null, [Validators.required, Validators.min(1950), Validators.max(new Date().getFullYear() + 1)]),
      cor: new FormControl('', Validators.required),
      preco: new FormControl(null, [Validators.required, Validators.min(0)]),
      quilometragem: new FormControl(null, [Validators.required, Validators.min(0)]),
      tipoCombustivel: new FormControl('', Validators.required),
      cambio: new FormControl('', Validators.required),
      placa: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z]{3}\d[A-Z]\d{2}$/i)]),
      status: new FormControl('', Validators.required),
      descricao: new FormControl('')
    });

    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.isEditMode = true;
        this.veiculoId = +params.get('id')!;
        this.veiculoService.getVeiculoById(this.veiculoId!).subscribe(
          veiculo => {
            this.veiculoForm.patchValue(veiculo);
          },
          error => {
            console.error('Erro ao buscar veículo para edição:', error);
            alert('Erro ao carregar veículo para edição. Tente novamente.');
            this.router.navigate(['/veiculos']);
          }
        );
      }
    });
  }

  gerarAnos(): void {
    const anoAtual = new Date().getFullYear();
    for (let i = anoAtual + 1; i >= 1950; i--) {
      this.anos.push(i);
    }
  }

  onSubmit(): void {
    if (this.veiculoForm.valid) {
      const veiculo: Veiculo = this.veiculoForm.value;

      if (this.isEditMode && this.veiculoId) {
        this.veiculoService.updateVeiculo(this.veiculoId, veiculo).subscribe(
          () => {
            alert('Veículo atualizado com sucesso!');
            this.router.navigate(['/veiculos']);
          },
          error => {
            console.error('Erro ao atualizar veículo:', error);
            alert('Erro ao atualizar veículo. Verifique o console.');
          }
        );
      } else {
        this.veiculoService.createVeiculo(veiculo).subscribe(
          () => {
            alert('Veículo cadastrado com sucesso!');
            this.router.navigate(['/veiculos']);
          },
          error => {
            console.error('Erro ao cadastrar veículo:', error);
            alert('Erro ao cadastrar veículo. Verifique o console.');
          }
        );
      }
    } else {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
      this.veiculoForm.markAllAsTouched();
    }
  }
}