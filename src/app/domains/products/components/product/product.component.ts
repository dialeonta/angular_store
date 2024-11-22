import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { HighlightDirective } from '@shared/directives/highlight.directive';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe, HighlightDirective, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter();

  images: SafeUrl[] = []

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.images = this.product.images.map(img => this.sanitizer.bypassSecurityTrustUrl(img))
  }

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }

}
