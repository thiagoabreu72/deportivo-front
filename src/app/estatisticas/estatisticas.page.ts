import { Estatisticas } from './../models/estatisticas.models';
import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.page.html',
  styleUrls: ['./estatisticas.page.scss'],
})
export class EstatisticasPage implements OnInit {

  estatisticas: Estatisticas[];

  constructor(private service: ServicesService) { }

  ngOnInit() {
  }

  buscaEstatisticas() {
    this.service.buscaEstatisticas().subscribe(dados => {
      this.estatisticas = dados;
      console.table(this.estatisticas)
    });
  }

}
