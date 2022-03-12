import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.page.html',
  styleUrls: ['./elenco.page.scss'],
})
export class ElencoPage implements OnInit {

  private retorno;

  constructor(private service: ServicesService) {
    

  }

  ngOnInit() {
  }

  async buscaJogadores() {
    try {
      await this.service.buscaJogadores().subscribe((retorno) => {
        console.log(retorno);
        this.retorno = retorno;
        return retorno;
      });

    } catch (error) {

    }
  }

}
