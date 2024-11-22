import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { Category } from '@shared/models/category.model';
import { CategoryService } from '@shared/services/category.service';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, RouterLinkWithHref, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  @Input() category_id?: string;

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);

  constructor() { }

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(change: SimpleChanges) {
    this.getProducts();
  }
  
  private getCategories() { 
    this.categoryService.getCategories()
    .subscribe({
      next: (categories) => {
        this.categories.set(categories);
      }
    });
  }
  
  private getProducts() {
    this.productService.getProducts(this.category_id)
      .subscribe({
        next: (products) => {
          this.products.set(products);
        },
        error: () => {
  
        }
      });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
