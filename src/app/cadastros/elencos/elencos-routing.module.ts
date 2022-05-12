import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElencosPage } from './elencos.page';

const routes: Routes = [
  {
    path: '',
    component: ElencosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElencosPageRoutingModule {}
