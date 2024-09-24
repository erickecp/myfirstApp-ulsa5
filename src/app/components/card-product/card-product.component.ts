import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  @Input({required: true}) producto: any;
  private _routerchido = inject(Router);
  verInfo(id: string){
    console.log('Ver info del producto con ID:' + id);
    this._routerchido.navigateByUrl('/product/'+id);
  }
}
