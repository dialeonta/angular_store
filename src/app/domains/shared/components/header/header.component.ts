import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CartService } from '@shared/services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SideMenuComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  private cartService = inject(CartService);
  
  toggleBar = signal(false);
  cart = this.cartService.cart;

  toggleBarHandler(toggle: boolean) {
    this.toggleBar.set(!toggle);
  }
}
