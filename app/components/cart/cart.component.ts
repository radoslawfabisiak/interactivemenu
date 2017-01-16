import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Dish } from '../../models/dish';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
  moduleId: module.id,
  selector: 'cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})
export class CartComponent implements OnInit {
  dishes: Dish[];
  cart: Cart;
  constructor(
    private router: Router,
    private cartService:CartService
  ) {
    this.cart = cartService.getCart();
  }
  delete(dish:number){
    this.cart.total = this.cart.total - this.cart.dishes[dish].price;
    this.cart.dishes.splice(dish, dish+1);
  }
  ngOnInit(): void {
    // this.getCart();
  }
}
