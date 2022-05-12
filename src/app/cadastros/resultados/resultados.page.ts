import { Jogadores } from './../../models/jogadores.model';
import { ServicesService } from './../../services.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Times } from '../../models/times.models';

import { IonDatetime } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  times: Times[];
  timeCasa: string;
  timeFora: string;

  /* */
  idTimeCasa: number;
  idTimeFora: number;
  golsCasa: number = 0;
  golsFora: number = 0;

  /* */
  jogadores: Jogadores[];
  elencoJogo: any[];
  diaJogo: any;

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.buscaTimes();
    this.buscaJogadores();
  }

  buscaTimes() {
    this.service.buscaTimes().subscribe(retorno => {
      this.times = retorno;
    });
  }

  inserirResultado() {

    const dados = {
      idtimecasa: this.idTimeCasa,
      idtimefora: this.idTimeFora,
      datajogo: this.diaJogo,
      golscasa: this.golsCasa,
      golsfora: this.golsFora
    }

    console.table(dados);
    console.table(this.elencoJogo)
    /*this.service.inserirResultado(dados).subscribe(() => {
      console.log('não houve erros');
    });*/
  }

  dateValue = '';
  dateValue2 = '';

  formatDate(value: string) {
    this.diaJogo = format(parseISO(value), 'dd/MM/yyyy');
    return format(parseISO(value), 'dd/MM/yyyy');
  }

  isDateEnabled(dateIsoString: string) {
    const date = new Date(dateIsoString);
    if (getDate(date) === 1 && getMonth(date) === 0 && getYear(date) === 2022) {
      // Disables January 1, 2022.
      return false;
    }
    return true;
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

  lista() {
    console.table(this.elencoJogo);
  }

}
