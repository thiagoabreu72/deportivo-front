import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public rotaJogador: string = 'jogador';
  public url: string = 'http://localhost:3003/';

  constructor(private http: HttpClient) { }

  buscaJogador() {

  }

  buscaJogadores(): Observable<any> {
    let urlTodos = this.url + this.rotaJogador + "/todos";
    console.log(urlTodos)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(urlTodos, { headers });
  }

}
