import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Jogador',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'jogador',
    loadChildren: () => import('./jogador/jogador.module').then(m => m.JogadorPageModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('./resultados/resultados.module').then(m => m.ResultadosPageModule)
  },
  {
    path: 'estatisticas',
    loadChildren: () => import('./estatisticas/estatisticas.module').then(m => m.EstatisticasPageModule)
  },
  {
    path: 'elenco',
    loadChildren: () => import('./elenco/elenco.module').then(m => m.ElencoPageModule)
  },
  {
    path: 'cadastro/resultados',
    loadChildren: () => import('./cadastros/resultados/resultados.module').then(m => m.ResultadosPageModule)
  },
  {
    path: 'times',
    loadChildren: () => import('./cadastros/times/times.module').then(m => m.TimesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
