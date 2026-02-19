import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  {CommonModule} from '@angular/common';
import {ProductList} from './product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('temp');
}
