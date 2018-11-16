import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string;
  comida: string[];

  constructor(public navCtrl: NavController) {
    this.title = "Comida";
    this.comida = ['Pizza', 'Hamburguesa', 'Nachos', 'Tortilla', 'Ensalada', 'Lentejas', 'Sopa'];
  }
}
