import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Veiculo {
  id?: number;
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
  providedIn: 'root'
})
export class VeiculoService {
  private apiUrl = 'http://localhost:8080/api/veiculos';

  constructor(private http: HttpClient) { }

  getVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.apiUrl);
  }

  // >>>>>>>>>>>>> LINHA CORRIGIDA AQUI <<<<<<<<<<<<<
  getVeiculoById(id: number): Observable<Veiculo> {
    // A string da URL deve ser delimitada por CRASES (`) e a variável interpolada por ${}
    return this.http.get<Veiculo>(`${this.apiUrl}/${id}`);
  }
  
  createVeiculo(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.apiUrl, veiculo);
  }
  
  // >>>>>>>>>>>>> LINHA CORRIGIDA AQUI <<<<<<<<<<<<<
  updateVeiculo(id: number, veiculo: Veiculo): Observable<Veiculo> {
    // A string da URL deve ser delimitada por CRASES (`) e a variável interpolada por ${}
    return this.http.put<Veiculo>(`${this.apiUrl}/${id}`, veiculo);
  }
  
  // >>>>>>>>>>>>> LINHA CORRIGIDA AQUI <<<<<<<<<<<<<
  deleteVeiculo(id: number): Observable<void> {
    // A string da URL deve ser delimitada por CRASES (`) e a variável interpolada por ${}
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}