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

  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.buscaTimes();
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
      datajogo: "2022-01-01",
      golscasa: this.golsCasa,
      golsfora: this.golsFora
    }

    console.table(dados)
    /*this.service.inserirResultado(dados).subscribe(() => {
      console.log('não houve erros');
    });*/
  }

  dateValue = '';
  dateValue2 = '';
  /*confirm() {
    this.datetime.confirm();
  }

  reset() {
    this.datetime.reset();
  }*/

  formatDate(value: string) {
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

}
