import {Component, input, signal, output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input<Product>();
  toggle = output<number>();
  isFavorite = input<boolean>(false);
  likenum = signal<number>(0);
  trashcan = "assets/images/traash.png";
  remove = output<number>();

  onRemove(){
    this.remove.emit(this.product()!.id);
    console.log("remove", this.product());
  }
  ChangeImg(){
    this.trashcan = "assets/images/traash2.png";
  }

  ChangeBack(){
    this.trashcan = "assets/images/traash.png";
  }

  increment(){
    this.likenum.update(likenum=>likenum+1)
  }

  image(isFavorite: boolean) {
    if (isFavorite) {
      return "assets/images/heart.png";
    }
    else{
      return "assets/images/heart2.png";
    }
  }


  onToggleFavorite(): void {
    this.toggle.emit(this.product()!.id);
  }
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
