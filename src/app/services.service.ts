import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  rotaJogador: string = 'jogador';
  rotaTimes: string = 'time';
  rotaJogos: string = 'jogos';
  rotaArtilheiros: string = 'artilheiros';
  //url: string = 'http://localhost:3003/';
  url: string = 'https://deportivo-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

  buscaJogadores(): Observable<any> {
    let urlTodos = this.url + this.rotaJogador + "/todos";
    return this.http.get<any>(urlTodos);
  }

  buscaTimes(): Observable<any> {
    let urlTimes = this.url + this.rotaTimes;
    return this.http.get<any>(urlTimes);
  }

  inserirJogos(dados: object): Observable<any> {
    let urlJogos = this.url + this.rotaJogos;
    return this.http.post<any>(urlJogos, dados);
  }

  inserirArtilheiros(dados: Object): Observable<any> {
    let urlJogos = this.url + this.rotaArtilheiros;
    return this.http.post<any>(urlJogos, dados);
  }

  buscaArtilheirosPorJogos(idJogo): Observable<any> {
    let urlArtilheiros = `${this.url}${this.rotaJogos}/${this.rotaArtilheiros}/${idJogo}`;
    return this.http.get<any>(urlArtilheiros);
  }

  buscaResultados(): Observable<any> {
    let urlJogos = this.url + this.rotaJogos + '/todos';
    return this.http.get<any>(urlJogos);
  }

  buscaEstatisticas(): Observable<any> {
    let urlJogos = this.url + this.rotaJogos + '/estatistica';
    return this.http.get<any>(urlJogos);
  }

}
