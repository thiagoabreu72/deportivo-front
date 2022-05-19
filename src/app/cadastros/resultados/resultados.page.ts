import { Jogadores } from './../../models/jogadores.model';
import { ServicesService } from './../../services.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Times } from '../../models/times.models';

import { IonDatetime } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { Artilheiros } from 'src/app/models/artilheiros.model';

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
  idTimeCasa: number;
  idTimeFora: number;
  golsCasa: number = undefined;
  golsFora: number = undefined;
  jogadores: Jogadores[];
  elencoJogo: any[];
  diaJogo: any;
  idJogo: number;
  dadosArtilheiros: Artilheiros;

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

  async inserirResultado() {
    await this.inserirJogos();
    setTimeout(() => {
      this.inserirArtilheiros();
    }, 1000);
    this.limpaCampos();
  }


  async inserirJogos() {

    const dados = {
      idtimecasa: this.idTimeCasa,
      idtimefora: this.idTimeFora,
      datajogo: this.diaJogo,
      golscasa: this.golsCasa,
      golsfora: this.golsFora
    }

    await this.service.inserirJogos(dados).subscribe(retorno => {
      this.idJogo = retorno.idjogo;
      alert('Registro inserido com sucesso.');
    }, (error) => {
      alert('Houve erro ao inserir resultados.');
    });
  }

  inserirArtilheiros() {

    let elencoFiltrado = this.elencoJogo.filter(novo => {
      return novo.gols > 0;
    });

    for (let artilharia of elencoFiltrado) {
      this.dadosArtilheiros = {
        idjogo: this.idJogo,
        idtime: 1,
        idjogador: artilharia.id,
        qtdgols: artilharia.gols,
        craque: 0
      }

      this.service.inserirArtilheiros(this.dadosArtilheiros).subscribe(() => { }, (error) => {
        alert('Houve erro ao inserir artilheiros.');
      });
    }
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
    await this.service.buscaJogadores().subscribe((retorno) => {
      this.jogadores = retorno;
    });
  }

  lista() {
    console.table(this.elencoJogo);
  }

  limpaCampos() {
    this.timeCasa = '';
    this.timeFora = '';
    this.idTimeCasa = 0;
    this.idTimeFora = 0;
    this.golsCasa = undefined;
    this.golsFora = undefined;
    this.diaJogo = '';
    this.idJogo = 0;
    this.elencoJogo = [];
    this.jogadores = [];
    this.ngOnInit();
  }

}
