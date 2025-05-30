import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importe HttpClient
import { Observable } from 'rxjs'; // Importe Observable

// Definição de uma interface para o Veiculo (boa prática para tipagem)
export interface Veiculo {
  id?: number; // O id é opcional porque não existe ao criar um novo veículo
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
  preco: number;
  quilometragem: number;
  tipoCombustivel: string;
  cambio: string;
  placa: string;
  status: string;
  descricao: string;
}

@Injectable({
  providedIn: 'root' // Isso faz com que o serviço seja um singleton e esteja disponível em toda a aplicação
})
export class VeiculoService {
  private apiUrl = 'http://localhost:8080/api/veiculos'; // URL base da sua API Spring Boot

  constructor(private http: HttpClient) { }

  // Métodos CRUD
  getVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.apiUrl);
  }

  getVeiculoById(id: number): Observable<Veiculo> {
    return this.http.get<Veiculo>(`<span class="math-inline">\{this\.apiUrl\}/</span>{id}`);
  }

  createVeiculo(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.apiUrl, veiculo);
  }

  updateVeiculo(id: number, veiculo: Veiculo): Observable<Veiculo> {
    return this.http.put<Veiculo>(`<span class="math-inline">\{this\.apiUrl\}/</span>{id}`, veiculo);
  }

  deleteVeiculo(id: number): Observable<void> {
    return this.http.delete<void>(`<span class="math-inline">\{this\.apiUrl\}/</span>{id}`);
  }
}