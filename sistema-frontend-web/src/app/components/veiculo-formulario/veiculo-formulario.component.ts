import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo, VeiculoService } from '../../services/veiculo.service';

@Component({
  selector: 'app-veiculo-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './veiculo-formulario.component.html',
  styleUrl: './veiculo-formulario.component.css'
})
export class VeiculoFormularioComponent implements OnInit {
  veiculoForm!: FormGroup;
  isEditMode = false;
  veiculoId: number | null = null;
  
  anos: number[] = []; // Array para armazenar os anos dinamicamente

  constructor(
    private veiculoService: VeiculoService,
    public router: Router, // 'public' para ser acessível no template para o botão Cancelar
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.gerarAnos(); // Popula o array de anos

    this.veiculoForm = new FormGroup({
      marca: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required), // Modelo volta a ser um input de texto
      ano: new FormControl(null, [Validators.required, Validators.min(1950), Validators.max(new Date().getFullYear() + 1)]),
      cor: new FormControl('', Validators.required),
      preco: new FormControl(null, [Validators.required, Validators.min(0)]),
      quilometragem: new FormControl(null, [Validators.required, Validators.min(0)]),
      tipoCombustivel: new FormControl('', Validators.required),
      cambio: new FormControl('', Validators.required),
      placa: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z]{3}\d[A-Z]\d{2}$/i)]), // Ex: ABC1D23 (padrão Mercosul)
      status: new FormControl('', Validators.required),
      descricao: new FormControl('')
    });

    // Lógica para modo de edição
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.isEditMode = true;
        this.veiculoId = +params.get('id')!; // O '+' converte para número
        this.veiculoService.getVeiculoById(this.veiculoId!).subscribe(
          veiculo => {
            this.veiculoForm.patchValue(veiculo); // Preenche o formulário com os dados do veículo
          },
          error => {
            console.error('Erro ao buscar veículo para edição:', error);
            alert('Erro ao carregar veículo para edição. Tente novamente.');
            this.router.navigate(['/veiculos']); // Volta para a lista se der erro
          }
        );
      }
    });
  }

  // Método para gerar o array de anos
  gerarAnos(): void {
    const anoAtual = new Date().getFullYear();
    for (let i = anoAtual + 1; i >= 1950; i--) { // Gerar de anoAtual+1 (para carro futuro) até 1950
      this.anos.push(i);
    }
  }

  // O método onMarcaChange NÃO EXISTE MAIS AQUI
  // O getter objectKeys NÃO EXISTE MAIS AQUI

  onSubmit(): void {
    if (this.veiculoForm.valid) {
      const veiculo: Veiculo = this.veiculoForm.value;

      if (this.isEditMode && this.veiculoId) {
        // Modo de edição
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
        // Modo de cadastro
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
      this.veiculoForm.markAllAsTouched(); // Marca todos os campos como "tocados" para exibir validações
    }
  }
}