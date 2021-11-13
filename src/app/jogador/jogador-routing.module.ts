import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogadorPage } from './jogador.page';

const routes: Routes = [
  {
    path: '',
    component: JogadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogadorPageRoutingModule {}
