import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  
  @Input({required: true}) toggleBar!: boolean;
  @Output() toggleBarEmiter = new EventEmitter();

  private cartService = inject(CartService);

  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleHandler() {
    this.toggleBarEmiter.emit("");
  }
}
