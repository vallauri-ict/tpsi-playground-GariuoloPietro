import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = ["Barack Obama","Lewis Hamilton","Scarlett Johansson","Antonio Conte","Marcello Rossi","Alberto Barbero","Debora Servetti","Paolo Cortese","Paolino Paperino"];
  myName = 'Pierto';

  changeName(){
    this.myName = this.names[this.getRandomInt(0,8)];
  }

   getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
