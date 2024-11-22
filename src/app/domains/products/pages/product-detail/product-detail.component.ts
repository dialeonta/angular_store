import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() id?: string;

  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product = signal<Product | null>(null);
  image = signal<string>("");

  ngOnInit() {
    if(this.id) {
      this.productService.getProduct(this.id)
        .subscribe({
          next: (product) =>  {
            this.product.set(product);
            if(product.images.length > 0) {
              this.image.set(product?.images[0]);
            }
          }
        });
    }
  }

  hoverImage(img: string) {
    this.image.set(img);
  }

  addToCart() {
    const product = this.product();
    if(product) {
      this.cartService.addToCart(product);
    }
  }
}
