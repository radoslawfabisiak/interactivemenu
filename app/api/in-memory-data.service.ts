import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let dishes = [
      {id: 1, cat: 'Main meals', name: 'Pork cutlet', desc: 'Pork cutlet with boiled potatoes and tomatoes', price: 30},
      {id: 2, cat: 'Main meals', name: 'Wild pig cutlet', desc: 'Cutlet from wild pig with baked potatoes and salad', price: 25},
      {id: 3, cat: 'Main meals', name: 'Meatloaf', desc: 'Meatloaf with mushroom sauce, baked potatoes and salad', price: 35},
      {id: 4, cat: 'Soups', name: 'Tomato soup', desc: 'Tomato soup with rice', price: 12},
      {id: 5, cat: 'Soups', name: 'Chicken soup', desc: 'Chicken soup with pasta', price: 14},
      {id: 6, cat: 'Soups', name: 'Thai soup', desc: 'Thai soup with dumplings', price: 18},
      {id: 7, cat: 'Desserts', name: 'Ice creams', desc: 'Vanilla ice creams with chocolate sauce', price: 10},
      {id: 8, cat: 'Desserts', name: 'Apple Pie', desc: 'Hot apple pie with vanilla ice creams', price: 16},
      {id: 9, cat: 'Desserts', name: 'Baklava', desc: 'Georgian pie', price: 13},
      {id: 10, cat: 'Drinks', name: 'Beer', desc: '500ml', price: 8},
      {id: 11, cat: 'Drinks', name: 'Rum', desc: '50ml', price: 10},
      {id: 12, cat: 'Drinks', name: 'Tea with lemon', desc: '200ml', price: 7}
    ];
    return {dishes};
  }
}
