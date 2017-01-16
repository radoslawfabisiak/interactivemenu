import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Dish } from '../models/dish';
import{ DISHES } from '../api/mock-dishes';

@Injectable()
export class DishesService {

  private dishesUrl = 'api/dishes';  // URL to web api

  constructor(private http: Http) { }
  // From API
  // getDishes(): Promise<Dish[]> {
  //   return this.http.get(this.dishesUrl)
  //              .toPromise()
  //              .then(response => response.json().data as Dish[])
  //              .catch(this.handleError);
  // }

  // From static data
  getDishes(): Dish[] {
    return DISHES;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
