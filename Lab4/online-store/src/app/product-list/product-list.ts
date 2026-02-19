import { Component,signal,computed } from '@angular/core';
import { products } from '../data/product';
import { Product } from '../models/product.model';
import {CommonModule} from '@angular/common';
import {ProductCard} from '../product-card/product-card';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard,FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',

})
export class ProductList {

  products: Product[] = products;

  name = "";

  favoriteIds = signal<number[]>([]);
  favoriteCount = computed(() => this.favoriteIds().length);
  favoriteProducts = computed(() =>  this.products.filter(p => this.favoriteIds().includes(p.id)));

  toggleFavorite(productId: number) {
    console.log("TOGGLE", productId);
    this.favoriteIds.update(ids =>
      ids.includes(productId)
        ? ids.filter(id => id !== productId)
        : [...ids, productId]
    );
    console.log("FAVORITES NOW:", this.favoriteIds());
  }

  isFavorite(productId: number) {
    return this.favoriteIds().includes(productId);
  }

  showFavorites = signal(false);

  displayedProducts = computed(() =>
    this.showFavorites() ? this.favoriteProducts() : this.products
  );

  showFavoriteOnly(state: boolean) {
     this.showFavorites.set(state);
    }

}
