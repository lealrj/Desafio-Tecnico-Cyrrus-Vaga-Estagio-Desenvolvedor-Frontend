import { Routes } from '@angular/router';

export const routes: Routes = [
 {
  path: '',
  loadComponent: () => import('./pages/minhas-criancas/minhas-criancas.page').then(m => m.MinhasCriancasPage)
 },
 {
  path: 'criancas/adicionar',
  loadComponent: () => import('./pages/adicionar-crianca/adicionar-crianca.page').then(m => m.AdicionarCriancaPage)
 },
 {
  path: 'criancas/:id/editar',
  loadComponent: () => import('./pages/editar-crianca/editar-crianca.page').then(m => m.EditarCriancaPage)
 },
 {
  path: 'criancas/:id',
  loadComponent: () => import('./pages/carteira-vacinacao/carteira-vacinacao.page').then(m => m.CarteiraVacinacaoPage)
 },
{
  path: 'campanhas',
  loadComponent: () => import('./pages/campanhas/campanhas.page').then(m => m.CampanhasPage)
},
];
