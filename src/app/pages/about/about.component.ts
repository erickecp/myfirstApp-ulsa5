import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  favoritas = ['Donkey Kong', 'League Of Legends', 'Pokemon Blanco','Hollow Knigth','Farcry 3'];
  ver = false;
  iAm = {
    name: 'Erick Eduardo',
    lastName: ' Corro Pacheco',
    age: 31,
    desription: 'Soy Ing.Ti me gusta jugar League Of Legends, me gusta One Piece, soy fan del heavy metal y me gusta el framework de Angular 🐱‍🏍'
  };
  verMas(){
    console.log('Click!!');
    this.ver = !this.ver;
  }
}
