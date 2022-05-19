import { Resultados } from './../models/resultados.model';
import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

  resultados: Resultados[];

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.buscaResultados();
  }

  buscaResultados() {
    this.service.buscaResultados().subscribe(dados => {
      this.resultados = dados;
      console.log(dados);
    })
  }
}
