import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { ProductsService } from '../../services/products.service';
import { product } from '../../app.interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productos:product[] =[];
  private productS = inject(ProductsService);
  constructor(){
    this.productos = this.productS.getProductos();
  }
}
