import { Routes } from '@angular/router';
import { VeiculoListaComponent } from './components/veiculo-lista/veiculo-lista.component';
import { VeiculoFormularioComponent } from './components/veiculo-formulario/veiculo-formulario.component';

export const routes: Routes = [
  { path: 'veiculos', component: VeiculoListaComponent },
  { path: 'veiculos/novo', component: VeiculoFormularioComponent },
  { path: 'veiculos/editar/:id', component: VeiculoFormularioComponent }, // Rota para edição
  { path: '', redirectTo: '/veiculos', pathMatch: 'full' }, // Redireciona a raiz para a lista
  { path: '**', redirectTo: '/veiculos' } // Redireciona rotas não encontradas para a lista
];