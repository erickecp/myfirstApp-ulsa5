import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  listaProductos = [
    {
      codigo: 23456,
      nombre: 'Dalmata',
      precio: 18,
      descripcion: 'Pastelito de chocolate',
      imagen: ''
    },
    {
      codigo: 89098,
      nombre: 'Coca Cola',
      precio: 20,
      descripcion: 'Refresco de sabor cola',
      imagen: 'https://www.coca-cola.com/content/dam/onexp/mx/es/brands/coca-cola/coca-cola-original/Product-Information-Section-Coca-Cola-Original.jpg'
    },
    {
      codigo: 67878,
      nombre: 'Sopa Maruchan',
      precio: 18,
      descripcion: 'Sopa instantanea de camaron',
      imagen: ''
    },
  ];

}
