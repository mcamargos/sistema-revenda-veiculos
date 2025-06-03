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

  getVeiculoById(id: number): Observable<Veiculo> {
    return this.http.get<Veiculo>(`${this.apiUrl}/${id}`);
  }

  createVeiculo(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.apiUrl, veiculo);
  }

  updateVeiculo(id: number, veiculo: Veiculo): Observable<Veiculo> {
    return this.http.put<Veiculo>(`${this.apiUrl}/${id}`, veiculo);
  }

  deleteVeiculo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}