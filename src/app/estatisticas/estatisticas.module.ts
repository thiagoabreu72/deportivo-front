import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstatisticasPageRoutingModule } from './estatisticas-routing.module';

import { EstatisticasPage } from './estatisticas.page';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstatisticasPageRoutingModule,
    HighchartsChartModule
  ],
  declarations: [EstatisticasPage]
})
export class EstatisticasPageModule {}
