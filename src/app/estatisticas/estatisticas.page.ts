import { Estatisticas } from './../models/estatisticas.models';
import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.page.html',
  styleUrls: ['./estatisticas.page.scss'],
})
export class EstatisticasPage implements OnInit {

  estatisticas: Estatisticas[];
  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: { text: 'Gols Marcados por partida' },
    series: [
      {
        name: 'Gols',
        type: 'line',
        data: [{
          name: '05/04/2022',
          y: 3
        },
        {
          name: '05/04/2022',
          y: 4
        }]//[1, 2, 5, 4, 3],
      },
    ],
  };


  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.buscaEstatisticas();
  }


  buscaEstatisticas() {
    this.service.buscaEstatisticas().subscribe(dados => {
      this.estatisticas = dados;
      //console.table(this.estatisticas)
    });
  }
}