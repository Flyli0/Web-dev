import { Component } from '@angular/core';
import { products } from '../data/product';
import { Product } from '../models/product.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',

})
export class ProductList {
  products: Product[] = products;
  async shareProduct(link: string) {
    if (navigator.share) {
      await navigator.share({
        title: "Kaspi Product",
        url: link
      });
    } else {
      navigator.clipboard.writeText(link);
      alert("Share не поддерживается, ссылка скопирована!");
    }
  }
}
