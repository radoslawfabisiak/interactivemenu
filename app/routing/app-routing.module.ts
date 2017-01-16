import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DishesComponent }   from '../components/dishes/dishes.component';
import { CartComponent }  from '../components/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/dishes', pathMatch: 'full' },
  { path: 'dishes',  component: DishesComponent },
  { path: 'cart',     component: CartComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
