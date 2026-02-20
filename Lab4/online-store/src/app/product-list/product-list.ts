import { Component,signal,computed,input,output } from '@angular/core';
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

  products = signal<Product[]>(products);

  name = "";
  showingCategory = input<number>();
  favoriteIds = signal<number[]>([]);
  favoriteCount = computed(() => this.favoriteIds().length);
  favoriteProducts = computed(() =>  this.products().filter(p => this.favoriteIds().includes(p.id)));




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



  remove(id: number) {
    this.products.update(list => list.filter(p => p.id != id));
    console.log("REMOVE", this.products);
  }


  filteredProducts = computed(()=> {
    const category = this.showingCategory();
    if(!category)return [];
    return this.products().filter(p => p.categoryId === category);
  });
  filterCount = output<number>;


  showFavorites = signal(false);

  displayedProducts = computed(() => {
    const base = this.filteredProducts();

    return this.showFavorites()
      ? base.filter(p => this.favoriteIds().includes(p.id))
      : base;
  });

  showFavoriteOnly(state: boolean) {
     this.showFavorites.set(state);
    }

}
