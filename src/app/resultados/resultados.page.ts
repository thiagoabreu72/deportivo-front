import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.buscaResultados();
  }

  buscaResultados() {
    this.service.buscaResultados().subscribe(dados => {
      console.log(dados);
    })
  }


}
