import { Jogadores } from './../models/jogadores.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../services.service';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.page.html',
  styleUrls: ['./elenco.page.scss'],
})
export class ElencoPage implements OnInit {
  @ViewChild(IonAccordionGroup, { static: true }) accordionGroup: IonAccordionGroup;

  jogadores: Jogadores[];

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.buscaJogadores();
  }

  async buscaJogadores() {
    try {
      await this.service.buscaJogadores().subscribe((retorno) => {
        this.jogadores = retorno;
        return retorno;
      });
    } catch (error) {
    }
  }

}
