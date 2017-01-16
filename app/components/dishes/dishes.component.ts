import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Dish } from '../../models/dish';
import { DishesService } from '../../services/dishes.service';
import { CartService } from '../../services/cart.service';

@Component({
  moduleId: module.id,
  selector: 'my-dishes',
  templateUrl: 'dishes.component.html',
  styleUrls: ['dishes.component.css'],
  providers: [DishesService]
})
export class DishesComponent implements OnInit {
  dishes: Dish[];
  // selectedHero: Hero;
  categories = [
    {name:'Main meals'},
    {name:'Soups'},
    {name:'Desserts'},
    {name:'Drinks'}
  ];
  selectedCategory = '';
  constructor(
    private router: Router,
    private dishesService: DishesService,
    private cartService:CartService) {
    }
  // From API
  // getDishes(): void {
  //   this.dishesService.getDishes().then(dishes => this.dishes = dishes);
  // }
  getDishes(): void{
    this.dishes = this.dishesService.getDishes();
  }
  ngOnInit(): void {
    this.getDishes();
  }
  addToCart(dish:{price:number}):void{
    this.cartService.addToCart(dish);
    // console.log(this.cartService.getCart())
  }
  selectCategory(category:{name:string}){
    this.selectedCategory = category.name;
  }
  clearCategory(){
    this.selectedCategory = '';
  }
}
