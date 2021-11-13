import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogadorPageRoutingModule } from './jogador-routing.module';

import { JogadorPage } from './jogador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogadorPageRoutingModule
  ],
  declarations: [JogadorPage]
})
export class JogadorPageModule {}
