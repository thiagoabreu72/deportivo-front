import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( public navControl: NavController, public router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log("Aqui")
    this.router.navigateByUrl('/jogador');
   // this.navControl.navigateForward('./jogador.page');
  }

}
