import { Artilheiros } from 'src/app/models/artilheiros.model';
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
  artilheiros: Artilheiros[];

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.buscaResultados();
  }

  buscaResultados() {
    this.service.buscaResultados().subscribe(dados => {
      this.resultados = dados;
    })
  }

  buscaArtilheirosPorJogo(idJogo) {
    this.service.buscaArtilheirosPorJogos(idJogo).subscribe(dados => {
      this.artilheiros = dados;
    });
  }
}
