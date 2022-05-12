import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElencosPageRoutingModule } from './elencos-routing.module';

import { ElencosPage } from './elencos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElencosPageRoutingModule
  ],
  declarations: [ElencosPage]
})
export class ElencosPageModule {}
