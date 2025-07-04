import { Routes } from '@angular/router';
import { VeiculoListaComponent } from './components/veiculo-lista/veiculo-lista.component';
import { VeiculoFormularioComponent } from './components/veiculo-formulario/veiculo-formulario.component';
import { VeiculoDetalheComponent } from './components/veiculo-detalhe/veiculo-detalhe.component';

export const routes: Routes = [
  { path: 'veiculos', component: VeiculoListaComponent },
  { path: 'veiculos/novo', component: VeiculoFormularioComponent },
  { path: 'veiculos/:id', component: VeiculoDetalheComponent },
  { path: 'veiculos/editar/:id', component: VeiculoFormularioComponent },
  { path: '', redirectTo: '/veiculos', pathMatch: 'full' },
  { path: '**', redirectTo: '/veiculos' }
];