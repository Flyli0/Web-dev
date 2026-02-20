import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  {CommonModule} from '@angular/common';
import {ProductList} from './product-list/product-list';
import {categories} from './data/categories';
import {category} from './models/category';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories = signal<category[]>(categories);
  protected readonly title = signal('temp');
  ShowId = signal(0);
  show(id: number) {
    this.ShowId.set(id);
    console.log("set", this.ShowId);
  }
}
