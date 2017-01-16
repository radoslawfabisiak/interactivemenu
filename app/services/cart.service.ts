import {Injectable} from '@angular/core';

@Injectable()
export class CartService {
    private cart:any={
      dishes: [],
      total: 0
    }
    addToCart(dish:{price:number}){
        this.cart.dishes.push(dish);
        this.cart.total = this.cart.total + dish.price;
    }
    getCart(){
      return this.cart;
    }
}
