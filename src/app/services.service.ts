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
  //url: string = 'http://localhost:3003/';
  url: string = 'https://deportivo-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

  buscaJogador() {

  }

  buscaJogadores(): Observable<any> {
    let urlTodos = this.url + this.rotaJogador + "/todos";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(urlTodos, { headers });
  }

  buscaTimes(): Observable<any> {
    let urlTimes = this.url + this.rotaTimes;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<any>(urlTimes, { headers });
  }

  inserirResultado(dados: object): Observable<any> {
    let urlJogos = this.url + this.rotaJogos;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(urlJogos, dados);
  }

}
