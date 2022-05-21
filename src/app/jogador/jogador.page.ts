import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-jogador',
  templateUrl: './jogador.page.html',
  styleUrls: ['./jogador.page.scss'],
})
export class JogadorPage implements OnInit {

  visible: boolean = true;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }


  constructor() { }

  ngOnInit() { }


}







