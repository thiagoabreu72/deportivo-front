import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Jogador', url: 'folder/Jogador', icon: 'man'},
    { title: 'Times', url: 'folder/Times', icon: 'football'},
    { title: 'Estatísticas', url: 'folder/Estatísticas', icon: 'analytics'},
    { title: 'Resultados da Equipe', url: 'folder/Resultados', icon: 'book'}
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
