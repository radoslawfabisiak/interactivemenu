import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  moduleId: module.id,
  selector: 'cart-info',
  templateUrl: 'cart-info.component.html',
  styleUrls: ['cart-info.component.css']
})
export class CartInfo implements OnInit {
  cart: Cart;
  constructor(
    private router: Router,
    private cartService:CartService
  ) {
    this.cart = cartService.getCart();
  }
  ngOnInit(): void {
    // this.getCart();
  }
}
