import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: 'login', icon: 'checkmark-circle'},
    { title: 'Jogador', url: 'jogador', icon: 'man'},
    { title: 'Times', url: 'folder/Times', icon: 'football'},
    { title: 'Estatísticas', url: 'folder/Estatísticas', icon: 'analytics'},
    { title: 'Resultados da Equipe', url: 'resultados', icon: 'book'},
    { title: 'Sair', url: '', icon: 'exit'}
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
